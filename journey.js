'use strict';
// Each unit teaches the exact phrases used by its five practice questions.
const units = [
  {title:'처음 만난 사람에게',place:'첫 인사 · 소개 · 정중한 말투',icon:'01',known:[0,2],
   context:'프랑스에서 이웃을 처음 만났어요. 인사를 건네고 이름을 말해볼까요?',
   phrases:[
    ['Bonjour !','안녕하세요!','낮에 가게에 들어가거나 낯선 사람에게 말을 걸 때 먼저 인사해요.'],
    ['Je m’appelle Minji.','제 이름은 민지예요.','Minji를 자신의 이름으로 바꿔 말해보세요.'],
    ['Au revoir !','안녕히 가세요!','자리를 떠날 때 건네는 인사예요. 만날 때는 Bonjour를 써요.']
   ]},
  {title:'카페에서 주문하기',place:'주문 · 가격 · 계산',icon:'02',known:[8,5],
   context:'동네 카페에 들렀어요. 커피를 정중하게 주문하고 계산까지 해보세요.',
   phrases:[
    ['Je voudrais un café, s’il vous plaît.','커피 한 잔 부탁합니다.','Je voudrais…는 정중하게 원하는 것을 말하는 표현이에요.'],
    ['C’est combien ?','얼마인가요?','가격을 물을 때 쓸 수 있어요.'],
    ['Je peux payer par carte ?','카드로 결제할 수 있나요?','직원에게 억양을 올려 질문해요. par carte는 카드로라는 뜻이에요.']
   ]},
  {title:'마트에서 장보기',place:'위치 묻기 · 봉투 · 영수증',icon:'03',known:[33,5],
   context:'마트에서 우유를 찾고 있어요. 계산대에서는 봉투와 영수증도 요청해보세요.',
   phrases:[
    ['Où est le lait ?','우유는 어디에 있나요?','Où est… ? 다음에 찾는 물건을 넣으면 돼요.'],
    ['Je voudrais un sac, s’il vous plaît.','봉투 하나 부탁합니다.','매장에 따라 봉투는 유료일 수 있어요.'],
    ['Je voudrais un ticket de caisse.','영수증을 받고 싶어요.','ticket de caisse는 계산 영수증이에요.']
   ]},
  {title:'길 찾고 이동하기',place:'역 · 승차권 · 방향',icon:'04',known:[26,27,5],
   context:'기차를 타러 가는 길이에요. 역을 찾고 목적지까지 가는 표를 구해보세요.',
   phrases:[
    ['Où est la gare ?','기차역은 어디에 있나요?','gare는 기차역이에요. 버스 정류장은 arrêt de bus라고 해요.'],
    ['Un billet pour Lyon, s’il vous plaît.','리옹행 표 한 장 부탁합니다.','pour 다음에 목적지를 넣어요.'],
    ['C’est à gauche ou à droite ?','왼쪽인가요, 오른쪽인가요?','à gauche는 왼쪽, à droite는 오른쪽이에요.']
   ]},
  {title:'숙소에 체크인하기',place:'예약 확인 · 이름 · 와이파이',icon:'05',known:[],
   context:'숙소 프런트에 도착했어요. 예약을 확인하고 필요한 정보를 물어보세요.',
   phrases:[
    ['J’ai une réservation.','예약했어요.','호텔이나 식당에서 예약이 있음을 알릴 때 써요.'],
    ['La réservation est au nom de Kim.','예약자 이름은 김입니다.','Kim 자리에 예약할 때 쓴 이름을 넣어요.'],
    ['Quel est le mot de passe du Wi-Fi ?','와이파이 비밀번호가 무엇인가요?','mot de passe는 비밀번호예요.']
   ]},
  {title:'식당에서 식사하기',place:'주문 · 알레르기 · 계산서',icon:'06',known:[5],
   context:'식당에서 음식을 주문해요. 알레르기를 알리고 식사 후 계산서를 요청해보세요.',
   phrases:[
    ['Je voudrais la carte, s’il vous plaît.','메뉴판을 보고 싶어요.','la carte는 음식 목록이에요. un menu는 정해진 구성의 세트 메뉴를 뜻하기도 해요.'],
    ['Je suis allergique aux arachides.','저는 땅콩 알레르기가 있어요.','알레르기는 주문 전에 명확하게 알리세요. arachides는 땅콩이에요.'],
    ['L’addition, s’il vous plaît.','계산서 부탁합니다.','식당에서 계산서를 요청하는 간단하고 정중한 표현이에요.']
   ]},
  {title:'몸이 좋지 않을 때',place:'증상 · 약국 · 진료',icon:'07',known:[],
   context:'몸이 좋지 않아요. 아픈 곳을 말하고 약국이나 의사의 도움을 요청해보세요.',
   phrases:[
    ['J’ai mal à la tête.','머리가 아파요.','J’ai mal à…는 아픈 부위를 말하는 표현이에요.'],
    ['Où est la pharmacie ?','약국은 어디에 있나요?','pharmacie는 약국이에요.'],
    ['J’ai besoin d’un médecin.','의사의 도움이 필요해요.','심각한 응급 상황이라면 진료를 기다리기보다 현지 응급전화로 도움을 요청하세요.']
   ]},
  {title:'도움을 구하고 대화 이어가기',place:'다시 말하기 · 속도 · 도움 요청',icon:'08',known:[5],
   context:'말을 다 알아듣지 못해도 괜찮아요. 다시 말해 달라고 부탁하고 도움을 구해보세요.',
   phrases:[
    ['Pouvez-vous répéter, s’il vous plaît ?','다시 말씀해 주시겠어요?','정중하게 다시 말해 달라고 부탁할 수 있어요.'],
    ['Plus lentement, s’il vous plaît.','조금 더 천천히 말씀해 주세요.','lentement는 천천히라는 뜻이에요.'],
    ['Pouvez-vous m’aider ?','저를 도와주실 수 있나요?','직원이나 주변 사람에게 도움을 요청할 때 써요. 프랑스에서 긴급 상황은 112로 도움을 요청할 수 있어요.']
   ]}
];

function journeyState() {
  const j=state.journey;
  if(!j||typeof j!=='object'||Array.isArray(j))state.journey={};
  const value=state.journey;
  // Keep a contiguous course progression; old vocabulary records remain separate.
  const completed=Array.isArray(value.completed)?value.completed:[];
  value.completed=[];
  for(let i=0;i<units.length;i++){if(completed.includes(i))value.completed.push(i);else break;}
  if(!Number.isSafeInteger(value.xp)||value.xp<0)value.xp=0;
  value.dates=Array.isArray(value.dates)?[...new Set(value.dates.filter(d=>typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d)))]:[];
  return value;
}
function previousDay(date){const [y,m,d]=date.split('-').map(Number);const dt=new Date(y,m-1,d);dt.setDate(dt.getDate()-1);return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');}
function streakCount(){const dates=journeyState().dates;let date=dateKey(),count=0;if(!dates.includes(date))date=previousDay(date);while(dates.includes(date)){count++;date=previousDay(date);}return count;}
let activeUnit=-1,questions=[],pending=[],mastered=new Set(),questionIndex=0,phase='idle',selection=null,chosen=[],lessonRight=0,lessonAttempts=0,launcher=null;
function showView(view){$('real-lab').hidden=view!=='real';$('course-home').hidden=view!=='home';$('practice-library').hidden=view!=='library';for(const [id,v] of [['home-view','home'],['library-view','library'],['real-view','real']]){const b=$(id);b.classList.toggle('active',view===v);b.setAttribute('aria-pressed',String(view===v));}goals();if(typeof renderPractice==='function')renderPractice();}
$('home-view').onclick=()=>showView('home');$('library-view').onclick=()=>showView('library');$('goal-practice').onclick=()=>{showView('library');activateTab('words');$('topic').focus();};
function refreshJourney(){const j=journeyState(),next=j.completed.length;$('xp').textContent=j.xp+' XP';$('streak').textContent=streakCount()+'일 연속';$('course-count').textContent=next+' / '+units.length+' 완료';$('continue-course').textContent=next===units.length?'첫 수업 다시 연습하기 ↻':next?'이어서 배우기 →':'첫 수업 시작하기 →';$('lesson-path').replaceChildren();units.forEach((unit,i)=>{const done=j.completed.includes(i),locked=i>next,c=element('div',undefined,'path-node '+(done?'done':i===next?'current':'locked')),number=element('div',done?'✓':unit.icon,'node-number'),b=element('button',undefined,'node-card');b.disabled=locked;b.setAttribute('aria-label',unit.title+' · '+(locked?'이전 수업 완료 후 열림':done?'완료, 다시 연습':'학습 시작'));b.append(element('span',done?'완료 · 다시 연습':locked?'이전 수업을 먼저 마쳐주세요':'지금 시작할 수 있어요','node-status'),element('strong',unit.title),element('small',unit.place+' · 핵심 표현 3개'));b.onclick=()=>startLesson(i,b);c.append(number,b);$('lesson-path').append(c);});}
$('continue-course').onclick=()=>startLesson(journeyState().completed.length===units.length?0:journeyState().completed.length,$('continue-course'));
function sessionFocus(){$('session-title').focus();}
function sessionFrame(kicker,title,context){$('session-kicker').textContent=kicker;$('session-title').textContent=title;$('session-context').textContent=context;$('session-content').replaceChildren();$('session-feedback').textContent='';$('session-feedback').className='session-feedback';$('session-action').disabled=false;}
function startLesson(i,button){if(i<0||i>=units.length||i>journeyState().completed.length)return;activeUnit=i;launcher=button;phase='intro';mastered=new Set();pending=[];questionIndex=0;lessonRight=0;lessonAttempts=0;const u=units[i];questions=[{type:'choice',phrase:0},{type:'listening',phrase:1},{type:'build',phrase:0},{type:'choice',phrase:2},{type:'build',phrase:2}];if(i>0){const past=shuffle(journeyState().completed.filter(n=>n<i))[0];if(past!==undefined)questions.push({type:'choice',phrase:Math.floor(Math.random()*3),unit:past,review:true});}$('app-main').hidden=true;$('session').hidden=false;$('session-bar').style.width='0%';$('session-step').textContent='먼저 표현 익히기';sessionFrame('상황 '+(i+1)+' · 핵심 표현',u.title,u.context);u.phrases.forEach(([fr,ko,note])=>{const c=element('section',undefined,'phrase-card'),f=element('span',fr,'phrase'),b=element('button','▶ 발음 듣기','secondary');f.lang='fr';b.onclick=()=>speak(fr);c.append(f,element('strong',ko),element('p',note),b);$('session-content').append(c);});$('session-action').textContent='표현을 익혔어요 · 연습 시작 →';sessionFocus();}
function beginPractice(){const u=units[activeUnit];for(const i of u.known){const d=today();d.words=valid([...d.words,i]);}save();pending=questions.map((_,i)=>i);phase='question';renderQuestion();}
function renderQuestion(){questionIndex=pending[0];const q=questions[questionIndex],u=units[q.unit??activeUnit],phrase=u.phrases[q.phrase];selection=null;chosen=[];phase='question';$('session-step').textContent=mastered.size+' / '+questions.length+' 문제 익힘'+(lessonAttempts>=questions.length?' · 오답 재도전':'');$('session-bar').style.width=(mastered.size/questions.length*100)+'%';sessionFrame(q.review?'지난 수업 복습 · '+u.title:q.type==='build'?'문장 만들기':q.type==='listening'?'듣고 뜻 고르기':'상황에 맞는 말 고르기',q.type==='build'?'이 말을 프랑스어로 해볼까요?':q.type==='listening'?'어떤 말이 들리나요?':'이럴 때 어떻게 말할까요?',q.type==='listening'?'소리를 듣고 알맞은 한국어 뜻을 골라주세요.':phrase[1]);
  if(q.type==='build')renderBuild(phrase[0]);
  else {if(q.type==='listening'){const row=element('div',undefined,'audio-row'),play=element('button','▶ 천천히 듣기','secondary'),fallback=element('button','소리 대신 글로 보기','secondary'),text=element('p',phrase[0],'phrase');text.lang='fr';text.hidden=true;play.onclick=()=>speak(phrase[0]);fallback.onclick=()=>{text.hidden=false;$('session-context').textContent='표현을 읽고 알맞은 한국어 뜻을 고르세요.';};row.append(play,fallback,text);$('session-content').append(row);}const opts=element('div',undefined,'options');shuffle([0,1,2]).forEach(i=>{const b=element('button',u.phrases[i][q.type==='listening'?1:0],'secondary option');if(q.type!=='listening')b.lang='fr';b.setAttribute('aria-pressed','false');b.onclick=()=>{if(phase!=='question')return;selection=i;[...opts.children].forEach(el=>{const selected=el===b;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected));});$('session-action').disabled=false;};opts.append(b);});$('session-content').append(opts);}
  $('session-action').textContent='정답 확인';$('session-action').disabled=true;sessionFocus();
}
function renderBuild(sentence){const tokens=sentence.split(' '),board=element('div',undefined,'answer-board'),bank=element('div',undefined,'word-bank');board.setAttribute('aria-label','선택한 문장, 단어를 누르면 되돌릴 수 있어요');bank.setAttribute('aria-label','문장을 만들 단어');const hint=element('p','단어를 순서대로 선택하세요. 선택한 단어를 다시 누르면 되돌릴 수 있어요.','hint');const buttons=new Map();function drawBoard(){board.replaceChildren();if(!chosen.length)board.append(element('span','여기에 문장을 완성해 보세요.','hint'));chosen.forEach(i=>{const b=element('button',tokens[i],'secondary word-token');b.lang='fr';b.onclick=()=>{if(phase!=='question')return;chosen=chosen.filter(x=>x!==i);buttons.get(i).disabled=false;drawBoard();};board.append(b);});$('session-action').disabled=chosen.length!==tokens.length;}
shuffle(tokens.map((_,i)=>i)).forEach(i=>{const b=element('button',tokens[i],'secondary word-token');b.lang='fr';b.onclick=()=>{if(phase!=='question')return;chosen.push(i);b.disabled=true;drawBoard();};buttons.set(i,b);bank.append(b);});$('session-content').append(board,bank,hint);drawBoard();}
function checkAnswer(){if(phase!=='question')return;const q=questions[questionIndex],p=units[q.unit??activeUnit].phrases[q.phrase];if(q.type==='build'&&chosen.length!==p[0].split(' ').length)return;if(q.type!=='build'&&selection===null)return;const right=q.type==='build'?chosen.map(i=>p[0].split(' ')[i]).join(' ')===p[0]:selection===q.phrase;phase='feedback';lessonAttempts++;if(right){mastered.add(questionIndex);lessonRight++;}else pending.push(questionIndex);pending.shift();if(typeof practiceState==='function'){const practice=practiceState(),ref=(q.unit??activeUnit)+':'+q.phrase;practice.weak=right?practice.weak.filter(id=>id!==ref):[...new Set([...practice.weak,ref])];}record(right);$('session-feedback').className='session-feedback '+(right?'right':'wrong');$('session-feedback').textContent=(right?'정확해요! ':'괜찮아요. 뒤에서 한 번 더 연습해요. ')+'정답: '+p[0]+' — '+p[1];$('session-bar').style.width=(mastered.size/questions.length*100)+'%';$('session-step').textContent=mastered.size+' / '+questions.length+' 문제 익힘';$('session-action').textContent=pending.length?'계속하기 →':'수업 완료하기 →';}
function completeLesson(){if(phase==='result'||activeUnit<0||mastered.size!==questions.length)return;phase='result';const j=journeyState(),first=!j.completed.includes(activeUnit),earned=first?20:5;if(first)j.completed.push(activeUnit);j.xp+=earned;if(!j.dates.includes(dateKey()))j.dates.push(dateKey());save();refreshJourney();sessionFrame('BIEN JOUÉ ! · 수업 완료','오늘의 대화가 하나 늘었어요.',units[activeUnit].title+' 수업의 모든 문제와 오답 복습을 마쳤어요.');$('session-step').textContent='완료';$('session-bar').style.width='100%';const mark=element('div','✦','result-mark'),summary=element('div',undefined,'result-stats');for(const [value,label] of [['+'+earned,'획득 XP'],[Math.round(lessonRight/lessonAttempts*100)+'%','이번 수업 정답률'],[streakCount()+'일','연속 수업 완료']]){const c=element('div',undefined,'panel');c.append(element('strong',value),element('small',label));summary.append(c);}$('session-content').append(mark,summary,element('p',units[activeUnit].phrases[0][0],'phrase'),element('p','소리 내어 한 번 말해보고, 다음 대화로 나아가세요.','hint'));$('session-action').textContent=activeUnit<units.length-1?'다음 수업 시작 →':'학습 지도로 돌아가기';}
$('session-action').onclick=()=>{if(phase==='intro')beginPractice();else if(phase==='question')checkAnswer();else if(phase==='feedback'){if(pending.length)renderQuestion();else completeLesson();}else if(phase==='result'){if(activeUnit<units.length-1)startLesson(activeUnit+1,$('continue-course'));else exitLesson();}};
function exitLesson(){if(phase!=='result'&&phase!=='idle'&&!confirm('수업에서 나갈까요? 완료 전인 수업의 진행은 저장되지 않지만, 문제 풀이 기록은 유지됩니다.'))return;if('speechSynthesis' in window)speechSynthesis.cancel();phase='idle';activeUnit=-1;$('session').hidden=true;$('app-main').hidden=false;showView('home');refreshJourney();if(launcher=== $('continue-course'))launcher.focus();else $('continue-course').focus();}
$('session-exit').onclick=exitLesson;
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshJourney();});
refreshJourney();
