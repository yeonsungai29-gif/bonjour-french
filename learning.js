'use strict';
// Authored A1 practice, not an official examination or a CEFR placement score.
const extraExamQuestions=[
 [
  {prompt:'빈칸을 채워주세요. Tu ___ un livre.',options:['as','a','ai'],answer:0,why:'주어 tu에는 avoir의 as를 씁니다.'},
  {prompt:'빈칸을 채워주세요. Elles ___ à Lyon.',options:['est','sont','sommes'],answer:1,why:'주어 elles에는 être의 sont를 씁니다.'},
  {prompt:'‘책 여러 권’을 나타내는 표현은?',options:['une livres','un livres','des livres'],answer:2,why:'불특정 복수 명사 앞에는 des를 씁니다.'},
  {prompt:'‘그 물’을 나타내는 알맞은 표현은?',options:['l’eau','le eau','la eau'],answer:0,why:'모음으로 시작하는 eau 앞에서 la는 l’로 줄어듭니다.'},
  {prompt:'빈칸을 채워주세요. Vous ___ français ?',options:['parlons','parlez','parle'],answer:1,why:'규칙 -er 동사는 주어 vous일 때 -ez로 끝나요.'},
  {prompt:'빈칸을 채워주세요. Nous ___ le café.',options:['aime','aiment','aimons'],answer:2,why:'주어 nous에는 aimer의 aimons를 씁니다.'},
  {prompt:'‘저는 차를 좋아하지 않아요’에 맞는 문장은?',options:['Je n’aime pas le thé.','Je aime pas ne le thé.','Je ne pas aime le thé.'],answer:0,why:'모음 앞에서 ne는 n’이 되고 동사 뒤에 pas를 놓아요.'},
  {prompt:'빈칸을 채워주세요. Je vais ___ Paris.',options:['en','à','au'],answer:1,why:'도시 이름 앞에는 보통 à를 써요. à Paris는 파리에라는 뜻이에요.'},
  {prompt:'알맞은 소유형용사는? ___ maison est petite. (나의 집)',options:['mon','mes','ma'],answer:2,why:'maison은 여성 단수 명사이므로 ma를 써요.'}
 ],
 [
  {passage:'Rendez-vous chez le dentiste mardi à 14 h 30.',prompt:'치과 예약은 언제인가요?',options:['화요일 오후 2시 30분','목요일 오후 2시','화요일 오전 4시 30분'],answer:0,why:'mardi는 화요일, 14 h 30은 오후 2시 30분이에요.'},
  {passage:'Appartement à louer. Deux chambres. 700 euros par mois.',prompt:'이 집의 월세는 얼마인가요?',options:['200유로','700유로','한 달 2유로'],answer:1,why:'700 euros par mois는 월 700유로예요.'},
  {passage:'Le cours de français commence lundi. Salle 12.',prompt:'프랑스어 수업은 어느 교실에서 열리나요?',options:['1번 교실','2번 교실','12번 교실'],answer:2,why:'Salle 12는 12번 교실이라는 뜻이에요.'},
  {passage:'Bonjour Emma, le dîner est à 19 h chez moi. À ce soir ! Léa',prompt:'누구의 집에서 저녁을 먹나요?',options:['레아의 집','엠마의 집','식당'],answer:0,why:'글을 쓴 사람이 Léa이고 chez moi는 내 집에서라는 뜻이에요.'},
  {passage:'Bus 8 : direction Centre-ville. Départ dans cinq minutes.',prompt:'버스는 어디로 가나요?',options:['공항','시내 중심','기차역'],answer:1,why:'Centre-ville은 시내 중심이에요.'},
  {passage:'Boulangerie ouverte de 7 h à 13 h. Fermée le lundi.',prompt:'빵집이 쉬는 날은?',options:['일요일','토요일','월요일'],answer:2,why:'Fermée le lundi는 월요일에 쉰다는 뜻이에요.'},
  {passage:'Pour le musée : 8 euros. Gratuit pour les moins de 12 ans.',prompt:'박물관에 무료로 들어갈 수 있는 사람은?',options:['12세 미만','모든 성인','12세 이상 모두'],answer:0,why:'moins de 12 ans는 12세 미만이에요.'},
  {passage:'Je m’appelle Paul. J’habite à Lille et je suis étudiant.',prompt:'폴은 무슨 일을 하나요?',options:['의사','학생','운전기사'],answer:1,why:'étudiant는 남학생 또는 학생이라는 뜻이에요.'},
  {passage:'Merci de ne pas utiliser votre téléphone dans la salle.',prompt:'이 안내문은 무엇을 요청하나요?',options:['사진을 찍으세요','전화를 걸어주세요','실내에서 휴대전화를 사용하지 마세요'],answer:2,why:'ne pas utiliser는 사용하지 말라는 뜻이에요.'}
 ],
 [
  {audio:'Le magasin ouvre à neuf heures et ferme à dix-neuf heures.',prompt:'가게는 몇 시에 문을 닫나요?',options:['오후 7시','오전 9시','오후 9시'],answer:0,why:'dix-neuf heures는 19시, 즉 오후 7시예요.'},
  {audio:'Je m’appelle Julie et j’habite à Nice.',prompt:'쥘리는 어느 도시에 사나요?',options:['리옹','니스','파리'],answer:1,why:'J’habite à Nice.는 니스에 산다는 뜻이에요.'},
  {audio:'Nous sommes trois personnes.',prompt:'몇 명이라고 말했나요?',options:['한 명','두 명','세 명'],answer:2,why:'trois personnes는 세 사람이에요.'},
  {audio:'Je voudrais un thé sans sucre.',prompt:'어떤 음료를 원하나요?',options:['설탕 없는 차','설탕 넣은 커피','우유 한 잔'],answer:0,why:'un thé sans sucre는 설탕 없는 차예요.'},
  {audio:'Le rendez-vous est jeudi matin.',prompt:'약속은 언제인가요?',options:['화요일 저녁','목요일 아침','일요일 오후'],answer:1,why:'jeudi matin은 목요일 아침이에요.'},
  {audio:'Le billet coûte quinze euros.',prompt:'표의 가격은 얼마인가요?',options:['5유로','50유로','15유로'],answer:2,why:'quinze euros는 15유로예요.'},
  {audio:'Je cherche la gare, s’il vous plaît.',prompt:'무엇을 찾고 있나요?',options:['기차역','약국','학교'],answer:0,why:'la gare는 기차역이에요.'},
  {audio:'La réservation est au nom de Martin.',prompt:'예약자 이름은 무엇인가요?',options:['민지','마르탱','폴'],answer:1,why:'au nom de Martin은 마르탱이라는 이름으로라는 뜻이에요.'},
  {audio:'Le bus arrive dans dix minutes.',prompt:'버스는 언제 도착하나요?',options:['지금','한 시간 뒤','10분 뒤'],answer:2,why:'dans dix minutes는 지금부터 10분 뒤예요.'}
 ],
 [
  {prompt:'저녁에 직원에게 건넬 수 있는 인사는?',options:['Bonsoir !','Bonne nuit !','Bon appétit !'],answer:0,why:'Bonsoir는 저녁 인사예요. Bonne nuit는 잠자리에 들 때 쓰는 인사예요.'},
  {prompt:'누군가 Merci !라고 했을 때 자연스러운 답은?',options:['Où est la gare ?','De rien !','C’est combien ?'],answer:1,why:'De rien은 천만에요라는 뜻이에요.'},
  {prompt:'우유가 어디 있는지 물으려면?',options:['Je suis le lait.','C’est le lait.','Où est le lait ?'],answer:2,why:'Où est… ?로 물건이나 장소의 위치를 물어요.'},
  {prompt:'가게에서 물건 가격을 물으려면?',options:['C’est combien ?','Comment allez-vous ?','Je m’appelle Kim.'],answer:0,why:'C’est combien ?는 얼마인가요?라는 뜻이에요.'},
  {prompt:'‘배가 아파요’에 맞는 표현은?',options:['J’ai une réservation.','J’ai mal au ventre.','Je voudrais un sac.'],answer:1,why:'J’ai mal au ventre.는 배가 아프다는 뜻이에요.'},
  {prompt:'기차표 한 장을 정중하게 요청하려면?',options:['La gare est ici.','Je suis un billet.','Un billet, s’il vous plaît.'],answer:2,why:'명사 뒤에 s’il vous plaît를 붙여 정중하게 요청할 수 있어요.'},
  {prompt:'‘왼쪽’을 나타내는 표현은?',options:['à gauche','à droite','tout droit'],answer:0,why:'à gauche는 왼쪽, à droite는 오른쪽, tout droit는 곧장이에요.'},
  {prompt:'카페에서 ‘포장할게요’라고 답하려면?',options:['Sur place.','À emporter, s’il vous plaît.','Au nom de Kim.'],answer:1,why:'à emporter는 가져가거나 포장한다는 뜻이에요.'},
  {prompt:'식당에서 ‘계산서 부탁합니다’라고 하려면?',options:['Je suis ici.','Où est la gare ?','L’addition, s’il vous plaît.'],answer:2,why:'식당 계산서는 l’addition이라고 해요.'}
 ]
];
extraExamQuestions.forEach((list,i)=>examUnits[i].questions.push(...list));
const acceptedVariations={
 'Je voudrais un thé, s’il vous plaît.':['Un thé, s’il vous plaît.'],
 'Je voudrais deux cafés, s’il vous plaît.':['Deux cafés, s’il vous plaît.'],
 'Je voudrais deux sacs, s’il vous plaît.':['Deux sacs, s’il vous plaît.'],
 'Je voudrais de l’eau, s’il vous plaît.':['De l’eau, s’il vous plaît.'],
 'Où est le fromage ?':['Où se trouve le fromage ?'],
 'Où est l’hôpital ?':['Où se trouve l’hôpital ?'],
 'Un billet pour Paris, s’il vous plaît.':['Je voudrais un billet pour Paris, s’il vous plaît.'],
 'Pouvez-vous écrire, s’il vous plaît ?':['Pouvez-vous l’écrire, s’il vous plaît ?']
};
realSituations.forEach(s=>s.variations.forEach(v=>{v[5]=acceptedVariations[v[3]]||[];}));

function validateLearning(value){if(!value||typeof value!=='object'||Array.isArray(value)||!value.schedule||typeof value.schedule!=='object'||Array.isArray(value.schedule)||!value.examStats||typeof value.examStats!=='object'||Array.isArray(value.examStats))throw Error('Invalid learning records');const out={schedule:{},examStats:{},video:{}};for(const [ref,item] of Object.entries(value.schedule)){if(!/^[0-7]:[0-2]$/.test(ref)||!item||![-1,0,1,2].includes(item.stage)||!validDate(item.due)||!validDate(item.last)||!Number.isSafeInteger(item.lapses)||item.lapses<0)throw Error('Invalid review schedule');out.schedule[ref]={stage:item.stage,due:item.due,last:item.last,lapses:item.lapses};}for(const [key,stat] of Object.entries(value.examStats)){const index=Number(key);if(!/^[0-3]$/.test(key)||!stat||!Number.isSafeInteger(stat.attempts)||stat.attempts<0||!Number.isSafeInteger(stat.correct)||stat.correct<0||stat.correct>stat.attempts)throw Error('Invalid exam statistics');out.examStats[key]={attempts:stat.attempts,correct:stat.correct};for(const field of ['seen','wrong','recent']){if(!Array.isArray(stat[field])||stat[field].some(n=>!Number.isInteger(n)||n<0||n>=examUnits[index].questions.length))throw Error('Invalid exam question record');out.examStats[key][field]=[...new Set(stat[field])];}}if(value.video!==undefined){const v=value.video;if(!v||typeof v!=='object'||Array.isArray(v))throw Error('Invalid video records');if(v.cafe!==undefined){const c=v.cafe;if(!c||typeof c.completed!=='boolean'||!Number.isSafeInteger(c.attempts)||c.attempts<0)throw Error('Invalid cafe progress');out.video.cafe={completed:c.completed,attempts:c.attempts};}}return out;}
function learningState(){try{state.learning=validateLearning(state.learning);}catch{state.learning={schedule:{},examStats:{},video:{}};}return state.learning;}
function addDays(date,days){const [y,m,d]=date.split('-').map(Number),v=new Date(y,m-1,d);v.setDate(v.getDate()+days);return v.getFullYear()+'-'+String(v.getMonth()+1).padStart(2,'0')+'-'+String(v.getDate()).padStart(2,'0');}
function schedulePhrase(ref,right){if(!/^[0-7]:[0-2]$/.test(ref))return;const records=learningState().schedule,old=records[ref],today=dateKey();if(!right){records[ref]={stage:-1,due:today,last:today,lapses:(old?.lapses||0)+1};return;}if(!old||old.stage===-1){records[ref]={stage:0,due:addDays(today,1),last:today,lapses:old?.lapses||0};return;}if(old.due>today)return;const stage=Math.min(2,old.stage+1);records[ref]={stage,due:addDays(today,[1,3,7][stage]),last:today,lapses:old.lapses};}
function duePhraseRefs(){const schedule=learningState().schedule,completed=journeyState().completed,today=dateKey();return Object.keys(schedule).filter(ref=>completed.includes(Number(ref[0]))&&schedule[ref].due<=today).sort((a,b)=>schedule[a].due.localeCompare(schedule[b].due)||schedule[b].lapses-schedule[a].lapses);}
function selectReviewRefs(refs){const allowed=new Set(refs),due=duePhraseRefs().filter(ref=>allowed.has(ref)),weak=shuffle(practiceState().weak.filter(ref=>allowed.has(ref)&&!due.includes(ref))),used=new Set([...due,...weak]);return [...due,...weak,...shuffle(refs.filter(ref=>!used.has(ref)))];}
function reviewScheduleSummary(completed){if(!completed)return '학습 지도에서 첫 수업을 완료하면 누적·간격 복습이 열려요.';const due=duePhraseRefs().length;return due?'오늘 복습할 표현 '+due+'개 · 최대 5개씩 연습해요. 정답이면 1일·3일·7일 간격으로 다시 만나요.':'오늘 예정된 복습은 없어요. 배운 표현을 섞어 추가 연습할 수 있습니다.';}
function examStat(unit){const records=learningState().examStats;if(!records[unit])records[unit]={attempts:0,correct:0,seen:[],wrong:[],recent:[]};return records[unit];}
function selectExamQuestions(unit){const stat=examStat(unit),ids=examUnits[unit].questions.map((_,i)=>i),wrong=shuffle(stat.wrong),unseen=shuffle(ids.filter(i=>!stat.seen.includes(i)&&!wrong.includes(i))),fresh=shuffle(ids.filter(i=>!wrong.includes(i)&&!unseen.includes(i)&&!stat.recent.includes(i))),rest=shuffle(ids.filter(i=>!wrong.includes(i)&&!unseen.includes(i)&&!fresh.includes(i)));const selected=[...wrong,...unseen,...fresh,...rest].slice(0,5);stat.recent=selected;return selected;}
function recordExamAnswer(unit,id,right){const stat=examStat(unit);stat.attempts++;if(right){stat.correct++;stat.wrong=stat.wrong.filter(i=>i!==id);}else if(!stat.wrong.includes(id))stat.wrong.push(id);if(!stat.seen.includes(id))stat.seen.push(id);}
function examAreaSummary(unit){const stat=examStat(unit);return '문제 '+examUnits[unit].questions.length+'개 · 회차당 5문제 · '+(stat.attempts?'정답률 '+Math.round(stat.correct/stat.attempts*100)+'% · 복습할 오답 '+stat.wrong.length+'개':'아직 영역별 풀이 기록이 없어요.');}
function renderExamAnalysis(){$('exam-analysis').replaceChildren();examUnits.forEach((unit,i)=>{const stat=examStat(i),row=element('div',undefined,'analysis-row'),b=element('button',stat.wrong.length?'오답 중심 연습 →':'연습 →','secondary');b.onclick=()=>startExam(i);row.append(element('strong',unit.title),element('span',stat.attempts?Math.round(stat.correct/stat.attempts*100)+'% · '+stat.attempts+'문제 · 오답 '+stat.wrong.length+'개':'아직 기록 없음','hint'),b);$('exam-analysis').append(row);});}
// Old accounts start a fresh review interval when they first use this version.
function seedReviewSchedule(){const data=learningState();for(const unit of journeyState().completed)for(let p=0;p<units[unit].phrases.length;p++){const ref=unit+':'+p;if(!data.schedule[ref])data.schedule[ref]={stage:0,due:addDays(dateKey(),1),last:dateKey(),lapses:0};}}
seedReviewSchedule();renderExamPath();renderPractice();renderStudy();
