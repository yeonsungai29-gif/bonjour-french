'use strict';
// Use the visitor's calendar date, not elapsed hours or the server's timezone.
// Reuse the reviewed course phrases so the daily card cannot drift from lesson content.
const dailyFrenchPhrases=units.flatMap((unit,i)=>unit.phrases.map(p=>({text:p[0],meaning:p[1],topic:unit.title,unit:i})));
const dailyJapanesePhrases=jpUnits.flatMap(unit=>unit.phrases.map(p=>({text:p[0],reading:p[1],meaning:p[2],topic:unit.title})));
if(window.LANGUAGE_LIBRARY){dailyFrenchPhrases.push(...window.LANGUAGE_LIBRARY.fr.phrases.map(p=>({text:p.text,meaning:p.meaning,topic:p.topic,unit:null})));dailyJapanesePhrases.push(...window.LANGUAGE_LIBRARY.ja.phrases.map(p=>({text:p.text,reading:p.reading,readingSource:p.readingSource,meaning:p.meaning,topic:p.topic})));}
const dailyTopicIcons=['👋','☕','🛍','🚆','🛎','🍽','✚','💬'];
let dailyPhraseTimer=null;
function dailyPhraseIndex(date,length){if(!Number.isInteger(length)||length<1)throw Error('Daily phrase bank must not be empty');const day=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);return ((day%length)+length)%length;}
function renderDailyPhrases(date=new Date()){
 const fr=dailyFrenchPhrases[dailyPhraseIndex(date,dailyFrenchPhrases.length)],ja=dailyJapanesePhrases[dailyPhraseIndex(date,dailyJapanesePhrases.length)];
 const label=date.getFullYear()+'.'+String(date.getMonth()+1).padStart(2,'0')+'.'+String(date.getDate()).padStart(2,'0')+' · 기기 날짜 기준 · 매일 변경';
 $('daily-fr-topic').textContent='오늘의 한마디 · '+fr.topic;$('daily-fr-text').textContent=fr.text;$('daily-fr-meaning').textContent=fr.meaning;$('daily-fr-date').textContent=label;$('daily-fr-icon').textContent=dailyTopicIcons[fr.unit]||'💬';
 $('daily-ja-topic').textContent='오늘의 한마디 · '+ja.topic;$('daily-ja-text').textContent=ja.text;$('daily-ja-reading').textContent=ja.reading;$('daily-ja-meaning').textContent=ja.meaning;$('daily-ja-date').textContent=label+(ja.readingSource==='자동 참고'?' · 가나 읽기는 자동 변환 참고':'');
}
function refreshDailyPhrases(){renderDailyPhrases();clearTimeout(dailyPhraseTimer);const now=new Date(),next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,1);dailyPhraseTimer=setTimeout(refreshDailyPhrases,Math.max(1000,next.getTime()-now.getTime()));}
window.addEventListener('focus',refreshDailyPhrases);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshDailyPhrases();});
refreshDailyPhrases();
