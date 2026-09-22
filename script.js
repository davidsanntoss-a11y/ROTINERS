/* ============================================================
   MEU PAINEL — app pessoal (localStorage), tema Violet Dusk
   ============================================================ */

/* ---------- ICONES (SVG inline, estilo linha minimalista) ---------- */
const ICONS = {
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle cx="16.5" cy="14" r="1.1" fill="currentColor" stroke="none"/>',
  briefcase:'<rect x="3" y="7.5" width="18" height="12" rx="2.3"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>',
  check:'<path d="M4 12.8 9 18 20 6"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="16" rx="2.3"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  target:'<circle cx="12" cy="12" r="8.3"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  chart:'<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2.5 20h19"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2.06 2.06 0 1 1-2.92 2.92l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2.06 2.06 0 1 1-4.12 0v-.09A1.7 1.7 0 0 0 8.8 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2.06 2.06 0 1 1-2.92-2.92l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H2.7a2.06 2.06 0 1 1 0-4.12h.09A1.7 1.7 0 0 0 4.4 8.8a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2.06 2.06 0 1 1 2.92-2.92l.06.06a1.7 1.7 0 0 0 1.87.34h.06A1.7 1.7 0 0 0 10 2.85V2.7a2.06 2.06 0 1 1 4.12 0v.09c.02.64.4 1.22 1 1.51h.06a1.7 1.7 0 0 0 1.87-.34l.06-.06a2.06 2.06 0 1 1 2.92 2.92l-.06.06a1.7 1.7 0 0 0-.34 1.87v.06c.29.6.87.98 1.51 1H21a2.06 2.06 0 1 1 0 4.12h-.09a1.7 1.7 0 0 0-1.51 1Z"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  bell:'<path d="M6 8a6 6 0 1 1 12 0c0 4.2 1.3 6 2 7H4c.7-1 2-2.8 2-7Z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
  sun:'<circle cx="12" cy="12" r="4.3"/><path d="M12 2.5v2.2M12 19.3v2.2M4.5 12H2.3M21.7 12h-2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/>',
  moon:'<path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a7 7 0 0 0 10.8 10.8Z"/>',
  edit:'<path d="M4 20.5 4.7 17l10.6-10.6a2 2 0 0 1 2.8 0l.9.9a2 2 0 0 1 0 2.8L8.4 20.7 4 21.5Z"/>',
  trash:'<path d="M4.5 7h15"/><path d="M9.5 7V4.8A1.3 1.3 0 0 1 10.8 3.5h2.4A1.3 1.3 0 0 1 14.5 4.8V7"/><path d="M6.5 7 7.2 19a2 2 0 0 0 2 1.9h5.6a2 2 0 0 0 2-1.9L17.5 7"/><path d="M10.3 11v6M13.7 11v6"/>',
  x:'<path d="M5 5l14 14M19 5 5 19"/>',
  chevron:'<path d="m9 6 6 6-6 6"/>',
  chevronDown:'<path d="m6 9 6 6 6-6"/>',
  arrowUp:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  arrowDown:'<path d="M12 5v14M18 13l-6 6-6-6"/>',
  dollar:'<path d="M12 2.5v19M16.5 6.7c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.7 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3"/>',
  cart:'<circle cx="9.5" cy="20" r="1.2" fill="currentColor" stroke="none"/><circle cx="17.5" cy="20" r="1.2" fill="currentColor" stroke="none"/><path d="M2.5 3h2.3l2.1 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20.5 7H6"/>',
  food:'<path d="M6 3v7a2.5 2.5 0 0 0 5 0V3M8.5 3v7M6 3v0M11 3v7m6-7v18m0-11c2 0 3-1.2 3-3.5S19 3 17 3v7Z"/>',
  car:'<path d="M4 16V11l2-5h12l2 5v5"/><circle cx="7.5" cy="16.5" r="1.6"/><circle cx="16.5" cy="16.5" r="1.6"/><path d="M4 16h2.4M17.6 16H20"/>',
  gamepad:'<rect x="2.5" y="7.5" width="19" height="9.5" rx="4.5"/><path d="M8 10v4M6 12h4M15.5 11.3h.01M18 13.3h.01"/>',
  school:'<path d="M12 3 2 8l10 5 10-5Z"/><path d="M6 10.5V16c0 1.5 2.8 3 6 3s6-1.5 6-3v-5.5"/>',
  work2:'<rect x="3" y="7.5" width="18" height="12" rx="2.3"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/>',
  more:'<circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
  logo:'<path d="M4 17V9.5L12 4l8 5.5V17l-8 4-8-4Z"/><path d="M4 9.5 12 14l8-4.5M12 14v7"/>',
  user:'<circle cx="12" cy="8.3" r="3.6"/><path d="M4.5 20.2a7.5 7.5 0 0 1 15 0"/>',
  download:'<path d="M12 3.5v12M7.5 11l4.5 4.5L16.5 11"/><path d="M4.5 19.5h15"/>',
  upload:'<path d="M12 16.5v-12M7.5 8.5 12 4l4.5 4.5"/><path d="M4.5 19.5h15"/>',
  flag:'<path d="M5 3v18"/><path d="M5 4h11l-2 4 2 4H5"/>',
  layers:'<path d="m12 3 8.5 4.5L12 12 3.5 7.5Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5"/>',
  filter:'<path d="M4 5h16M7 12h10M10.5 19h3"/>',
  pin:'<path d="M12 21s7-6.3 7-12A7 7 0 0 0 5 9c0 5.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
  repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  bank:'<path d="M3 21h18"/><path d="M4 21V10M8 21V10M12.5 21V10M17 21V10M21 21V10"/><path d="m3 10 9-6.5L21 10Z"/>'
};
function icon(name, cls){
  return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;
}
document.querySelector('.brand .mark').innerHTML = icon('logo');

/* ---------- DATA LAYER ---------- */
const DB_KEY = 'meuPainel_v1';
const uid = ()=> Date.now().toString(36)+Math.random().toString(36).slice(2,7);

function defaultData(){
  return {
    settings:{ name:'Usuário', photo:'', theme:'dark', currency:'BRL', notifDays:3 },
    transactions:[], // {id,type:'entrada'|'saida', desc, value, category, date, method, paid}
    fixedExpenses:[], // {id, desc, value, dueDay, paid, category}
    jobs:[], // {id, name, client, value, received, date, deadline, status, notes}
    subjects:[], // {id, name, grades:[{label,value}], activities:[{id,title,type,due,done}], absences}
    tasks:[], // {id,title,desc,category,priority,date,time,deadline,status,done}
    routine:[], // {id,time,activity,category,duration,days:[0..6]}
    goals:[], // {id,name,desc,category,target,current,unit,deadline}
    events:[] // manual calendar events {id,title,date,time,type}
  };
}
let DATA = loadData();
function loadData(){
  try{
    const raw = localStorage.getItem(DB_KEY);
    if(!raw) return defaultData();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultData(), parsed);
  }catch(e){ return defaultData(); }
}
function saveData(){
  try{ localStorage.setItem(DB_KEY, JSON.stringify(DATA)); }
  catch(e){ toast('Não foi possível salvar os dados','err'); }
}

/* ---------- HELPERS ---------- */
const CATS = [
  {id:'alimentacao', label:'Alimentação', icon:'food'},
  {id:'transporte', label:'Transporte', icon:'car'},
  {id:'lazer', label:'Lazer', icon:'gamepad'},
  {id:'escola', label:'Escola', icon:'school'},
  {id:'trabalho', label:'Trabalho', icon:'work2'},
  {id:'compras', label:'Compras', icon:'cart'},
  {id:'outros', label:'Outros', icon:'more'},
];
const CAT_COLORS = ['#935073','#e3b567','#7fbf9e','#e07a6b','#c48bd9','#6fa8dc','#F6DBC0'];
function catInfo(id){ return CATS.find(c=>c.id===id) || CATS[CATS.length-1]; }
function catColor(id){ const i = CATS.findIndex(c=>c.id===id); return CAT_COLORS[i<0?6:i]; }

function fmtMoney(v){
  const n = Number(v)||0;
  return n.toLocaleString('pt-BR',{style:'currency',currency: DATA.settings.currency||'BRL'});
}
function fmtDate(d){
  if(!d) return '';
  const dt = new Date(d+'T00:00:00');
  if(isNaN(dt)) return d;
  return dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
}
function fmtDateFull(d){
  const dt = new Date(d+'T00:00:00');
  if(isNaN(dt)) return d;
  return dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
}
function todayISO(){ return new Date().toISOString().slice(0,10); }
function daysUntil(d){
  const dt = new Date(d+'T00:00:00'); const now = new Date(); now.setHours(0,0,0,0);
  return Math.round((dt-now)/86400000);
}
function monthKey(d){ return (d||'').slice(0,7); }
function currentMonthKey(){ return todayISO().slice(0,7); }

function toast(msg, type){
  const el = document.createElement('div');
  el.className = 'toast '+(type||'');
  el.innerHTML = icon(type==='err'?'x':'check') + '<span>'+msg+'</span>';
  document.getElementById('toastwrap').appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .25s'; el.style.opacity='0'; setTimeout(()=>el.remove(),250); }, 2600);
}

/* ---------- CONFIRM DIALOG ---------- */
function confirmDialog(msg, onYes){
  openModal(`
    <div class="modal-head"><h3>Confirmar</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="confirm-box"><p>${msg}</p></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-danger" id="confirmYesBtn">Excluir</button>
    </div>
  `);
  document.getElementById('confirmYesBtn').onclick = ()=>{ onYes(); closeModal(); };
}

/* ---------- MODAL ---------- */
function openModal(html){
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('overlay').classList.add('open');
}
function closeModal(){ document.getElementById('overlay').classList.remove('open'); }
document.getElementById('overlay').addEventListener('click', e=>{ if(e.target.id==='overlay') closeModal(); });

/* ---------- NAV / ROUTER ---------- */
const SECTIONS = [
  {id:'inicio', label:'Início', icon:'home'},
  {id:'dinheiro', label:'Dinheiro', icon:'wallet'},
  {id:'trabalho', label:'Trabalho', icon:'briefcase'},
  {id:'escola', label:'Escola', icon:'book'},
  {id:'tarefas', label:'Tarefas', icon:'check'},
  {id:'rotina', label:'Rotina', icon:'clock'},
  {id:'calendario', label:'Calendário', icon:'calendar'},
  {id:'metas', label:'Metas', icon:'target'},
  {id:'estatisticas', label:'Estatísticas', icon:'chart'},
  {id:'config', label:'Configurações', icon:'settings'},
];
const BOTTOM_MAIN = ['inicio','tarefas','dinheiro','calendario','config'];

function buildNav(){
  const navList = document.getElementById('navList');
  navList.innerHTML = SECTIONS.map(s=>`
    <div class="nav-item" data-sec="${s.id}" onclick="go('${s.id}')">
      ${icon(s.icon)}<span>${s.label}</span><span class="dot"></span>
    </div>`).join('');

  const bn = document.getElementById('bottomNavRow');
  bn.innerHTML = BOTTOM_MAIN.map(id=>{
    const s = SECTIONS.find(x=>x.id===id);
    return `<div class="bn-item" data-sec="${id}" onclick="go('${id}')">${icon(s.icon)}<span>${s.label}</span></div>`;
  }).join('');
}

let currentView = 'inicio';
function go(id){
  currentView = id;
  document.querySelectorAll('.nav-item').forEach(el=> el.classList.toggle('active', el.dataset.sec===id));
  document.querySelectorAll('.bn-item').forEach(el=> el.classList.toggle('active', el.dataset.sec===id));
  document.querySelectorAll('.view').forEach(el=> el.classList.toggle('active', el.id==='view-'+id));
  const s = SECTIONS.find(x=>x.id===id);
  document.getElementById('pageTitle').textContent = s.label;
  document.getElementById('pageSub').textContent = subtitleFor(id);
  renderView(id);
  closeNotif();
  window.scrollTo(0,0);
  updateFab(id);
}
function subtitleFor(id){
  const d = new Date();
  const dateStr = d.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
  const map = {
    inicio: dateStr,
    dinheiro:'Controle financeiro pessoal',
    trabalho:'Serviços e clientes',
    escola:'Matérias e desempenho',
    tarefas:'O que precisa ser feito',
    rotina:'Sua linha do tempo diária',
    calendario:'Tudo em um só lugar',
    metas:'Objetivos em progresso',
    estatisticas:'Seu progresso em números',
    config:'Preferências do aplicativo',
  };
  return map[id]||'';
}

/* FAB per view */
const FAB_ACTIONS = {
  tarefas: ()=>openTaskForm(),
  dinheiro: ()=>openTxForm(),
  trabalho: ()=>openJobForm(),
  escola: ()=>openSubjectForm(),
  metas: ()=>openGoalForm(),
  rotina: ()=>openRoutineForm(),
  calendario: ()=>openEventForm(),
};
function updateFab(id){
  const fab = document.getElementById('fabBtn');
  if(FAB_ACTIONS[id]){ fab.style.display='flex'; fab.onclick = FAB_ACTIONS[id]; fab.innerHTML = icon('plus'); }
  else fab.style.display='none';
}

/* ---------- VIEW SCAFFOLD ---------- */
function buildViews(){
  const wrap = document.getElementById('views');
  wrap.innerHTML = SECTIONS.map(s=>`<div class="view" id="view-${s.id}"></div>`).join('');
}
function renderView(id){
  const fns = {
    inicio: renderInicio, dinheiro: renderDinheiro, trabalho: renderTrabalho,
    escola: renderEscola, tarefas: renderTarefas, rotina: renderRotina,
    calendario: renderCalendario, metas: renderMetas, estatisticas: renderEstatisticas, config: renderConfig
  };
  fns[id] && fns[id]();
}

/* ================= INÍCIO ================= */
function renderInicio(){
  const el = document.getElementById('view-inicio');
  const bal = balance();
  const {entradas, saidas} = monthFlow(currentMonthKey());
  const pendTasks = DATA.tasks.filter(t=>!t.done);
  const nextThing = nextUpcoming();

  el.innerHTML = `
    <div class="hero">
      <div class="greet">
        <h2>Olá, ${escapeHtml(DATA.settings.name||'Usuário')} 👋</h2>
        <p>Aqui está o resumo da sua vida hoje.</p>
      </div>
      <div class="clock">
        <div class="time" id="liveClock">--:--</div>
        <div class="date">${new Date().toLocaleDateString('pt-BR',{weekday:'long', day:'2-digit', month:'long'})}</div>
      </div>
    </div>

    ${nextThing ? `
    <div class="next-up">
      <div class="ic">${icon(nextThing.icon)}</div>
      <div class="tx"><b>${nextThing.title}</b><span>${nextThing.when}</span></div>
    </div>` : ''}

    <div class="grid grid-4">
      ${statCard('wallet','Saldo disponível', fmtMoney(bal), null)}
      ${statCard('arrowUp','Entradas do mês', fmtMoney(entradas), null)}
      ${statCard('arrowDown','Gastos do mês', fmtMoney(saidas), null)}
      ${statCard('check','Tarefas pendentes', pendTasks.length, null)}
    </div>

    <div class="section-title">Panorama</div>
    <div class="grid grid-2">
      <div class="card">
        <div class="card-head"><h3>Próximos compromissos</h3><span class="link" onclick="go('calendario')">Ver tudo ${icon('chevron')}</span></div>
        ${listOrEmpty(upcomingEvents(4), ev=>rowGeneric(ev.icon, ev.title, ev.when, null), 'calendar','Nenhum compromisso agendado')}
      </div>
      <div class="card">
        <div class="card-head"><h3>Atividades da escola</h3><span class="link" onclick="go('escola')">Ver tudo ${icon('chevron')}</span></div>
        ${listOrEmpty(upcomingSchool(4), a=>rowGeneric('school', a.title, fmtDate(a.due), null), 'book','Nenhuma atividade próxima')}
      </div>
      <div class="card">
        <div class="card-head"><h3>Trabalhos pendentes</h3><span class="link" onclick="go('trabalho')">Ver tudo ${icon('chevron')}</span></div>
        ${listOrEmpty(DATA.jobs.filter(j=>j.status!=='Concluído'&&j.status!=='Cancelado').slice(0,4), j=>rowGeneric('briefcase', j.name, j.client, fmtMoney(j.value-(+j.received||0))+' a receber'), 'briefcase','Nenhum trabalho pendente')}
      </div>
      <div class="card">
        <div class="card-head"><h3>Rotina de hoje</h3><span class="link" onclick="go('rotina')">Ver tudo ${icon('chevron')}</span></div>
        ${renderTodayTimeline(true)}
      </div>
    </div>

    <div class="section-title">Metas em andamento</div>
    <div class="grid grid-3">
      ${DATA.goals.length ? DATA.goals.slice(0,3).map(goalCardHtml).join('') : emptyState('target','Nenhuma meta criada ainda', "go('metas')",'Criar meta')}
    </div>
  `;
  startClock();
}
function statCard(ic,label,value,delta){
  return `<div class="card stat">
    <div class="top"><div class="ic">${icon(ic)}</div></div>
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  </div>`;
}
function rowGeneric(ic,title,sub,end){
  return `<div class="list-row">
    <div class="lead-ic">${icon(ic)}</div>
    <div class="body"><div class="t1">${escapeHtml(title)}</div><div class="t2">${escapeHtml(sub||'')}</div></div>
    ${end?`<div class="end"><div class="amt">${end}</div></div>`:''}
  </div>`;
}
function listOrEmpty(arr, mapFn, ic, msg){
  if(!arr || !arr.length) return `<div class="empty">${icon(ic)}<p>${msg}</p></div>`;
  return arr.map(mapFn).join('');
}
function emptyState(ic,msg,onclick,btnLabel){
  return `<div class="card empty" style="grid-column:1/-1">${icon(ic)}<p>${msg}</p>${btnLabel?`<button class="btn btn-primary btn-sm" onclick="${onclick}">${btnLabel}</button>`:''}</div>`;
}
function startClock(){
  const upd = ()=>{ const c=document.getElementById('liveClock'); if(c) c.textContent = new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}); };
  upd(); clearInterval(window._clockTimer); window._clockTimer = setInterval(upd, 15000);
}
function nextUpcoming(){
  const items = [];
  DATA.tasks.filter(t=>!t.done && t.date).forEach(t=> items.push({sortKey:t.date+(t.time||'23:59'), title:t.title, when:'Tarefa · '+fmtDate(t.date)+(t.time?' às '+t.time:''), icon:'check'}));
  upcomingEvents(50).forEach(ev=> items.push({sortKey: ev.sortKey, title: ev.title, when: ev.when, icon: ev.icon}));
  items.sort((a,b)=> a.sortKey.localeCompare(b.sortKey));
  const now = todayISO();
  const future = items.filter(i=> i.sortKey.slice(0,10) >= now);
  return future[0] || null;
}
function upcomingEvents(limit){
  const list = [];
  DATA.events.forEach(e=> list.push({sortKey:e.date+(e.time||'12:00'), title:e.title, when:fmtDate(e.date)+(e.time?' · '+e.time:''), icon:'pin'}));
  DATA.jobs.forEach(j=>{ if(j.deadline) list.push({sortKey:j.deadline+'12:00', title:'Prazo: '+j.name, when:fmtDate(j.deadline), icon:'briefcase'}); });
  DATA.subjects.forEach(s=> (s.activities||[]).forEach(a=>{ if(!a.done && a.due) list.push({sortKey:a.due+'12:00', title:a.title+' · '+s.name, when:fmtDate(a.due), icon:'school'}); }));
  DATA.fixedExpenses.forEach(f=>{ if(!f.paid) list.push({sortKey: currentMonthKey()+'-'+String(f.dueDay).padStart(2,'0')+'12:00', title:'Conta: '+f.desc, when:'Dia '+f.dueDay, icon:'wallet'}); });
  const now = todayISO();
  return list.filter(x=>x.sortKey.slice(0,10)>=now).sort((a,b)=>a.sortKey.localeCompare(b.sortKey)).slice(0,limit||10);
}
function upcomingSchool(limit){
  const list = [];
  DATA.subjects.forEach(s=> (s.activities||[]).forEach(a=>{ if(!a.done) list.push({title:a.title+' · '+s.name, due:a.due||''}); }));
  return list.filter(a=>a.due).sort((a,b)=>a.due.localeCompare(b.due)).slice(0,limit||10);
}

/* ================= DINHEIRO ================= */
let dinheiroFilterCat = 'todas';
function balance(){
  return DATA.transactions.reduce((s,t)=> s + (t.type==='entrada'? +t.value : -t.value), 0);
}
function monthFlow(mk){
  let entradas=0, saidas=0;
  DATA.transactions.filter(t=> monthKey(t.date)===mk).forEach(t=>{ if(t.type==='entrada') entradas+=+t.value; else saidas+=+t.value; });
  return {entradas, saidas};
}
function renderDinheiro(){
  const el = document.getElementById('view-dinheiro');
  const mk = currentMonthKey();
  const {entradas, saidas} = monthFlow(mk);
  const bal = balance();
  const unpaid = DATA.fixedExpenses.filter(f=>!f.paid);
  const paid = DATA.fixedExpenses.filter(f=>f.paid);

  const catTotals = {};
  DATA.transactions.filter(t=>t.type==='saida' && monthKey(t.date)===mk).forEach(t=> catTotals[t.category]=(catTotals[t.category]||0)+ (+t.value));

  let txList = DATA.transactions.slice().sort((a,b)=> b.date.localeCompare(a.date));
  if(dinheiroFilterCat!=='todas') txList = txList.filter(t=>t.category===dinheiroFilterCat);

  el.innerHTML = `
    <div class="grid grid-4">
      ${statCard('wallet','Saldo atual', fmtMoney(bal))}
      ${statCard('arrowUp','Entradas do mês', fmtMoney(entradas))}
      ${statCard('arrowDown','Saídas do mês', fmtMoney(saidas))}
      ${statCard('bank','Contas a pagar', unpaid.length)}
    </div>

    <div class="section-title">Visão geral</div>
    <div class="grid grid-2">
      <div class="card">
        <h3>Gastos por categoria</h3>
        ${donutChart(catTotals)}
      </div>
      <div class="card">
        <h3>Entradas x saídas (mês)</h3>
        ${barsSimple([{label:'Entradas',value:entradas,color:'#7fbf9e'},{label:'Saídas',value:saidas,color:'#e07a6b'}])}
      </div>
    </div>

    <div class="section-title">Contas fixas</div>
    <div class="card">
      <div class="card-head"><h3>Contas a pagar e pagas</h3><button class="btn btn-sm btn-ghost" onclick="openFixedForm()">${icon('plus')}Nova conta</button></div>
      ${listOrEmpty([...unpaid,...paid], f=>`
        <div class="list-row">
          <div class="lead-ic">${icon(catInfo(f.category).icon)}</div>
          <div class="body"><div class="t1">${escapeHtml(f.desc)}</div><div class="t2">Todo dia ${f.dueDay} · ${catInfo(f.category).label}</div></div>
          <div class="end">
            <span class="badge-pill ${f.paid?'pill-concluido':'pill-pendente'}">${f.paid?'Paga':'Pendente'}</span>
          </div>
          <div class="actions">
            <button class="icon-btn btn-sm" onclick="toggleFixedPaid('${f.id}')" title="Marcar">${icon('check')}</button>
            <button class="icon-btn btn-sm" onclick="deleteFixed('${f.id}')" title="Excluir">${icon('trash')}</button>
          </div>
        </div>`, 'wallet', 'Nenhuma conta fixa cadastrada')}
    </div>

    <div class="section-title">Histórico financeiro</div>
    <div class="section-toolbar">
      <div class="chip-row" id="dinCatChips">
        <div class="chip ${dinheiroFilterCat==='todas'?'active':''}" onclick="setDinFilter('todas')">Todas</div>
        ${CATS.map(c=>`<div class="chip ${dinheiroFilterCat===c.id?'active':''}" onclick="setDinFilter('${c.id}')">${c.label}</div>`).join('')}
      </div>
    </div>
    <div class="card">
      ${listOrEmpty(txList, t=>`
        <div class="list-row">
          <div class="lead-ic">${icon(catInfo(t.category).icon)}</div>
          <div class="body"><div class="t1">${escapeHtml(t.desc)}</div><div class="t2">${fmtDate(t.date)} · ${catInfo(t.category).label} · ${escapeHtml(t.method||'')}</div></div>
          <div class="end"><div class="amt" style="color:${t.type==='entrada'?'var(--success)':'var(--danger)'}">${t.type==='entrada'?'+':'-'} ${fmtMoney(t.value)}</div></div>
          <div class="actions"><button class="icon-btn btn-sm" onclick="deleteTx('${t.id}')">${icon('trash')}</button></div>
        </div>`, 'wallet', 'Nenhuma movimentação registrada')}
    </div>
  `;
}
function setDinFilter(c){ dinheiroFilterCat=c; renderDinheiro(); }
function deleteTx(id){ confirmDialog('Excluir esta movimentação?', ()=>{ DATA.transactions = DATA.transactions.filter(t=>t.id!==id); saveData(); renderDinheiro(); renderInicio(); toast('Movimentação excluída'); }); }
function toggleFixedPaid(id){ const f = DATA.fixedExpenses.find(x=>x.id===id); f.paid=!f.paid; saveData(); renderDinheiro(); }
function deleteFixed(id){ confirmDialog('Excluir esta conta fixa?', ()=>{ DATA.fixedExpenses = DATA.fixedExpenses.filter(x=>x.id!==id); saveData(); renderDinheiro(); }); }

function openTxForm(){
  openModal(`
    <div class="modal-head"><h3>Nova movimentação</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field-row" style="margin-bottom:12px;">
      <div class="chip" id="typeEntrada" onclick="pickTxType('entrada')" style="text-align:center;">Entrada</div>
      <div class="chip" id="typeSaida" onclick="pickTxType('saida')" style="text-align:center;">Saída</div>
    </div>
    <div class="field"><label>Descrição</label><input class="input" id="txDesc" placeholder="Ex: Freelance, mercado..."></div>
    <div class="field-row">
      <div class="field"><label>Valor</label><input class="input" id="txValue" type="number" step="0.01" placeholder="0,00"></div>
      <div class="field"><label>Data</label><input class="input" id="txDate" type="date" value="${todayISO()}"></div>
    </div>
    <div class="field"><label>Categoria</label>
      <select class="select" id="txCat">${CATS.map(c=>`<option value="${c.id}">${c.label}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Forma de pagamento</label>
      <select class="select" id="txMethod"><option>Pix</option><option>Dinheiro</option><option>Cartão de crédito</option><option>Cartão de débito</option><option>Transferência</option></select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveTx()">Salvar</button>
    </div>
  `);
  pickTxType('entrada');
}
let _txType='entrada';
function pickTxType(t){ _txType=t; document.getElementById('typeEntrada').classList.toggle('active', t==='entrada'); document.getElementById('typeSaida').classList.toggle('active', t==='saida'); }
function saveTx(){
  const desc = document.getElementById('txDesc').value.trim();
  const value = parseFloat(document.getElementById('txValue').value);
  const date = document.getElementById('txDate').value || todayISO();
  if(!desc || !value){ toast('Preencha descrição e valor','err'); return; }
  DATA.transactions.push({id:uid(), type:_txType, desc, value, date, category:document.getElementById('txCat').value, method:document.getElementById('txMethod').value});
  saveData(); closeModal(); toast('Movimentação adicionada'); renderDinheiro(); renderInicio();
}
function openFixedForm(){
  openModal(`
    <div class="modal-head"><h3>Nova conta fixa</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Descrição</label><input class="input" id="fxDesc" placeholder="Ex: Internet, aluguel..."></div>
    <div class="field-row">
      <div class="field"><label>Valor</label><input class="input" id="fxValue" type="number" step="0.01"></div>
      <div class="field"><label>Dia do vencimento</label><input class="input" id="fxDay" type="number" min="1" max="31" value="5"></div>
    </div>
    <div class="field"><label>Categoria</label><select class="select" id="fxCat">${CATS.map(c=>`<option value="${c.id}">${c.label}</option>`).join('')}</select></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveFixed()">Salvar</button>
    </div>`);
}
function saveFixed(){
  const desc = document.getElementById('fxDesc').value.trim();
  const value = parseFloat(document.getElementById('fxValue').value)||0;
  if(!desc){ toast('Informe a descrição','err'); return; }
  DATA.fixedExpenses.push({id:uid(), desc, value, dueDay:+document.getElementById('fxDay').value||1, category:document.getElementById('fxCat').value, paid:false});
  saveData(); closeModal(); toast('Conta adicionada'); renderDinheiro();
}

/* ---- mini charts (SVG puro) ---- */
function donutChart(totalsObj){
  const entries = Object.entries(totalsObj).filter(([,v])=>v>0);
  const total = entries.reduce((s,[,v])=>s+v,0);
  if(!total) return `<div class="empty">${icon('chart')}<p>Sem gastos registrados este mês</p></div>`;
  let acc = 0; const r=15.9155, cx=21,cy=21;
  const segs = entries.map(([cat,v])=>{
    const pct = v/total*100;
    const dash = `${pct} ${100-pct}`;
    const offset = 25 - acc;
    acc += pct;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="transparent" stroke="${catColor(cat)}" stroke-width="6" stroke-dasharray="${dash}" stroke-dashoffset="${offset}"></circle>`;
  }).join('');
  const legend = entries.sort((a,b)=>b[1]-a[1]).map(([cat,v])=>`<div class="li"><span class="sw" style="background:${catColor(cat)}"></span>${catInfo(cat).label} · ${fmtMoney(v)}</div>`).join('');
  return `<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
    <svg viewBox="0 0 42 42" style="width:130px;height:130px;flex:none;transform:rotate(-90deg)">${segs}</svg>
    <div class="legend" style="margin-top:0;flex:1;min-width:140px;">${legend}</div>
  </div>`;
}
function barsSimple(items){
  const max = Math.max(...items.map(i=>i.value), 1);
  return `<div style="display:flex;align-items:end;gap:20px;height:150px;padding-top:10px;">
    ${items.map(i=>`
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%;justify-content:flex-end;">
        <div class="tiny" style="font-weight:700;color:var(--text-1)">${fmtMoney(i.value)}</div>
        <div style="width:100%;max-width:64px;height:${Math.max(6,(i.value/max*100))}%;background:${i.color};border-radius:10px 10px 4px 4px;"></div>
        <div class="tiny">${i.label}</div>
      </div>`).join('')}
  </div>`;
}
function lineChartSVG(points, color){
  if(!points.length) return `<div class="empty">${icon('chart')}<p>Sem dados suficientes</p></div>`;
  const w=560,h=170,pad=20;
  const max = Math.max(...points.map(p=>p.v),1), min=Math.min(...points.map(p=>p.v),0);
  const range = (max-min)||1;
  const stepX = (w-pad*2)/Math.max(points.length-1,1);
  const coords = points.map((p,i)=>{
    const x = pad + i*stepX;
    const y = h-pad - ((p.v-min)/range)*(h-pad*2);
    return [x,y];
  });
  const path = coords.map((c,i)=> (i===0?'M':'L')+c[0].toFixed(1)+' '+c[1].toFixed(1)).join(' ');
  const area = path + ` L ${coords[coords.length-1][0]} ${h-pad} L ${coords[0][0]} ${h-pad} Z`;
  const dots = coords.map((c,i)=>`<circle cx="${c[0]}" cy="${c[1]}" r="3" fill="${color}"></circle>`).join('');
  const labels = points.map((p,i)=>`<text x="${coords[i][0]}" y="${h-2}" font-size="9" fill="var(--text-3)" text-anchor="middle">${p.label}</text>`).join('');
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;">
    <defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity=".35"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
    <path d="${area}" fill="url(#lg1)"></path>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
    ${dots}${labels}
  </svg>`;
}

/* ================= TRABALHO ================= */
let jobFilter = 'todos';
function renderTrabalho(){
  const el = document.getElementById('view-trabalho');
  const totalRecebido = DATA.jobs.reduce((s,j)=>s+(+j.received||0),0);
  const totalPendente = DATA.jobs.reduce((s,j)=> s+ Math.max((+j.value||0)-(+j.received||0),0) ,0);
  const concluidos = DATA.jobs.filter(j=>j.status==='Concluído').length;
  const andamento = DATA.jobs.filter(j=>j.status==='Em andamento').length;

  let list = DATA.jobs.slice().sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  if(jobFilter!=='todos') list = list.filter(j=>j.status===jobFilter);

  el.innerHTML = `
    <div class="grid grid-4">
      ${statCard('dollar','Total recebido', fmtMoney(totalRecebido))}
      ${statCard('wallet','Total pendente', fmtMoney(totalPendente))}
      ${statCard('check','Concluídos', concluidos)}
      ${statCard('clock','Em andamento', andamento)}
    </div>
    <div class="section-toolbar">
      <div class="chip-row">
        ${['todos','Pendente','Em andamento','Concluído','Cancelado'].map(s=>`<div class="chip ${jobFilter===s?'active':''}" onclick="setJobFilter('${s}')">${s==='todos'?'Todos':s}</div>`).join('')}
      </div>
    </div>
    <div class="grid grid-2">
      ${list.length? list.map(jobCardHtml).join('') : emptyState('briefcase','Nenhum trabalho cadastrado ainda',"openJobForm()",'Adicionar trabalho')}
    </div>
  `;
}
function setJobFilter(s){ jobFilter=s; renderTrabalho(); }
function jobCardHtml(j){
  const pend = Math.max((+j.value||0)-(+j.received||0),0);
  const pillClass = {Pendente:'pill-pendente','Em andamento':'pill-andamento',Concluído:'pill-concluido',Cancelado:'pill-cancelado'}[j.status]||'pill-pendente';
  return `<div class="card">
    <div class="card-head">
      <h3>${escapeHtml(j.name)}</h3>
      <span class="badge-pill ${pillClass}">${j.status}</span>
    </div>
    <div class="tiny" style="margin-bottom:10px;">Cliente: ${escapeHtml(j.client||'—')}</div>
    <div class="grid grid-2" style="margin-bottom:10px;">
      <div><div class="tiny">Valor total</div><div style="font-weight:700;font-family:'Sora'">${fmtMoney(j.value)}</div></div>
      <div><div class="tiny">A receber</div><div style="font-weight:700;font-family:'Sora';color:${pend>0?'var(--warn)':'var(--success)'}">${fmtMoney(pend)}</div></div>
    </div>
    <div class="tiny" style="margin-bottom:12px;">Prazo: ${j.deadline?fmtDate(j.deadline):'—'} ${j.notes?' · '+escapeHtml(j.notes):''}</div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-sm btn-ghost" onclick="openJobForm('${j.id}')">${icon('edit')}Editar</button>
      <button class="btn btn-sm btn-danger" onclick="deleteJob('${j.id}')">${icon('trash')}</button>
    </div>
  </div>`;
}
function deleteJob(id){ confirmDialog('Excluir este trabalho?', ()=>{ DATA.jobs = DATA.jobs.filter(j=>j.id!==id); saveData(); renderTrabalho(); renderInicio(); toast('Trabalho excluído'); }); }
function openJobForm(id){
  const j = id ? DATA.jobs.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h3>${j?'Editar':'Novo'} trabalho</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Nome do serviço</label><input class="input" id="jbName" value="${j?escapeHtml(j.name):''}"></div>
    <div class="field"><label>Cliente</label><input class="input" id="jbClient" value="${j?escapeHtml(j.client||''):''}"></div>
    <div class="field-row">
      <div class="field"><label>Valor total</label><input class="input" id="jbValue" type="number" step="0.01" value="${j?j.value:''}"></div>
      <div class="field"><label>Valor recebido</label><input class="input" id="jbReceived" type="number" step="0.01" value="${j?j.received||0:0}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Data</label><input class="input" id="jbDate" type="date" value="${j?j.date||'':todayISO()}"></div>
      <div class="field"><label>Prazo</label><input class="input" id="jbDeadline" type="date" value="${j?j.deadline||'':''}"></div>
    </div>
    <div class="field"><label>Status</label>
      <select class="select" id="jbStatus">
        ${['Pendente','Em andamento','Concluído','Cancelado'].map(s=>`<option ${j&&j.status===s?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Observações</label><textarea class="input" id="jbNotes" rows="2">${j?escapeHtml(j.notes||''):''}</textarea></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveJob(${j?`'${j.id}'`:'null'})">Salvar</button>
    </div>
  `);
}
function saveJob(id){
  const name = document.getElementById('jbName').value.trim();
  if(!name){ toast('Informe o nome do serviço','err'); return; }
  const obj = {
    name, client: document.getElementById('jbClient').value.trim(),
    value: parseFloat(document.getElementById('jbValue').value)||0,
    received: parseFloat(document.getElementById('jbReceived').value)||0,
    date: document.getElementById('jbDate').value,
    deadline: document.getElementById('jbDeadline').value,
    status: document.getElementById('jbStatus').value,
    notes: document.getElementById('jbNotes').value.trim(),
  };
  if(id){ Object.assign(DATA.jobs.find(j=>j.id===id), obj); }
  else DATA.jobs.push({id:uid(), ...obj});
  saveData(); closeModal(); toast('Trabalho salvo'); renderTrabalho(); renderInicio();
}

/* ================= ESCOLA ================= */
function subjAvg(s){
  if(!s.grades || !s.grades.length) return null;
  const sum = s.grades.reduce((a,g)=>a+(+g.value||0),0);
  return sum/s.grades.length;
}
function renderEscola(){
  const el = document.getElementById('view-escola');
  el.innerHTML = `
    <div class="section-toolbar"><div class="spacer"></div></div>
    <div class="grid grid-3">
      ${DATA.subjects.length? DATA.subjects.map(subjectCardHtml).join('') : emptyState('book','Nenhuma matéria cadastrada ainda',"openSubjectForm()",'Adicionar matéria')}
    </div>
    <div class="section-title">Atividades próximas do prazo</div>
    <div class="card">
      ${listOrEmpty(upcomingSchool(8), a=>rowGeneric('school', a.title, fmtDate(a.due), null),'school','Nenhuma atividade próxima')}
    </div>
  `;
}
function subjectCardHtml(s){
  const avg = subjAvg(s);
  const cls = avg==null?'':(avg<6?'low':avg<8?'mid':'high');
  const pendActs = (s.activities||[]).filter(a=>!a.done).length;
  return `<div class="card subject-card" onclick="openSubjectDetail('${s.id}')">
    <div class="card-head">
      <h3>${escapeHtml(s.name)}</h3>
      <button class="icon-btn btn-sm" onclick="event.stopPropagation();deleteSubject('${s.id}')">${icon('trash')}</button>
    </div>
    <div style="display:flex;align-items:end;justify-content:space-between;">
      <div><div class="tiny">Média</div><div class="subject-avg ${cls}">${avg==null?'—':avg.toFixed(1)}</div></div>
      <div style="text-align:right"><div class="tiny">Faltas</div><div style="font-weight:700">${s.absences||0}</div></div>
    </div>
    <div class="tiny" style="margin-top:10px;">${pendActs} atividade(s) pendente(s)</div>
  </div>`;
}
function deleteSubject(id){ confirmDialog('Excluir esta matéria e todos os dados dela?', ()=>{ DATA.subjects = DATA.subjects.filter(s=>s.id!==id); saveData(); renderEscola(); toast('Matéria excluída'); }); }
function openSubjectForm(){
  openModal(`
    <div class="modal-head"><h3>Nova matéria</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Nome da matéria</label><input class="input" id="subName" placeholder="Ex: Matemática"></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveSubject()">Salvar</button>
    </div>`);
}
function saveSubject(){
  const name = document.getElementById('subName').value.trim();
  if(!name){ toast('Informe o nome','err'); return; }
  DATA.subjects.push({id:uid(), name, grades:[], activities:[], absences:0});
  saveData(); closeModal(); toast('Matéria adicionada'); renderEscola();
}
function openSubjectDetail(id){
  const s = DATA.subjects.find(x=>x.id===id);
  const avg = subjAvg(s);
  openModal(`
    <div class="modal-head"><h3>${escapeHtml(s.name)}</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="grid grid-2" style="margin-bottom:14px;">
      <div class="card tight"><div class="tiny">Média</div><div style="font-family:'Sora';font-weight:800;font-size:22px;">${avg==null?'—':avg.toFixed(1)}</div></div>
      <div class="card tight">
        <div class="tiny">Faltas</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="icon-btn btn-sm" onclick="changeAbsence('${s.id}',-1)">-</button>
          <b style="font-size:16px;">${s.absences||0}</b>
          <button class="icon-btn btn-sm" onclick="changeAbsence('${s.id}',1)">+</button>
        </div>
      </div>
    </div>
    <div class="card-head"><h3 style="font-size:13.5px;">Notas / Provas</h3><button class="btn btn-sm btn-ghost" onclick="addGrade('${s.id}')">${icon('plus')}Nota</button></div>
    <div class="card tight" style="margin-bottom:16px;">
      ${listOrEmpty(s.grades, g=>`<div class="list-row"><div class="body"><div class="t1">${escapeHtml(g.label)}</div></div><div class="end"><div class="amt">${(+g.value).toFixed(1)}</div></div><div class="actions"><button class="icon-btn btn-sm" onclick="delGrade('${s.id}','${g.id}')">${icon('trash')}</button></div></div>`,'book','Nenhuma nota lançada')}
    </div>
    <div class="card-head"><h3 style="font-size:13.5px;">Atividades e trabalhos</h3><button class="btn btn-sm btn-ghost" onclick="addActivity('${s.id}')">${icon('plus')}Atividade</button></div>
    <div class="card tight">
      ${listOrEmpty(s.activities, a=>`<div class="list-row">
        <div class="check-circle ${a.done?'done':''}" onclick="toggleActivity('${s.id}','${a.id}')">${icon('check')}</div>
        <div class="body"><div class="t1 ${a.done?'strike':''}">${escapeHtml(a.title)}</div><div class="t2">${a.due?fmtDate(a.due):''}${a.type?' · '+escapeHtml(a.type):''}</div></div>
        <div class="actions"><button class="icon-btn btn-sm" onclick="delActivity('${s.id}','${a.id}')">${icon('trash')}</button></div>
      </div>`,'check','Nenhuma atividade')}
    </div>
  `);
}
function changeAbsence(sid,delta){ const s = DATA.subjects.find(x=>x.id===sid); s.absences = Math.max(0,(s.absences||0)+delta); saveData(); openSubjectDetail(sid); }
function addGrade(sid){
  openModal(`
    <div class="modal-head"><h3>Nova nota</h3><button class="icon-btn" onclick="openSubjectDetail('${sid}')">${icon('x')}</button></div>
    <div class="field"><label>Descrição (ex: Prova 1)</label><input class="input" id="grLabel"></div>
    <div class="field"><label>Nota (0-10)</label><input class="input" id="grValue" type="number" step="0.1" min="0" max="10"></div>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="openSubjectDetail('${sid}')">Cancelar</button><button class="btn btn-primary" onclick="saveGrade('${sid}')">Salvar</button></div>`);
}
function saveGrade(sid){
  const label = document.getElementById('grLabel').value.trim()||'Avaliação';
  const value = parseFloat(document.getElementById('grValue').value)||0;
  DATA.subjects.find(x=>x.id===sid).grades.push({id:uid(),label,value});
  saveData(); toast('Nota adicionada'); openSubjectDetail(sid); renderEscola();
}
function delGrade(sid,gid){ const s = DATA.subjects.find(x=>x.id===sid); s.grades = s.grades.filter(g=>g.id!==gid); saveData(); openSubjectDetail(sid); renderEscola(); }
function addActivity(sid){
  openModal(`
    <div class="modal-head"><h3>Nova atividade</h3><button class="icon-btn" onclick="openSubjectDetail('${sid}')">${icon('x')}</button></div>
    <div class="field"><label>Título</label><input class="input" id="acTitle" placeholder="Ex: Trabalho de história"></div>
    <div class="field-row">
      <div class="field"><label>Tipo</label><select class="select" id="acType"><option>Prova</option><option>Trabalho</option><option>Atividade</option></select></div>
      <div class="field"><label>Entrega</label><input class="input" id="acDue" type="date"></div>
    </div>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="openSubjectDetail('${sid}')">Cancelar</button><button class="btn btn-primary" onclick="saveActivity('${sid}')">Salvar</button></div>`);
}
function saveActivity(sid){
  const title = document.getElementById('acTitle').value.trim();
  if(!title){ toast('Informe o título','err'); return; }
  DATA.subjects.find(x=>x.id===sid).activities.push({id:uid(), title, type:document.getElementById('acType').value, due:document.getElementById('acDue').value, done:false});
  saveData(); toast('Atividade adicionada'); openSubjectDetail(sid); renderEscola(); renderInicio();
}
function toggleActivity(sid,aid){ const s = DATA.subjects.find(x=>x.id===sid); const a = s.activities.find(x=>x.id===aid); a.done=!a.done; saveData(); openSubjectDetail(sid); renderEscola(); }
function delActivity(sid,aid){ const s = DATA.subjects.find(x=>x.id===sid); s.activities = s.activities.filter(a=>a.id!==aid); saveData(); openSubjectDetail(sid); renderEscola(); }

/* ================= TAREFAS ================= */
let taskFilter = {status:'pendentes', priority:'todas', search:''};
let taskSort = 'prioridade';
function renderTarefas(){
  const el = document.getElementById('view-tarefas');
  let list = DATA.tasks.slice();
  if(taskFilter.status==='pendentes') list = list.filter(t=>!t.done);
  else if(taskFilter.status==='concluidas') list = list.filter(t=>t.done);
  if(taskFilter.priority!=='todas') list = list.filter(t=>t.priority===taskFilter.priority);
  if(taskFilter.search) list = list.filter(t=> t.title.toLowerCase().includes(taskFilter.search.toLowerCase()));
  const order = {urgente:0,importante:1,normal:2};
  if(taskSort==='prioridade') list.sort((a,b)=> order[a.priority]-order[b.priority]);
  else list.sort((a,b)=> (a.date||'9999').localeCompare(b.date||'9999'));

  el.innerHTML = `
    <div class="section-toolbar">
      <div class="search-box">${icon('search')}<input placeholder="Buscar tarefas..." value="${taskFilter.search}" oninput="taskFilter.search=this.value;renderTarefas()"></div>
      <select class="select" style="width:auto" onchange="taskSort=this.value;renderTarefas()">
        <option value="prioridade" ${taskSort==='prioridade'?'selected':''}>Ordenar: Prioridade</option>
        <option value="data" ${taskSort==='data'?'selected':''}>Ordenar: Data</option>
      </select>
    </div>
    <div class="chip-row" style="margin-bottom:8px;">
      ${[['pendentes','Pendentes'],['concluidas','Concluídas'],['todas','Todas']].map(([k,l])=>`<div class="chip ${taskFilter.status===k?'active':''}" onclick="taskFilter.status='${k}';renderTarefas()">${l}</div>`).join('')}
    </div>
    <div class="chip-row" style="margin-bottom:16px;">
      ${[['todas','Todas prioridades'],['urgente','🔴 Urgente'],['importante','🟡 Importante'],['normal','🟢 Normal']].map(([k,l])=>`<div class="chip ${taskFilter.priority===k?'active':''}" onclick="taskFilter.priority='${k}';renderTarefas()">${l}</div>`).join('')}
    </div>
    <div class="card">
      ${listOrEmpty(list, taskRow, 'check','Nenhuma tarefa por aqui')}
    </div>
  `;
}
function taskRow(t){
  const pillMap = {urgente:'pill-urgente',importante:'pill-importante',normal:'pill-normal'};
  const overdue = !t.done && t.date && daysUntil(t.date)<0;
  return `<div class="list-row">
    <div class="check-circle ${t.done?'done':''}" onclick="toggleTask('${t.id}')">${icon('check')}</div>
    <div class="body">
      <div class="t1 ${t.done?'strike':''}">${escapeHtml(t.title)}</div>
      <div class="t2">${t.date?fmtDate(t.date):''}${t.time?' · '+t.time:''}${overdue?' · <span style="color:var(--danger)">atrasada</span>':''}${t.category?' · '+escapeHtml(t.category):''}</div>
    </div>
    <span class="badge-pill ${pillMap[t.priority]}">${({urgente:'🔴 Urgente',importante:'🟡 Importante',normal:'🟢 Normal'})[t.priority]}</span>
    <div class="actions">
      <button class="icon-btn btn-sm" onclick="openTaskForm('${t.id}')">${icon('edit')}</button>
      <button class="icon-btn btn-sm" onclick="deleteTask('${t.id}')">${icon('trash')}</button>
    </div>
  </div>`;
}
function toggleTask(id){ const t = DATA.tasks.find(x=>x.id===id); t.done=!t.done; saveData(); renderTarefas(); renderInicio(); }
function deleteTask(id){ confirmDialog('Excluir esta tarefa?', ()=>{ DATA.tasks = DATA.tasks.filter(t=>t.id!==id); saveData(); renderTarefas(); renderInicio(); toast('Tarefa excluída'); }); }
function openTaskForm(id){
  const t = id? DATA.tasks.find(x=>x.id===id): null;
  openModal(`
    <div class="modal-head"><h3>${t?'Editar':'Nova'} tarefa</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Título</label><input class="input" id="tkTitle" value="${t?escapeHtml(t.title):''}"></div>
    <div class="field"><label>Descrição</label><textarea class="input" id="tkDesc" rows="2">${t?escapeHtml(t.desc||''):''}</textarea></div>
    <div class="field-row">
      <div class="field"><label>Categoria</label><input class="input" id="tkCat" value="${t?escapeHtml(t.category||''):''}" placeholder="Ex: Pessoal"></div>
      <div class="field"><label>Prazo</label><input class="input" id="tkDeadline" type="date" value="${t?t.deadline||'':''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Data</label><input class="input" id="tkDate" type="date" value="${t?t.date||'':todayISO()}"></div>
      <div class="field"><label>Horário</label><input class="input" id="tkTime" type="time" value="${t?t.time||'':''}"></div>
    </div>
    <div class="field"><label>Prioridade</label>
      <div class="priority-pick">
        <div class="p-opt" data-p="urgente" onclick="pickPriority('urgente')">🔴 Urgente</div>
        <div class="p-opt" data-p="importante" onclick="pickPriority('importante')">🟡 Importante</div>
        <div class="p-opt" data-p="normal" onclick="pickPriority('normal')">🟢 Normal</div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveTask(${t?`'${t.id}'`:'null'})">Salvar</button>
    </div>
  `);
  pickPriority(t?t.priority:'normal');
}
function pickPriority(p){ _taskPriority=p; document.querySelectorAll('.p-opt').forEach(el=> el.classList.toggle('sel', el.dataset.p===p)); }
let _taskPriority='normal';
function saveTask(id){
  const title = document.getElementById('tkTitle').value.trim();
  if(!title){ toast('Informe o título','err'); return; }
  const obj = {
    title, desc:document.getElementById('tkDesc').value.trim(),
    category:document.getElementById('tkCat').value.trim(),
    deadline:document.getElementById('tkDeadline').value,
    date:document.getElementById('tkDate').value,
    time:document.getElementById('tkTime').value,
    priority:_taskPriority,
  };
  if(id){ Object.assign(DATA.tasks.find(t=>t.id===id), obj); }
  else DATA.tasks.push({id:uid(), done:false, ...obj});
  saveData(); closeModal(); toast('Tarefa salva'); renderTarefas(); renderInicio();
}

/* ================= ROTINA ================= */
const WEEKDAYS = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
function renderTodayTimeline(compact){
  const todayIdx = new Date().getDay();
  const items = DATA.routine.filter(r=> r.days.includes(todayIdx)).sort((a,b)=> a.time.localeCompare(b.time));
  if(!items.length) return `<div class="empty">${icon('clock')}<p>Nenhuma atividade hoje</p></div>`;
  return `<div class="timeline">${items.map(r=>`
    <div class="tl-item"><div class="time">${r.time}</div><div class="what">${escapeHtml(r.activity)}</div><div class="cat">${escapeHtml(r.category||'')}${r.duration?' · '+r.duration+' min':''}</div></div>
  `).join('')}</div>`;
}
function renderRotina(){
  const el = document.getElementById('view-rotina');
  const all = DATA.routine.slice().sort((a,b)=>a.time.localeCompare(b.time));
  el.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Hoje · ${WEEKDAYS[new Date().getDay()]}</h3>
        ${renderTodayTimeline()}
      </div>
      <div class="card">
        <div class="card-head"><h3>Todos os horários</h3></div>
        ${listOrEmpty(all, r=>`
          <div class="list-row">
            <div class="lead-ic">${icon('clock')}</div>
            <div class="body"><div class="t1">${r.time} — ${escapeHtml(r.activity)}</div><div class="t2">${(r.days||[]).map(d=>WEEKDAYS[d]).join(', ')}${r.category?' · '+escapeHtml(r.category):''}</div></div>
            <div class="actions">
              <button class="icon-btn btn-sm" onclick="openRoutineForm('${r.id}')">${icon('edit')}</button>
              <button class="icon-btn btn-sm" onclick="deleteRoutine('${r.id}')">${icon('trash')}</button>
            </div>
          </div>`,'clock','Nenhum horário cadastrado')}
      </div>
    </div>
  `;
}
function deleteRoutine(id){ confirmDialog('Excluir este item da rotina?', ()=>{ DATA.routine = DATA.routine.filter(r=>r.id!==id); saveData(); renderRotina(); }); }
let _routineDays = [];
function openRoutineForm(id){
  const r = id? DATA.routine.find(x=>x.id===id): null;
  _routineDays = r? r.days.slice() : [1,2,3,4,5];
  openModal(`
    <div class="modal-head"><h3>${r?'Editar':'Novo'} horário</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field-row">
      <div class="field"><label>Horário</label><input class="input" id="rtTime" type="time" value="${r?r.time:'07:00'}"></div>
      <div class="field"><label>Duração (min)</label><input class="input" id="rtDur" type="number" value="${r?r.duration||'':''}"></div>
    </div>
    <div class="field"><label>Atividade</label><input class="input" id="rtActivity" value="${r?escapeHtml(r.activity):''}" placeholder="Ex: Academia"></div>
    <div class="field"><label>Categoria</label><input class="input" id="rtCategory" value="${r?escapeHtml(r.category||''):''}" placeholder="Ex: Saúde"></div>
    <div class="field"><label>Dias da semana</label>
      <div class="chip-row" id="rtDaysRow">
        ${WEEKDAYS.map((d,i)=>`<div class="chip ${_routineDays.includes(i)?'active':''}" onclick="toggleRoutineDay(${i})" data-day="${i}">${d}</div>`).join('')}
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveRoutine(${r?`'${r.id}'`:'null'})">Salvar</button>
    </div>`);
}
function toggleRoutineDay(i){
  const idx = _routineDays.indexOf(i);
  if(idx>-1) _routineDays.splice(idx,1); else _routineDays.push(i);
  document.querySelector(`[data-day="${i}"]`).classList.toggle('active');
}
function saveRoutine(id){
  const activity = document.getElementById('rtActivity').value.trim();
  if(!activity){ toast('Informe a atividade','err'); return; }
  const obj = {time:document.getElementById('rtTime').value, duration:document.getElementById('rtDur').value, activity, category:document.getElementById('rtCategory').value.trim(), days:_routineDays.slice()};
  if(id){ Object.assign(DATA.routine.find(r=>r.id===id), obj); }
  else DATA.routine.push({id:uid(), ...obj});
  saveData(); closeModal(); toast('Rotina salva'); renderRotina(); renderInicio();
}

/* ================= CALENDÁRIO ================= */
let calView = 'mes';
let calDate = new Date();
function renderCalendario(){
  const el = document.getElementById('view-calendario');
  el.innerHTML = `
    <div class="section-toolbar">
      <div class="chip-row">
        ${['dia','semana','mes'].map(v=>`<div class="chip ${calView===v?'active':''}" onclick="setCalView('${v}')">${v==='mes'?'Mês':v==='semana'?'Semana':'Dia'}</div>`).join('')}
      </div>
      <div class="spacer"></div>
      <button class="icon-btn" onclick="calNav(-1)">${icon('chevron')}</button>
      <div style="font-weight:700;font-size:13.5px;min-width:150px;text-align:center;text-transform:capitalize;">${calLabel()}</div>
      <button class="icon-btn" onclick="calNav(1)" style="transform:scaleX(-1)">${icon('chevron')}</button>
    </div>
    <div class="card">${calView==='mes'?monthGridHtml():calView==='semana'?weekListHtml():dayListHtml()}</div>
  `;
}
function setCalView(v){ calView=v; renderCalendario(); }
function calNav(dir){
  if(calView==='mes') calDate.setMonth(calDate.getMonth()+dir);
  else if(calView==='semana') calDate.setDate(calDate.getDate()+7*dir);
  else calDate.setDate(calDate.getDate()+dir);
  renderCalendario();
}
function calLabel(){
  if(calView==='mes') return calDate.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  if(calView==='dia') return calDate.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'short'});
  const start = new Date(calDate); start.setDate(start.getDate()-start.getDay());
  const end = new Date(start); end.setDate(end.getDate()+6);
  return start.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})+' – '+end.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
}
function allCalItems(){
  const items = [];
  DATA.tasks.forEach(t=> t.date && items.push({date:t.date, title:t.title, icon:'check', type:'Tarefa'}));
  DATA.events.forEach(e=> items.push({date:e.date, title:e.title, icon:'pin', type:'Evento'}));
  DATA.jobs.forEach(j=> j.deadline && items.push({date:j.deadline, title:j.name, icon:'briefcase', type:'Trabalho'}));
  DATA.subjects.forEach(s=> (s.activities||[]).forEach(a=> a.due && items.push({date:a.due, title:a.title+' · '+s.name, icon:'school', type:'Escola'})));
  DATA.fixedExpenses.forEach(f=> items.push({date: currentMonthKey()+'-'+String(f.dueDay).padStart(2,'0'), title:'Conta: '+f.desc, icon:'wallet', type:'Conta'}));
  return items;
}
function monthGridHtml(){
  const items = allCalItems();
  const y = calDate.getFullYear(), m = calDate.getMonth();
  const first = new Date(y,m,1);
  const startOffset = first.getDay();
  const daysInMonth = new Date(y,m+1,0).getDate();
  const todayStr = todayISO();
  let cells = '';
  for(let i=0;i<startOffset;i++) cells += `<div style="min-height:70px;"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const dateStr = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayItems = items.filter(it=>it.date===dateStr);
    const isToday = dateStr===todayStr;
    cells += `<div style="min-height:70px;border-radius:10px;padding:6px;background:${isToday?'var(--surface-strong)':'transparent'};border:1px solid ${isToday?'var(--c-accent)':'transparent'};">
      <div style="font-size:11.5px;font-weight:${isToday?'800':'600'};color:${isToday?'var(--c-warm)':'var(--text-2)'};margin-bottom:4px;">${d}</div>
      ${dayItems.slice(0,2).map(it=>`<div style="font-size:9.8px;background:var(--surface);border-radius:5px;padding:2px 4px;margin-bottom:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">${escapeHtml(it.title)}</div>`).join('')}
      ${dayItems.length>2?`<div style="font-size:9px;color:var(--text-3);">+${dayItems.length-2}</div>`:''}
    </div>`;
  }
  return `<div class="scrollx"><div style="min-width:560px;">
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:6px;">
      ${WEEKDAYS.map(d=>`<div class="tiny" style="text-align:center;font-weight:700;">${d}</div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;">${cells}</div>
  </div></div>`;
}
function weekListHtml(){
  const items = allCalItems();
  const start = new Date(calDate); start.setDate(start.getDate()-start.getDay());
  let html='';
  for(let i=0;i<7;i++){
    const d = new Date(start); d.setDate(d.getDate()+i);
    const dateStr = d.toISOString().slice(0,10);
    const dayItems = items.filter(it=>it.date===dateStr);
    html += `<div class="section-title" style="margin:14px 0 6px;text-transform:capitalize;">${d.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'short'})}</div>`;
    html += dayItems.length? dayItems.map(it=>rowGeneric(it.icon,it.title,it.type,null)).join('') : `<div class="tiny" style="padding:6px 4px;">Nada agendado</div>`;
  }
  return html;
}
function dayListHtml(){
  const items = allCalItems().filter(it=> it.date === calDate.toISOString().slice(0,10));
  return listOrEmpty(items, it=>rowGeneric(it.icon,it.title,it.type,null),'calendar','Nada agendado para este dia');
}
function openEventForm(){
  openModal(`
    <div class="modal-head"><h3>Novo compromisso</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Título</label><input class="input" id="evTitle" placeholder="Ex: Reunião, consulta..."></div>
    <div class="field-row">
      <div class="field"><label>Data</label><input class="input" id="evDate" type="date" value="${todayISO()}"></div>
      <div class="field"><label>Horário</label><input class="input" id="evTime" type="time"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveEvent()">Salvar</button>
    </div>`);
}
function saveEvent(){
  const title = document.getElementById('evTitle').value.trim();
  if(!title){ toast('Informe o título','err'); return; }
  DATA.events.push({id:uid(), title, date:document.getElementById('evDate').value, time:document.getElementById('evTime').value});
  saveData(); closeModal(); toast('Compromisso adicionado'); renderCalendario(); renderInicio();
}

/* ================= METAS ================= */
function renderMetas(){
  const el = document.getElementById('view-metas');
  el.innerHTML = `<div class="grid grid-3">
    ${DATA.goals.length? DATA.goals.map(goalCardHtml).join('') : emptyState('target','Nenhuma meta criada ainda',"openGoalForm()",'Criar meta')}
  </div>`;
}
function goalCardHtml(g){
  const pct = Math.min(100, Math.round((+g.current/(+g.target||1))*100));
  return `<div class="card">
    <div class="card-head">
      <h3>${escapeHtml(g.name)}</h3>
      <div class="actions">
        <button class="icon-btn btn-sm" onclick="openGoalForm('${g.id}')">${icon('edit')}</button>
        <button class="icon-btn btn-sm" onclick="deleteGoal('${g.id}')">${icon('trash')}</button>
      </div>
    </div>
    <div class="tiny" style="margin-bottom:10px;">${escapeHtml(g.desc||'')}</div>
    <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:6px;">
      <span>${g.current} / ${g.target} ${escapeHtml(g.unit||'')}</span><span style="font-weight:700;">${pct}%</span>
    </div>
    <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
    ${g.deadline?`<div class="tiny" style="margin-top:8px;">Prazo: ${fmtDate(g.deadline)}</div>`:''}
  </div>`;
}
function deleteGoal(id){ confirmDialog('Excluir esta meta?', ()=>{ DATA.goals = DATA.goals.filter(g=>g.id!==id); saveData(); renderMetas(); renderInicio(); toast('Meta excluída'); }); }
function openGoalForm(id){
  const g = id? DATA.goals.find(x=>x.id===id): null;
  openModal(`
    <div class="modal-head"><h3>${g?'Editar':'Nova'} meta</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Nome</label><input class="input" id="glName" value="${g?escapeHtml(g.name):''}" placeholder="Ex: Guardar dinheiro"></div>
    <div class="field"><label>Descrição</label><input class="input" id="glDesc" value="${g?escapeHtml(g.desc||''):''}"></div>
    <div class="field-row">
      <div class="field"><label>Valor atual</label><input class="input" id="glCurrent" type="number" step="0.01" value="${g?g.current:0}"></div>
      <div class="field"><label>Objetivo</label><input class="input" id="glTarget" type="number" step="0.01" value="${g?g.target:''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Unidade</label><input class="input" id="glUnit" value="${g?escapeHtml(g.unit||''):''}" placeholder="R$, horas, serviços..."></div>
      <div class="field"><label>Prazo</label><input class="input" id="glDeadline" type="date" value="${g?g.deadline||'':''}"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveGoal(${g?`'${g.id}'`:'null'})">Salvar</button>
    </div>`);
}
function saveGoal(id){
  const name = document.getElementById('glName').value.trim();
  if(!name){ toast('Informe o nome da meta','err'); return; }
  const obj = {
    name, desc:document.getElementById('glDesc').value.trim(),
    current:parseFloat(document.getElementById('glCurrent').value)||0,
    target:parseFloat(document.getElementById('glTarget').value)||1,
    unit:document.getElementById('glUnit').value.trim(),
    deadline:document.getElementById('glDeadline').value,
  };
  if(id){ Object.assign(DATA.goals.find(g=>g.id===id), obj); }
  else DATA.goals.push({id:uid(), ...obj});
  saveData(); closeModal(); toast('Meta salva'); renderMetas(); renderInicio();
}

/* ================= ESTATÍSTICAS ================= */
function renderEstatisticas(){
  const el = document.getElementById('view-estatisticas');
  const mk = currentMonthKey();
  const {entradas, saidas} = monthFlow(mk);
  const economia = entradas - saidas;
  const tConcl = DATA.tasks.filter(t=>t.done).length;
  const tPend = DATA.tasks.filter(t=>!t.done).length;
  const horasEstudo = DATA.routine.filter(r=> /estud/i.test(r.category||'') || /estud/i.test(r.activity||'')).reduce((s,r)=> s+((+r.duration||0)*(r.days||[]).length/60),0);
  const horasTrabalho = DATA.routine.filter(r=> /trabalh/i.test(r.category||'') || /trabalh/i.test(r.activity||'')).reduce((s,r)=> s+((+r.duration||0)*(r.days||[]).length/60),0);
  const metasConcl = DATA.goals.filter(g=> (+g.current) >= (+g.target)).length;

  const last6 = [];
  for(let i=5;i>=0;i--){
    const d = new Date(); d.setMonth(d.getMonth()-i);
    const mk2 = d.toISOString().slice(0,7);
    const f = monthFlow(mk2);
    last6.push({label:d.toLocaleDateString('pt-BR',{month:'short'}).replace('.',''), v:f.entradas-f.saidas});
  }

  el.innerHTML = `
    <div class="grid grid-4">
      ${statCard('arrowUp','Dinheiro ganho', fmtMoney(entradas))}
      ${statCard('arrowDown','Dinheiro gasto', fmtMoney(saidas))}
      ${statCard('wallet','Economia do mês', fmtMoney(economia))}
      ${statCard('target','Metas concluídas', metasConcl)}
    </div>
    <div class="grid grid-4" style="margin-top:14px;">
      ${statCard('check','Tarefas concluídas', tConcl)}
      ${statCard('clock','Tarefas pendentes', tPend)}
      ${statCard('book','Horas estudadas/sem', horasEstudo.toFixed(1))}
      ${statCard('briefcase','Horas trabalhadas/sem', horasTrabalho.toFixed(1))}
    </div>
    <div class="section-title">Evolução financeira (6 meses)</div>
    <div class="card">${lineChartSVG(last6,'#935073')}</div>
    <div class="section-title">Progresso das metas</div>
    <div class="card">
      ${listOrEmpty(DATA.goals, g=>{
        const pct = Math.min(100, Math.round((+g.current/(+g.target||1))*100));
        return `<div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;font-size:12.8px;margin-bottom:6px;"><b>${escapeHtml(g.name)}</b><span>${pct}%</span></div>
          <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
        </div>`;
      }, 'target','Nenhuma meta cadastrada')}
    </div>
  `;
}

/* ================= CONFIGURAÇÕES ================= */
function renderConfig(){
  const el = document.getElementById('view-config');
  const s = DATA.settings;
  el.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Perfil</h3>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
          <div class="avatar" style="width:56px;height:56px;font-size:20px;" id="cfgAvatarPreview">${s.photo?`<img src="${s.photo}">`:initials(s.name)}</div>
          <div>
            <button class="btn btn-sm btn-ghost" onclick="document.getElementById('cfgPhotoInput').click()">Alterar foto</button>
            <input type="file" id="cfgPhotoInput" accept="image/*" style="display:none" onchange="handlePhoto(event)">
          </div>
        </div>
        <div class="field"><label>Nome</label><input class="input" id="cfgName" value="${escapeHtml(s.name)}" onchange="updateName(this.value)"></div>
        <div class="field"><label>Moeda</label>
          <select class="select" id="cfgCurrency" onchange="updateSetting('currency', this.value)">
            <option value="BRL" ${s.currency==='BRL'?'selected':''}>Real (R$)</option>
            <option value="USD" ${s.currency==='USD'?'selected':''}>Dólar (US$)</option>
            <option value="EUR" ${s.currency==='EUR'?'selected':''}>Euro (€)</option>
          </select>
        </div>
      </div>

      <div class="card">
        <h3>Aparência</h3>
        <div class="theme-pick">
          <div class="theme-opt ${s.theme==='dark'?'sel':''}" onclick="setTheme('dark')"><div class="swatch-preview swatch-dark"></div>Escuro</div>
          <div class="theme-opt ${s.theme==='light'?'sel':''}" onclick="setTheme('light')"><div class="swatch-preview swatch-light"></div>Claro</div>
        </div>
      </div>

      <div class="card">
        <h3>Notificações</h3>
        <div class="settings-row">
          <div class="l"><b>Alertas de prazo</b><span>Avisar sobre tarefas e contas próximas do vencimento</span></div>
          <div class="switch ${s.notifOn!==false?'on':''}" onclick="toggleNotifSetting()"><div class="knob"></div></div>
        </div>
        <div class="field" style="margin-top:12px;"><label>Avisar com quantos dias de antecedência</label>
          <input class="input" type="number" min="1" max="14" value="${s.notifDays||3}" onchange="updateSetting('notifDays', parseInt(this.value)||3)">
        </div>
      </div>

      <div class="card">
        <h3>Dados</h3>
        <div class="settings-row">
          <div class="l"><b>Exportar dados</b><span>Baixe um backup em JSON</span></div>
          <button class="btn btn-sm btn-ghost" onclick="exportData()">${icon('download')}Exportar</button>
        </div>
        <div class="settings-row">
          <div class="l"><b>Importar dados</b><span>Restaurar a partir de um backup</span></div>
          <button class="btn btn-sm btn-ghost" onclick="document.getElementById('importInput').click()">${icon('upload')}Importar</button>
          <input type="file" id="importInput" accept="application/json" style="display:none" onchange="importData(event)">
        </div>
        <div class="settings-row">
          <div class="l"><b>Apagar todos os dados</b><span>Essa ação não pode ser desfeita</span></div>
          <button class="btn btn-sm btn-danger" onclick="wipeData()">${icon('trash')}Apagar</button>
        </div>
      </div>
    </div>
  `;
}
function initials(name){ return (name||'U').trim().split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase(); }
function updateName(v){ DATA.settings.name = v||'Usuário'; saveData(); refreshChrome(); toast('Nome atualizado'); }
function updateSetting(k,v){ DATA.settings[k]=v; saveData(); toast('Configuração salva'); if(k==='currency'){renderConfig();} }
function toggleNotifSetting(){ DATA.settings.notifOn = DATA.settings.notifOn===false; saveData(); renderConfig(); }
function handlePhoto(e){
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ DATA.settings.photo = reader.result; saveData(); refreshChrome(); renderConfig(); };
  reader.readAsDataURL(file);
}
function exportData(){
  const blob = new Blob([JSON.stringify(DATA,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'meu-painel-backup.json'; a.click();
  toast('Backup exportado');
}
function importData(e){
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{ const parsed = JSON.parse(reader.result); DATA = Object.assign(defaultData(), parsed); saveData(); toast('Dados importados'); renderAll(); refreshChrome(); }
    catch(err){ toast('Arquivo inválido','err'); }
  };
  reader.readAsText(file);
}
function wipeData(){
  confirmDialog('Isso vai apagar TODOS os seus dados permanentemente. Deseja continuar?', ()=>{
    DATA = defaultData(); saveData(); toast('Dados apagados'); renderAll(); refreshChrome();
  });
}
function renderAll(){ SECTIONS.forEach(s=> renderView(s.id)); }

/* ================= NOTIFICAÇÕES ================= */
function computeNotifications(){
  const days = DATA.settings.notifDays||3;
  const list = [];
  DATA.tasks.filter(t=>!t.done && t.date).forEach(t=>{ const d = daysUntil(t.date); if(d<=days) list.push({title:t.title, sub:(d<0?'Atrasada':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'check'}); });
  DATA.subjects.forEach(s=> (s.activities||[]).forEach(a=>{ if(!a.done && a.due){ const d = daysUntil(a.due); if(d<=days) list.push({title:a.title+' · '+s.name, sub:(d<0?'Atrasada':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'school'}); } }));
  DATA.jobs.forEach(j=>{ if(j.deadline && j.status!=='Concluído' && j.status!=='Cancelado'){ const d = daysUntil(j.deadline); if(d<=days) list.push({title:'Prazo: '+j.name, sub:(d<0?'Atrasado':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'briefcase'}); } });
  DATA.fixedExpenses.filter(f=>!f.paid).forEach(f=>{
    const today = new Date().getDate();
    if(f.dueDay - today <= days) list.push({title:'Conta: '+f.desc, sub:'Vence dia '+f.dueDay, icon:'wallet'});
  });
  DATA.goals.forEach(g=>{ if(g.deadline){ const d = daysUntil(g.deadline); if(d>=0 && d<=days) list.push({title:'Meta: '+g.name, sub:'Prazo em '+d+' dia(s)', icon:'target'}); } });
  return list;
}
function toggleNotif(){
  const p = document.getElementById('notifPanel');
  if(p.classList.contains('open')) return closeNotif();
  const items = computeNotifications();
  document.getElementById('notifList').innerHTML = items.length? items.map(n=>`
    <div class="notif-item"><div class="ic">${icon(n.icon)}</div><div><b>${escapeHtml(n.title)}</b><span>${n.sub}</span></div></div>
  `).join('') : `<div class="empty" style="padding:24px 10px;">${icon('bell')}<p>Nenhuma notificação no momento</p></div>`;
  p.classList.add('open');
}
function closeNotif(){ document.getElementById('notifPanel').classList.remove('open'); }
document.addEventListener('click', (e)=>{
  const p = document.getElementById('notifPanel'), b = document.getElementById('notifBtn');
  if(p.classList.contains('open') && !p.contains(e.target) && e.target!==b && !b.contains(e.target)) closeNotif();
});
function updateNotifBadge(){
  const n = computeNotifications().length;
  const btn = document.getElementById('notifBtn');
  btn.innerHTML = icon('bell') + (n? `<span class="badge">${n>9?'9+':n}</span>`:'');
}

/* ================= THEME / CHROME ================= */
function setTheme(t){
  DATA.settings.theme = t; saveData();
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeBtn').innerHTML = icon(t==='dark'?'moon':'sun');
  renderConfig();
}
function toggleTheme(){ setTheme(DATA.settings.theme==='dark'?'light':'dark'); }
function refreshChrome(){
  document.getElementById('sideName').textContent = DATA.settings.name||'Usuário';
  document.getElementById('sideAvatar').innerHTML = DATA.settings.photo? `<img src="${DATA.settings.photo}">` : initials(DATA.settings.name);
  document.getElementById('themeBtn').innerHTML = icon(DATA.settings.theme==='dark'?'moon':'sun');
  updateNotifBadge();
}

/* ================= UTIL ================= */
function escapeHtml(str){
  return String(str??'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ================= INIT ================= */
function init(){
  document.documentElement.setAttribute('data-theme', DATA.settings.theme||'dark');
  buildNav();
  buildViews();
  refreshChrome();
  go('inicio');
  setInterval(updateNotifBadge, 30000);
}
init();