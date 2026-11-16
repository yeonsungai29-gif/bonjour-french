-- Run once in the project's SQL editor. No user emails or passwords are stored here.
create table if not exists public.learning_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null check (jsonb_typeof(data) = 'object'),
  revision bigint not null default 1 check (revision > 0),
  updated_at timestamptz not null default now()
);
alter table public.learning_states enable row level security;
alter table public.learning_states force row level security;
revoke all on public.learning_states from anon, authenticated;
grant select, insert, update on public.learning_states to authenticated;
drop policy if exists own_learning_select on public.learning_states;
create policy own_learning_select on public.learning_states for select to authenticated
using ((select auth.uid()) = user_id);
drop policy if exists own_learning_insert on public.learning_states;
create policy own_learning_insert on public.learning_states for insert to authenticated
with check ((select auth.uid()) = user_id);
drop policy if exists own_learning_update on public.learning_states;
create policy own_learning_update on public.learning_states for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Compare revisions to avoid silently overwriting changes made on another device.
-- SECURITY INVOKER retains row-level policies; the explicit user also protects an account switch.
create or replace function public.save_learning_state(
  p_user_id uuid, p_expected_revision bigint, p_data jsonb
) returns bigint language plpgsql security invoker set search_path = public as $$
declare result_revision bigint;
begin
  if auth.uid() is null or auth.uid() <> p_user_id then
    raise exception 'Account mismatch' using errcode = '42501';
  end if;
  if p_expected_revision < 0 or p_expected_revision is null or p_data is null
    or jsonb_typeof(p_data) <> 'object' or octet_length(p_data::text) > 1048576
    or jsonb_typeof(p_data->'known') is distinct from 'array'
    or jsonb_typeof(p_data->'daily') is distinct from 'object'
    or jsonb_typeof(p_data->'journey') is distinct from 'object' then
    raise exception 'Invalid learning data' using errcode = '22023';
  end if;
  if p_expected_revision = 0 then
    insert into public.learning_states(user_id,data,revision,updated_at)
    values(p_user_id,p_data,1,now()) on conflict(user_id) do nothing
    returning revision into result_revision;
  else
    update public.learning_states
    set data=p_data,revision=revision+1,updated_at=now()
    where user_id=p_user_id and revision=p_expected_revision
    returning revision into result_revision;
  end if;
  if result_revision is null then
    raise exception 'Learning state changed on another device' using errcode = '40001';
  end if;
  return result_revision;
end;
$$;
revoke all on function public.save_learning_state(uuid,bigint,jsonb) from public, anon;
grant execute on function public.save_learning_state(uuid,bigint,jsonb) to authenticated;
