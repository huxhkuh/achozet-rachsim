
'use strict';
const projects={
 rimonim:{name:'רימונים 2',image:'assets/rimonim-129c744098.webp',category:'רכסים · ליווי וניהול',description:'פרויקט אינטימי בן ארבע יחידות דיור, עם דירות גן ופנטהאוזים. התכנון משלב מרחבים למשפחה, שטחי חוץ והתאמה לאורח החיים הקהילתי ברכסים.',facts:[['תפקיד החברה','ליווי וניהול'],['היקף הפרויקט','4 יחידות דיור'],['שלב לפי חומרי החברה','מאוכלס']]},
 uziel17:{name:'עוזיאל 17',image:'assets/uziel17-31f90addc5.webp',category:'ליווי וניהול · מול נוף הכרמל',description:'שלוש דירות מרווחות בתכנון אדריכלי עכשווי, עם מרפסות רחבות, אור טבעי ומבט פתוח לכיוון הכרמל.',facts:[['תפקיד החברה','ליווי וניהול'],['היקף הפרויקט','3 דירות'],['שלב לפי חומרי החברה','בבניית שלד']]},
 uziel10:{name:'עוזיאל 10',image:'assets/hero-58f819c1f7.webp',category:'מגורים ומשרדים · עסקת קומבינציה',description:'פרויקט המשלב דירות גן ופנטהאוזים עם שטחי משרדים. התכנון מציע שלושה כיווני אוויר לכל דירה, מרפסות ונוכחות אדריכלית המשלבת חיפוי אבן וחומרים חמים.',facts:[['תפקיד החברה','יזמות בעסקת קומבינציה'],['שימושים מתוכננים','מגורים ומשרדים'],['שלב לפי חומרי החברה','לקראת ועדה להיתר']]},
 rimonim8:{name:'רימונים 8',image:'assets/rimonim8-4140cde43b.webp',category:'ליווי וניהול',description:'ליווי וניהול פרויקט הכולל שלוש יחידות דיור מסוג גן וגג, עם מחשבה על תכנון החללים ועל זכויות הבנייה.',facts:[['תפקיד החברה','ליווי וניהול'],['היקף הפרויקט','3 יחידות דיור'],['שלב לפי חומרי החברה','באכלוס']]},
 oranim:{name:'אורנים 51',image:'assets/oranim-291d3bd635.webp',category:'השבחת מקרקעין · מגורים ומסחר',description:'מתחם עם תב״ע מאושרת לשש יחידות דיור. החברה מקדמת מהלך להגדלת הזכויות לשמונה יחידות ולשילוב שטחי מסחר. הגדלת הזכויות המתוארת היא יעד תכנוני, ולא אישור קיים.',facts:[['תפקיד החברה','שותפות והשבחה'],['המצב המאושר בחומרים','6 יחידות דיור'],['המהלך המקודם','הגדלת זכויות']]},
 commercial:{name:'מסחר ברכסים',image:'assets/commercial-2db0a56204.webp',category:'ניהול וליווי פרויקט',description:'ניהול וליווי של מתחם מסחר ומשרדים, המשלב שטחי מסחר, משרדים, חניה ופיתוח סביבתי. פעילות החברה בפרויקט היא ניהול וליווי.',facts:[['תפקיד החברה','ניהול וליווי'],['שימושים','מסחר ומשרדים'],['שלב לפי חומרי החברה','בניהול וליווי']]}
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
document.getElementById('modal-contact').addEventListener('click',()=>{dialog.close();document.getElementById('interest').value='דירה בפרויקטים שלנו';if(currentProject.startsWith('מסחר ברכסים'))document.getElementById('interest').value='היכרות ושיחה ראשונה';document.getElementById('message').value='אשמח לקבל פרטים על פרויקט '+currentProject+'.';setTimeout(()=>document.getElementById('full-name').focus({preventScroll:true}),100)});
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('interest').value=a.dataset.interest}));
document.getElementById('privacy-open').addEventListener('click',()=>openDialog(document.getElementById('privacy-dialog')));
const contactForm=document.getElementById('contact-form');
const formStatus=document.getElementById('form-status');
const contactName=document.getElementById('full-name'),contactPhone=document.getElementById('phone'),contactEmail=document.getElementById('email');
// Native validation remains available for the Formspree no-JavaScript fallback.
contactForm.noValidate=true;
let submitting=false,pendingRequest=null;
function validateContact(){
 contactName.setCustomValidity(contactName.value.trim()?'':'נא להזין שם מלא');
 const phone=contactPhone.value.trim(),email=contactEmail.value.trim();
 contactPhone.setCustomValidity(!phone&&!email?'נא להזין מספר טלפון או כתובת מייל':phone&&(!/^\+?[0-9() .-]+$/.test(phone)||phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15)?'נא להזין מספר טלפון תקין':'');
 contactEmail.setCustomValidity(email&&!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/.test(email)?'נא להזין כתובת מייל תקינה':'');
 return contactForm.reportValidity();
}
[contactName,contactPhone,contactEmail].forEach(input=>input.addEventListener('input',()=>{contactName.setCustomValidity('');contactPhone.setCustomValidity('');contactEmail.setCustomValidity('');}));
contactForm.addEventListener('invalid',()=>{formStatus.dataset.state='error';formStatus.textContent='בדקו את השדות המסומנים. נדרשים שם מלא, טלפון או מייל ואישור מדיניות הפרטיות.';},true);
function contactError(message){
 formStatus.dataset.state='error';formStatus.replaceChildren(document.createTextNode(message+' הפרטים נשארו בטופס. אפשר לנסות שוב או להתקשר ל־'));
 const link=document.createElement('a');link.href='tel:0504166976';link.textContent='050-4166976';formStatus.append(link);
}
contactForm.addEventListener('submit',async e=>{
 e.preventDefault();if(submitting||!validateContact())return;
 const button=contactForm.querySelector('[type="submit"]'),original=button.innerHTML;
 const fields={name:contactName.value.trim(),phone:contactPhone.value.trim(),email:contactEmail.value.trim(),interest:document.getElementById('interest').value,message:document.getElementById('message').value.trim(),website_check:document.getElementById('website-check').value,privacy:document.getElementById('privacy-consent').checked};
 const fingerprint=JSON.stringify(fields);
 submitting=true;button.disabled=true;button.textContent='שולח...';contactForm.setAttribute('aria-busy','true');formStatus.dataset.state='pending';formStatus.textContent='הפנייה נשלחת, רגע בבקשה…';
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
  // Retry the same body/key after an uncertain response. No browser storage of PII.
  if(!pendingRequest||pendingRequest.fingerprint!==fingerprint||Date.now()-Date.parse(pendingRequest.body.submittedAt)>22*3600000){pendingRequest={fingerprint,body:{...fields,requestId:crypto.randomUUID(),submittedAt:new Date().toISOString()}};}
  const response=await fetch(contactForm.dataset.endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(pendingRequest.body),signal:controller.signal,credentials:'omit'});
  const result=await response.json().catch(()=>null);
  if(response.ok&&result?.ok===true&&result.code==='accepted'){
   contactForm.reset();pendingRequest=null;formStatus.dataset.state='success';formStatus.textContent='תודה, הפרטים נשלחו בהצלחה. נחזור אליכם בהקדם.';
  }else{contactError(response.status===429?'בוצעו מספר ניסיונות בזמן קצר. אנא המתינו דקה.':'לא התקבל אישור לשליחת הפנייה.');}
 }catch{contactError('לא התקבל אישור שליחה. ייתכן שיש תקלה זמנית בחיבור.');}
 finally{clearTimeout(timer);submitting=false;button.disabled=false;button.innerHTML=original;contactForm.removeAttribute('aria-busy');formStatus.focus({preventScroll:true});}
});
['form-privacy-link','consent-privacy-link'].forEach(id=>document.getElementById(id).addEventListener('click',e=>{e.preventDefault();openDialog(document.getElementById('privacy-dialog'));}));

document.getElementById('year').textContent=new Date().getFullYear();
// A single scroll-linked dissolve; normal scrolling and a static fallback stay intact.
const buildReveal=document.getElementById('build-reveal');
if(buildReveal){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let frame=0,near=false,loaded=false;
 function paintReveal(){
  frame=0;
  if(!loaded||reduced.matches)return;
  const rect=buildReveal.getBoundingClientRect();
  const stage=buildReveal.querySelector('.build-reveal-stage');
  const top=parseFloat(getComputedStyle(stage).top)||0;
  const travel=Math.max(1,rect.height-stage.offsetHeight);
  const progress=Math.max(0,Math.min(1,((top-rect.top)/travel-.12)/.70));
  buildReveal.style.setProperty('--reveal-progress',String(progress*progress*(3-2*progress)));
 }
 function requestReveal(){if(!frame&&near)frame=requestAnimationFrame(paintReveal)}
 function syncReveal(){
  buildReveal.classList.toggle('is-ready',loaded&&!reduced.matches);
  paintReveal();
 }
 // Responsive srcset changes can reject an in-flight decode. A subsequent
 // load event must still be able to enable the reveal after that race.
 const revealImages=[...buildReveal.querySelectorAll('img')];
 function checkRevealImages(){
  loaded=revealImages.every(im=>im.complete&&im.naturalWidth>0);
  syncReveal();
 }
 revealImages.forEach(im=>{
  im.addEventListener('load',checkRevealImages);
  im.addEventListener('error',checkRevealImages);
 });
 checkRevealImages();
 new IntersectionObserver(entries=>{near=entries[0].isIntersecting;if(near)requestReveal()},{rootMargin:'200px'}).observe(buildReveal);
 addEventListener('scroll',requestReveal,{passive:true});
 addEventListener('resize',()=>{syncReveal();requestReveal()},{passive:true});
 reduced.addEventListener('change',syncReveal);
}

