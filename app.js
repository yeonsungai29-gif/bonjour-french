'use strict';
const words=[
['bonjour','안녕하세요','인사','Bonjour, comment allez-vous ?','안녕하세요, 어떻게 지내세요?'],
['merci','감사합니다','인사','Merci beaucoup !','정말 감사합니다!'],
['au revoir','안녕히 가세요','인사','Au revoir et à bientôt !','안녕히 가세요, 곧 또 만나요!'],
['oui','네','기본 표현','Oui, avec plaisir.','네, 기꺼이요.'],
['non','아니요','기본 표현','Non, merci.','아니요, 괜찮습니다.'],
["s’il vous plaît",'부탁합니다','기본 표현',"Un café, s’il vous plaît.",'커피 한 잔 부탁합니다.'],
['le pain','빵','음식',"J’aime le pain.",'저는 빵을 좋아해요.'],
["l’eau",'물','음식',"Je voudrais de l’eau.",'물을 좀 마시고 싶어요.'],
['le café','커피','음식','Le café est chaud.','커피가 뜨거워요.'],
['la pomme','사과','음식','Je mange une pomme.','저는 사과를 먹어요.'],
['la maison','집','일상','Je suis à la maison.','저는 집에 있어요.'],
['le livre','책','일상','Je lis un livre.','저는 책을 읽어요.'],
['le chat','고양이','동물','Le chat dort.','고양이가 자요.'],
['le chien','개','동물','Le chien joue.','개가 놀아요.'],
['le soleil','태양','자연','Le soleil brille.','태양이 빛나요.'],
['la fleur','꽃','자연','La fleur est belle.','꽃이 아름다워요.']
];
const phrases=[['만났을 때','Comment allez-vous ?','어떻게 지내세요?','격식을 갖춘 인사예요. 친한 사이에는 « Ça va ? »라고 해요.'],['나를 소개할 때','Je m’appelle Minji.','제 이름은 민지예요.','Minji 자리에 자신의 이름을 넣어보세요.'],['카페에서','Je voudrais un café, s’il vous plaît.','커피 한 잔 부탁합니다.','« Je voudrais… »는 정중하게 주문하는 표현이에요.'],['길을 물을 때','Où est la gare ?','기차역은 어디에 있나요?','« Où est… ? »로 장소의 위치를 물어보세요.'],['이해가 안 될 때','Pouvez-vous répéter, s’il vous plaît ?','다시 말씀해 주시겠어요?','상대에게 정중하게 반복을 요청하는 표현이에요.'],['감사 인사에 답할 때','De rien !','천만에요!','« Merci »라는 말을 들으면 이렇게 답해보세요.']];
const $=id=>document.getElementById(id);const key='bonjour-learning-v1';
let state={known:[],attempts:0,correct:0};try{const s=JSON.parse(localStorage.getItem(key));if(s&&Array.isArray(s.known)&&Number.isInteger(s.attempts)&&Number.isInteger(s.correct)&&s.correct>=0&&s.correct<=s.attempts){state={known:[...new Set(s.known.filter(i=>Number.isInteger(i)&&i>=0&&i<words.length))],attempts:s.attempts,correct:s.correct};}}catch{}
let index=0,question=0,score=0,answered=false,quizOrder=[];
function stats(){$('learned').textContent=state.known.length;$('attempts').textContent=state.attempts;$('accuracy').textContent=state.attempts?Math.round(state.correct/state.attempts*100)+'%':'—';}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{$('notice').textContent='브라우저 저장이 차단되어 있어요. 현재 화면에서만 학습 기록을 유지합니다.';}stats();}
function renderWord(){const w=words[index];$('counter').textContent=String(index+1).padStart(2,'0')+' / '+words.length;$('category').textContent=w[2];$('french').textContent=w[0];$('meaning').textContent='뜻을 떠올려 보세요';$('example').textContent='예문과 뜻은 ‘뜻 보기’를 누르면 나타나요.';$('reveal').textContent='뜻 보기';$('reveal').disabled=false;$('memorize').textContent=state.known.includes(index)?'외운 단어 ✓':'외웠어요 ✓';$('memorize').disabled=state.known.includes(index);$('bar').style.width=((index+1)/words.length*100)+'%';}
function speak(text){if(!('speechSynthesis' in window)){$('notice').textContent='이 브라우저에서는 발음 듣기를 지원하지 않아요. Chrome 또는 Safari에서 다시 시도해 주세요.';return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.85;const voice=speechSynthesis.getVoices().find(v=>v.lang.startsWith('fr'));if(voice)u.voice=voice;u.onerror=()=>{$('notice').textContent='프랑스어 음성을 재생하지 못했어요. 기기의 음성 설정과 네트워크 연결을 확인해 주세요.';};speechSynthesis.speak(u);}
$('listen').onclick=()=>speak(words[index][0]);$('reveal').onclick=()=>{$('meaning').textContent=words[index][1];$('example').textContent=words[index][3]+' — '+words[index][4];$('reveal').disabled=true;};$('memorize').onclick=()=>{if(!state.known.includes(index))state.known.push(index);save();$('meaning').textContent=words[index][1];$('example').textContent=words[index][3]+' — '+words[index][4];$('memorize').textContent='외운 단어 ✓';$('memorize').disabled=true;};$('next').onclick=()=>{index=(index+1)%words.length;renderWord();};$('previous').onclick=()=>{index=(index+words.length-1)%words.length;renderWord();};
phrases.forEach(([title,fr,ko,tip])=>{const card=document.createElement('article');card.className='panel dialogue';const h=document.createElement('h3');h.textContent=title;const f=document.createElement('p');f.className='phrase';f.lang='fr';f.textContent=fr;const k=document.createElement('p');k.textContent=ko;const t=document.createElement('p');t.className='hint';t.textContent=tip;const b=document.createElement('button');b.className='secondary';b.textContent='↗ 발음 듣기';b.onclick=()=>speak(fr);card.append(h,f,k,t,b);$('dialogues').append(card);});
function shuffle(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function beginQuiz(){question=0;score=0;quizOrder=shuffle(words.map((_,i)=>i)).slice(0,5);renderQuiz();}
function renderQuiz(){answered=false;$('quiz-count').textContent=(question+1)+' / 5';const correct=quizOrder[question];$('quiz-word').textContent=words[correct][0];$('feedback').textContent='';$('quiz-next').hidden=true;$('options').replaceChildren();const choices=shuffle([correct,...shuffle(words.map((_,i)=>i).filter(i=>i!==correct)).slice(0,3)]);choices.forEach(i=>{const b=document.createElement('button');b.className='secondary option';b.textContent=words[i][1];b.onclick=()=>{if(answered)return;answered=true;state.attempts++;const right=i===correct;if(right){state.correct++;score++;}save();[...$('options').children].forEach((el,j)=>{el.disabled=true;if(choices[j]===correct)el.classList.add('correct');});if(!right)b.classList.add('wrong');$('feedback').textContent=right?'정답이에요! Très bien !':'정답은 ‘'+words[correct][1]+'’입니다.';$('quiz-next').textContent=question===4?'결과 보기 →':'다음 문제 →';$('quiz-next').hidden=false;};$('options').append(b);});}
$('quiz-next').onclick=()=>{question++;if(question<5){renderQuiz();return;}$('quiz-count').textContent='학습 완료';$('quiz-word').textContent=score+' / 5';$('options').replaceChildren();$('feedback').textContent=score===5?'완벽해요! 다음 도전도 준비됐나요?':'잘했어요! 단어 카드로 복습하고 다시 도전해 보세요.';$('quiz-next').textContent='다시 도전하기 ↻';$('quiz-next').onclick=()=>{beginQuiz();$('quiz-next').onclick=nextQuiz;};};
const nextQuiz=$('quiz-next').onclick;
const tabs=[...document.querySelectorAll('[data-tab]')];tabs.forEach((b,idx)=>{b.onclick=()=>{tabs.forEach(t=>{const active=t===b;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;$(t.dataset.tab).hidden=!active;});};b.tabIndex=idx===0?0:-1;b.onkeydown=e=>{let n;if(e.key==='ArrowRight')n=(idx+1)%tabs.length;if(e.key==='ArrowLeft')n=(idx+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].click();tabs[n].focus();}};});
$('reset').onclick=()=>{if(confirm('이 브라우저에 저장된 단어와 퀴즈 기록을 모두 초기화할까요?')){state={known:[],attempts:0,correct:0};save();renderWord();beginQuiz();$('quiz-next').onclick=nextQuiz;}};
stats();renderWord();beginQuiz();
