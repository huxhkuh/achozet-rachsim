
'use strict';
const projects={
 rimonim:{name:'רימונים 2',image:'assets/rimonim-129c744098.webp',category:'רכסים · מגורי בוטיק',description:'פרויקט אינטימי בן ארבע יחידות דיור, עם דירות גן ופנטהאוזים. התכנון משלב מרחבים למשפחה, שטחי חוץ והתאמה לאורח החיים הקהילתי ברכסים.',facts:[['תפקיד החברה','יזמות למגורים'],['היקף הפרויקט','4 יחידות דיור'],['שלב לפי חומרי החברה','מאוכלס']]},
 uziel17:{name:'עוזיאל 17',image:'assets/uziel17-31f90addc5.webp',category:'מגורי בוטיק מול נוף הכרמל',description:'שלוש דירות מרווחות בתכנון אדריכלי עכשווי, עם מרפסות רחבות, אור טבעי ומבט פתוח לכיוון הכרמל.',facts:[['תפקיד החברה','יזמות למגורים'],['היקף הפרויקט','3 דירות'],['שלב לפי חומרי החברה','בבניית שלד']]},
 uziel10:{name:'עוזיאל 10',image:'assets/hero-58f819c1f7.webp',category:'מגורים ומשרדים · עסקת קומבינציה',description:'פרויקט המשלב דירות גן ופנטהאוזים עם שטחי משרדים. התכנון מציע שלושה כיווני אוויר לכל דירה, מרפסות ונוכחות אדריכלית המשלבת חיפוי אבן וחומרים חמים.',facts:[['תפקיד החברה','יזמות בעסקת קומבינציה'],['שימושים מתוכננים','מגורים ומשרדים'],['שלב לפי חומרי החברה','לקראת ועדה להיתר']]},
 rimonim8:{name:'רימונים 8',image:'assets/rimonim8-4140cde43b.webp',category:'רכישת זכויות ובנייה',description:'פרויקט של רכישת זכויות ובנייה הכולל שלוש יחידות דיור מסוג גן וגג, עם מחשבה על תכנון החללים ועל זכויות הבנייה.',facts:[['תפקיד החברה','רכישת זכויות ובנייה'],['היקף הפרויקט','3 יחידות דיור'],['שלב לפי חומרי החברה','באכלוס']]},
 oranim:{name:'אורנים 51',image:'assets/oranim-291d3bd635.webp',category:'השבחת מקרקעין · מגורים ומסחר',description:'מתחם עם תב״ע מאושרת לשש יחידות דיור. החברה מקדמת מהלך להגדלת הזכויות לשמונה יחידות ולשילוב שטחי מסחר. הגדלת הזכויות המתוארת היא יעד תכנוני, ולא אישור קיים.',facts:[['תפקיד החברה','שותפות והשבחה'],['המצב המאושר בחומרים','6 יחידות דיור'],['המהלך המקודם','הגדלת זכויות']]},
 commercial:{name:'אור חדש — מסחר ומשרדים',image:'assets/commercial-2db0a56204.webp',category:'ניהול וליווי פרויקט',description:'ניהול וליווי של מתחם מסחר ומשרדים, המשלב שטחי מסחר, משרדים, חניה ופיתוח סביבתי. פעילות החברה בפרויקט היא ניהול וליווי.',facts:[['תפקיד החברה','ניהול וליווי'],['שימושים','מסחר ומשרדים'],['שלב לפי חומרי החברה','בניהול וליווי']]}
};
const nav=document.querySelector('nav'),menu=document.querySelector('.menu-toggle');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','פתיחת תפריט')}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',expanded);menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'סגירת תפריט':'פתיחת תפריט')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
document.getElementById('more-projects').addEventListener('click',function(){const expanded=this.getAttribute('aria-expanded')!=='true';document.getElementById('extra-projects').hidden=!expanded;this.setAttribute('aria-expanded',String(expanded));this.textContent=expanded?'הצגת פחות פרויקטים −':'לפרויקטים נוספים ＋'});
const dialog=document.getElementById('project-dialog');let currentProject='';
function openDialog(d){d.showModal();document.body.classList.add('modal-open')}
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.modal-close').addEventListener('click',()=>d.close());d.addEventListener('close',()=>document.body.classList.remove('modal-open'));d.addEventListener('click',e=>{const r=d.getBoundingClientRect();if(e.target===d&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))d.close()})});
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];currentProject=p.name;document.getElementById('modal-title').textContent=p.name;document.getElementById('modal-eyebrow').textContent=p.category;document.getElementById('modal-description').textContent=p.description;const im=document.getElementById('modal-image');im.src=p.image;im.alt='הדמיית '+p.name;const facts=document.getElementById('modal-facts');facts.replaceChildren();p.facts.forEach(([key,value])=>{const group=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key;dd.textContent=value;group.append(dt,dd);facts.append(group)});openDialog(dialog);dialog.scrollTop=0}));
document.getElementById('modal-contact').addEventListener('click',()=>{dialog.close();document.getElementById('interest').value='דירה בפרויקטים שלנו';if(currentProject.startsWith('אור חדש'))document.getElementById('interest').value='היכרות ושיחה ראשונה';document.getElementById('message').value='אשמח לקבל פרטים על פרויקט '+currentProject+'.';setTimeout(()=>document.getElementById('full-name').focus({preventScroll:true}),100)});
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('interest').value=a.dataset.interest}));
document.getElementById('privacy-open').addEventListener('click',()=>openDialog(document.getElementById('privacy-dialog')));
const contactForm=document.getElementById('contact-form');
contactForm.addEventListener('invalid',e=>{
 const status=document.getElementById('form-status');
 status.dataset.state='error';
 status.textContent='הפנייה עדיין לא נשלחה. יש למלא שם וטלפון תקין, ולוודא שכתובת הדוא״ל תקינה אם הוזנה.';
},true);
let submitting=false;
contactForm.addEventListener('submit',async e=>{
 e.preventDefault();if(submitting)return;
 const name=document.getElementById('full-name'),status=document.getElementById('form-status'),button=contactForm.querySelector('[type="submit"]');
 name.setCustomValidity(name.value.trim()?'':'נא להזין שם מלא');
 if(!contactForm.reportValidity())return;
 const data=new FormData(contactForm);data.set('name',name.value.trim());
 if(!String(data.get('email')||'').trim())data.delete('email');
 const reference=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);
 data.set('reference',reference);
 data.set('subject','פנייה מאחוזת רכסים — '+name.value.trim().replace(/[\r\n]+/g,' ')+' — '+data.get('interest')+' ['+reference+']');
 submitting=true;button.disabled=true;contactForm.setAttribute('aria-busy','true');
 const original=button.innerHTML;button.textContent='שולחים…';status.textContent='שולחים את הפנייה, רגע בבקשה…';status.dataset.state='pending';
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);
 try{
  const response=await fetch(contactForm.action,{method:'POST',body:data,headers:{Accept:'application/json'},signal:controller.signal});
  const result=await response.json().catch(()=>null);
  if(!response.ok){
   status.dataset.state='error';
   status.textContent=response.status===429?'כרגע לא ניתן לשלוח את הפנייה. אפשר לפנות בטלפון 050-4166976 או בדוא״ל achuzatr@gmail.com. הפרטים שהקלדתם נשארו בטופס.':'הפנייה לא התקבלה. בדקו את הפרטים ונסו שוב, או התקשרו ל־050-4166976. הפרטים שהקלדתם נשארו בטופס.';
  }else if(result?.ok===true){contactForm.reset();status.dataset.state='success';status.textContent='תודה, הפנייה התקבלה בהצלחה. נחזור אליכם לפי הפרטים שמסרתם.';}
  else{throw new Error('Unconfirmed response');}
 }catch(error){status.dataset.state='error';status.textContent='לא התקבל אישור שליחה. ייתכן שיש בעיית חיבור. הפרטים נשארו בטופס; אפשר לנסות שוב או להתקשר ל־050-4166976.';}
 finally{clearTimeout(timer);submitting=false;button.disabled=false;button.innerHTML=original;contactForm.removeAttribute('aria-busy');status.focus({preventScroll:true});}
});
document.getElementById('form-privacy-link').addEventListener('click',e=>{e.preventDefault();openDialog(document.getElementById('privacy-dialog'))});
document.getElementById('full-name').addEventListener('input',e=>e.target.setCustomValidity(''));
document.getElementById('year').textContent=new Date().getFullYear();
// A single scroll-linked dissolve; normal scrolling and a static fallback stay intact.
const buildReveal=document.getElementById('build-reveal');
if(buildReveal){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const shortScreen=matchMedia('(max-height: 600px)');
 let frame=0,near=false,loaded=false;
 function paintReveal(){
  frame=0;
  if(!loaded||reduced.matches||shortScreen.matches)return;
  const rect=buildReveal.getBoundingClientRect();
  const stage=buildReveal.querySelector('.build-reveal-stage');
  const top=parseFloat(getComputedStyle(stage).top)||0;
  const travel=Math.max(1,rect.height-stage.offsetHeight);
  const progress=Math.max(0,Math.min(1,((top-rect.top)/travel-.12)/.70));
  buildReveal.style.setProperty('--reveal-progress',String(progress*progress*(3-2*progress)));
 }
 function requestReveal(){if(!frame&&near)frame=requestAnimationFrame(paintReveal)}
 function syncReveal(){
  buildReveal.classList.toggle('is-ready',loaded&&!reduced.matches&&!shortScreen.matches);
  paintReveal();
 }
 Promise.all([...buildReveal.querySelectorAll('img')].map(im=>im.decode())).then(()=>{loaded=true;syncReveal()}).catch(()=>{});
 new IntersectionObserver(entries=>{near=entries[0].isIntersecting;if(near)requestReveal()},{rootMargin:'200px'}).observe(buildReveal);
 addEventListener('scroll',requestReveal,{passive:true});
 addEventListener('resize',()=>{syncReveal();requestReveal()},{passive:true});
 reduced.addEventListener('change',syncReveal);
 shortScreen.addEventListener('change',syncReveal);
}
