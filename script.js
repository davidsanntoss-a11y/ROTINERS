/* ============================================================
   ROTINERS — app pessoal (localStorage), identidade preto/roxo/magenta
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
  bank:'<path d="M3 21h18"/><path d="M4 21V10M8 21V10M12.5 21V10M17 21V10M21 21V10"/><path d="m3 10 9-6.5L21 10Z"/>',
  home2:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
  calc:'<rect x="4" y="2.5" width="16" height="19" rx="2.3"/><path d="M7.5 6.5h9M7.5 11h1.4M11.4 11h1.4M15.3 11h1.4M7.5 14.5h1.4M11.4 14.5h1.4M15.3 14.5v4M7.5 18h1.4M11.4 18h1.4"/>',
  ruler:'<path d="m3.5 9.5 11-7 6 9.5-11 7Z"/><path d="m9.5 6.8 1.2 1.9M12.6 4.9l1.2 1.9M14.7 12.8l1.2 1.9M17.8 10.9l1.2 1.9"/>',
  swap:'<path d="M4 8h13M13 4l4 4-4 4"/><path d="M20 16H7M11 12l-4 4 4 4"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9.5 2.5h5"/>',
  note:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  grid9:'<rect x="3.5" y="3.5" width="5" height="5" rx="1"/><rect x="9.5" y="3.5" width="5" height="5" rx="1"/><rect x="15.5" y="3.5" width="5" height="5" rx="1"/><rect x="3.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><rect x="15.5" y="9.5" width="5" height="5" rx="1"/><rect x="3.5" y="15.5" width="5" height="5" rx="1"/><rect x="9.5" y="15.5" width="5" height="5" rx="1"/><rect x="15.5" y="15.5" width="5" height="5" rx="1"/>',
  type:'<path d="M5 5h14M12 5v14M9 19h6"/>',
  camera:'<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5Z"/><circle cx="12" cy="13" r="3.4"/>'
};
function icon(name, cls){
  return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;
}
document.querySelector('.brand .mark').innerHTML = icon('logo');

/* ---------- DATA LAYER ---------- */
const DB_KEY = 'rotiners_v1';
const LEGACY_DB_KEY = 'meuPainel_v1';
const uid = ()=> Date.now().toString(36)+Math.random().toString(36).slice(2,7);

function defaultData(){
  return {
    settings:{ name:'Usuário', photo:'', theme:'dark', currency:'BRL', notifDays:3, notifOn:true },
    transactions:[], // {id,type:'entrada'|'saida', desc, value, category, date, method}
    fixedExpenses:[], // {id, desc, value, dueDay, paid, category}
    jobs:[], // {id, name, client, location, value, received, date, deadline, status, notes, photos:[{id,phase,src}]}
    subjects:[], // {id, name, grades:[{label,value}], activities:[{id,title,type,due,done}], absences}
    tasks:[], // {id,title,desc,category,priority,date,time,deadline,status,done}
    routine:[], // {id,time,activity,category,duration,days:[0..6]}
    goals:[], // {id,name,desc,category,target,current,unit,deadline}
    events:[], // manual calendar events {id,title,date,time,type,category,reminder,notes}
    notifState:{ read:[], deleted:[] }, // ids de notificações computadas, marcadas como lidas/excluídas
    notes:'' // bloco de notas da escola
  };
}
let DATA = loadData();
function loadData(){
  try{
    let raw = localStorage.getItem(DB_KEY);
    if(!raw){
      // migra dados do antigo "Meu Painel", se existirem
      const legacy = localStorage.getItem(LEGACY_DB_KEY);
      if(legacy) raw = legacy;
    }
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
  {id:'lazer', label:'Lazer', icon:'gamepad'},
  {id:'roupas', label:'Roupas', icon:'cart'},
  {id:'transporte', label:'Transporte', icon:'car'},
  {id:'casa', label:'Casa', icon:'home2'},
  {id:'escola', label:'Escola', icon:'school'},
  {id:'trabalho', label:'Trabalho', icon:'work2'},
  {id:'outros', label:'Outros', icon:'more'},
];
const CAT_COLORS = ['#E736B0','#8B2FD9','#f0954a','#5fa8e3','#5fe3a8','#f0b84f','#c24bff','#ff8fe0'];
function catInfo(id){ return CATS.find(c=>c.id===id) || CATS[CATS.length-1]; }
function catColor(id){ const i = CATS.findIndex(c=>c.id===id); return CAT_COLORS[i<0?7:i]; }

const TASK_CATS = [
  {id:'escola', label:'Escola'},
  {id:'trabalho', label:'Trabalho'},
  {id:'diaadia', label:'Dia a dia'},
  {id:'outras', label:'Outras'},
];
function taskCatLabel(id){ const c = TASK_CATS.find(x=>x.id===id); return c? c.label : (id||'Outras'); }

const PRIORITIES = [
  {id:'urgente', label:'Urgente', emoji:'🔴', order:0},
  {id:'alta', label:'Alta prioridade', emoji:'🟠', order:1},
  {id:'media', label:'Média prioridade', emoji:'🟡', order:2},
  {id:'baixa', label:'Baixa prioridade', emoji:'🟢', order:3},
];
function prioInfo(id){ return PRIORITIES.find(p=>p.id===id) || PRIORITIES[2]; }

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

/* Animação de contagem para números do dashboard */
function countUp(el, to, isMoney){
  if(!el) return;
  const from = 0;
  const dur = 700;
  const t0 = performance.now();
  function step(t){
    const p = Math.min(1, (t-t0)/dur);
    const eased = 1 - Math.pow(1-p, 3);
    const val = from + (to-from)*eased;
    el.textContent = isMoney ? fmtMoney(val) : Math.round(val);
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
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
    escola:'Matérias, notas e ferramentas',
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
function greetingWord(){
  const h = new Date().getHours();
  if(h<12) return 'Bom dia';
  if(h<18) return 'Boa tarde';
  return 'Boa noite';
}
function renderInicio(){
  const el = document.getElementById('view-inicio');
  const bal = balance();
  const {entradas, saidas} = monthFlow(currentMonthKey());
  const pendTasks = DATA.tasks.filter(t=>!t.done);
  const nextThing = nextUpcoming();

  el.innerHTML = `
    <div class="hero">
      <div class="greet">
        <h2>${greetingWord()}, ${escapeHtml(DATA.settings.name||'Usuário')} 👋</h2>
        <p>Aqui está o resumo da sua rotina.</p>
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
      ${statCard('wallet','Saldo disponível', bal, null, true, 'cuSaldo')}
      ${statCard('arrowUp','Entradas do mês', entradas, null, true, 'cuEntradas')}
      ${statCard('arrowDown','Gastos do mês', saidas, null, true, 'cuGastos')}
      ${statCard('check','Tarefas pendentes', pendTasks.length, null, false, 'cuTarefas')}
    </div>

    <div class="section-title">Tarefas pendentes</div>
    <div class="section-toolbar">
      <div class="chip-row" id="inicioTaskChips">
        ${[['todas','Todas'],['escola','Escola'],['trabalho','Trabalho'],['diaadia','Dia a dia'],['outras','Outras']].map(([k,l])=>`<div class="chip ${inicioTaskCat===k?'active':''}" onclick="setInicioTaskCat('${k}')">${l}</div>`).join('')}
      </div>
    </div>
    <div class="card" style="margin-bottom:22px;">
      ${listOrEmpty(inicioPendingTasks(), taskRow, 'check','Nenhuma tarefa pendente')}
    </div>

    <div class="section-title">Panorama</div>
    <div class="grid grid-2">
      <div class="card">
        <h3>Tarefas por categoria</h3>
        ${taskDonut()}
      </div>
      <div class="card">
        <h3>Dinheiro por categoria</h3>
        ${donutChart(monthCatTotals())}
      </div>
    </div>

    <div class="section-title">Resumo financeiro</div>
    <div class="card">
      <div class="section-toolbar" style="margin-bottom:10px;">
        <div class="spacer"></div>
        <select class="select" style="width:auto" onchange="finResumoRange=this.value;renderInicio()">
          <option value="mes" ${finResumoRange==='mes'?'selected':''}>Últimos meses</option>
          <option value="ano" ${finResumoRange==='ano'?'selected':''}>Este ano</option>
        </select>
      </div>
      ${finResumoChart()}
    </div>

    <div class="grid grid-2" style="margin-top:18px;">
      <div class="card">
        <div class="card-head"><h3>Próximos compromissos</h3><span class="link" onclick="go('calendario')">Ver tudo ${icon('chevron')}</span></div>
        ${listOrEmpty(upcomingEvents(4), ev=>rowGeneric(ev.icon, ev.title, ev.when, null), 'calendar','Nenhum compromisso agendado')}
      </div>
      <div class="card">
        <div class="card-head"><h3>Trabalhos pendentes</h3><span class="link" onclick="go('trabalho')">Ver tudo ${icon('chevron')}</span></div>
        ${listOrEmpty(DATA.jobs.filter(j=>j.status!=='Concluído'&&j.status!=='Cancelado').slice(0,4), j=>rowGeneric('briefcase', j.name, j.client, fmtMoney(j.value-(+j.received||0))+' a receber'), 'briefcase','Nenhum trabalho pendente')}
      </div>
    </div>

    <div class="section-title">Metas em andamento</div>
    <div class="grid grid-3">
      ${DATA.goals.length ? DATA.goals.slice(0,3).map(goalCardHtml).join('') : emptyState('target','Nenhuma meta criada ainda', "go('metas')",'Criar meta')}
    </div>
  `;
  startClock();
  countUp(document.getElementById('cuSaldo'), bal, true);
  countUp(document.getElementById('cuEntradas'), entradas, true);
  countUp(document.getElementById('cuGastos'), saidas, true);
  countUp(document.getElementById('cuTarefas'), pendTasks.length, false);
}
let inicioTaskCat = 'todas';
function setInicioTaskCat(c){ inicioTaskCat=c; renderInicio(); }
function inicioPendingTasks(){
  let list = DATA.tasks.filter(t=>!t.done);
  if(inicioTaskCat!=='todas') list = list.filter(t=>t.category===inicioTaskCat);
  const order = {urgente:0,alta:1,media:2,baixa:3};
  list.sort((a,b)=> (order[a.priority]??2)-(order[b.priority]??2));
  return list.slice(0,6);
}
let finResumoRange = 'mes';
function statCard(ic,label,value,delta,isMoney,cuId){
  return `<div class="card stat">
    <div class="top"><div class="ic">${icon(ic)}</div></div>
    <div class="label">${label}</div>
    <div class="value" id="${cuId||''}">${isMoney?fmtMoney(value):value}</div>
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
function taskDonut(){
  const totals = {};
  DATA.tasks.forEach(t=>{ const c = t.category||'outras'; totals[c]=(totals[c]||0)+1; });
  const entries = Object.entries(totals);
  const total = entries.reduce((s,[,v])=>s+v,0);
  if(!total) return `<div class="empty">${icon('check')}<p>Nenhuma tarefa cadastrada</p></div>`;
  const colors = {escola:'#8B2FD9', trabalho:'#E736B0', diaadia:'#f0b84f', outras:'#5fe3a8'};
  let acc=0; const r=15.9155, cx=21,cy=21;
  const segs = entries.map(([cat,v])=>{
    const pct = v/total*100; const dash = `${pct} ${100-pct}`; const offset = 25-acc; acc+=pct;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="transparent" stroke="${colors[cat]||'#c24bff'}" stroke-width="6" stroke-dasharray="${dash}" stroke-dashoffset="${offset}"></circle>`;
  }).join('');
  const legend = entries.map(([cat,v])=>`<div class="li"><span class="sw" style="background:${colors[cat]||'#c24bff'}"></span>${taskCatLabel(cat)} · ${v}</div>`).join('');
  return `<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
    <svg viewBox="0 0 42 42" style="width:130px;height:130px;flex:none;transform:rotate(-90deg)">${segs}
      <text x="21" y="21" transform="rotate(90 21 21)" text-anchor="middle" dominant-baseline="middle" font-size="7" fill="var(--text-1)" font-weight="700">${total}</text>
    </svg>
    <div class="legend" style="margin-top:0;flex:1;min-width:140px;">${legend}</div>
  </div>`;
}
function monthCatTotals(){
  const mk = currentMonthKey(); const catTotals = {};
  DATA.transactions.filter(t=>t.type==='saida' && monthKey(t.date)===mk).forEach(t=> catTotals[t.category]=(catTotals[t.category]||0)+ (+t.value));
  return catTotals;
}
function finResumoChart(){
  const pts = [];
  if(finResumoRange==='ano'){
    const y = new Date().getFullYear();
    for(let m=0;m<12;m++){
      const mk2 = y+'-'+String(m+1).padStart(2,'0');
      const f = monthFlow(mk2);
      pts.push({label:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][m], entradas:f.entradas, saidas:f.saidas});
    }
  } else {
    for(let i=5;i>=0;i--){
      const d = new Date(); d.setMonth(d.getMonth()-i);
      const mk2 = d.toISOString().slice(0,7);
      const f = monthFlow(mk2);
      pts.push({label:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][d.getMonth()], entradas:f.entradas, saidas:f.saidas});
    }
  }
  const max = Math.max(...pts.map(p=>Math.max(p.entradas,p.saidas)),1);
  return `<div class="scrollx"><div style="min-width:${pts.length*70}px;display:flex;align-items:end;gap:14px;height:170px;padding-top:10px;">
    ${pts.map(p=>`
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end;">
        <div style="display:flex;gap:3px;align-items:end;height:100%;">
          <div style="width:14px;height:${Math.max(4,p.entradas/max*100)}%;background:#5fe3a8;border-radius:5px 5px 2px 2px;" title="Ganhos: ${fmtMoney(p.entradas)}"></div>
          <div style="width:14px;height:${Math.max(4,p.saidas/max*100)}%;background:#ff6b81;border-radius:5px 5px 2px 2px;" title="Gastos: ${fmtMoney(p.saidas)}"></div>
        </div>
        <div class="tiny">${p.label}</div>
      </div>`).join('')}
  </div></div>
  <div class="legend"><div class="li"><span class="sw" style="background:#5fe3a8"></span>Ganhos</div><div class="li"><span class="sw" style="background:#ff6b81"></span>Gastos</div></div>`;
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
  const catTotals = monthCatTotals();

  let txList = DATA.transactions.slice().sort((a,b)=> b.date.localeCompare(a.date));
  if(dinheiroFilterCat!=='todas') txList = txList.filter(t=>t.category===dinheiroFilterCat);

  el.innerHTML = `
    <div class="grid grid-4">
      ${statCard('wallet','Saldo atual', bal, null, true)}
      ${statCard('arrowUp','Entradas do mês', entradas, null, true)}
      ${statCard('arrowDown','Saídas do mês', saidas, null, true)}
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
        ${barsSimple([{label:'Entradas',value:entradas,color:'#5fe3a8'},{label:'Saídas',value:saidas,color:'#ff6b81'}])}
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
          <div class="actions">
            <button class="icon-btn btn-sm" onclick="openTxForm('${t.id}')">${icon('edit')}</button>
            <button class="icon-btn btn-sm" onclick="deleteTx('${t.id}')">${icon('trash')}</button>
          </div>
        </div>`, 'wallet', 'Nenhuma movimentação registrada')}
    </div>
  `;
}
function setDinFilter(c){ dinheiroFilterCat=c; renderDinheiro(); }
function deleteTx(id){ confirmDialog('Excluir esta movimentação?', ()=>{ DATA.transactions = DATA.transactions.filter(t=>t.id!==id); saveData(); renderDinheiro(); renderInicio(); toast('Movimentação excluída'); }); }
function toggleFixedPaid(id){ const f = DATA.fixedExpenses.find(x=>x.id===id); f.paid=!f.paid; saveData(); renderDinheiro(); }
function deleteFixed(id){ confirmDialog('Excluir esta conta fixa?', ()=>{ DATA.fixedExpenses = DATA.fixedExpenses.filter(x=>x.id!==id); saveData(); renderDinheiro(); }); }

function openTxForm(id){
  const t = id? DATA.transactions.find(x=>x.id===id): null;
  openModal(`
    <div class="modal-head"><h3>${t?'Editar':'Nova'} movimentação</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field-row" style="margin-bottom:12px;">
      <div class="chip" id="typeEntrada" onclick="pickTxType('entrada')" style="text-align:center;">Entrada</div>
      <div class="chip" id="typeSaida" onclick="pickTxType('saida')" style="text-align:center;">Saída</div>
    </div>
    <div class="field"><label>Descrição</label><input class="input" id="txDesc" value="${t?escapeHtml(t.desc):''}" placeholder="Ex: Freelance, mercado..."></div>
    <div class="field-row">
      <div class="field"><label>Valor</label><input class="input" id="txValue" type="number" step="0.01" value="${t?t.value:''}" placeholder="0,00"></div>
      <div class="field"><label>Data</label><input class="input" id="txDate" type="date" value="${t?t.date:todayISO()}"></div>
    </div>
    <div class="field"><label>Horário</label><input class="input" id="txTime" type="time" value="${t?t.time||'':''}"></div>
    <div class="field"><label>Categoria</label>
      <select class="select" id="txCat">${CATS.map(c=>`<option value="${c.id}" ${t&&t.category===c.id?'selected':''}>${c.label}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Forma de pagamento</label>
      <select class="select" id="txMethod">${['Pix','Dinheiro','Cartão de crédito','Cartão de débito','Transferência'].map(m=>`<option ${t&&t.method===m?'selected':''}>${m}</option>`).join('')}</select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveTx(${t?`'${t.id}'`:'null'})">Finalizar</button>
    </div>
  `);
  pickTxType(t?t.type:'entrada');
}
let _txType='entrada';
function pickTxType(t){ _txType=t; document.getElementById('typeEntrada').classList.toggle('active', t==='entrada'); document.getElementById('typeSaida').classList.toggle('active', t==='saida'); }
function saveTx(id){
  const desc = document.getElementById('txDesc').value.trim();
  const value = parseFloat(document.getElementById('txValue').value);
  const date = document.getElementById('txDate').value || todayISO();
  if(!desc || !value){ toast('Preencha descrição e valor','err'); return; }
  const obj = {type:_txType, desc, value, date, time:document.getElementById('txTime').value, category:document.getElementById('txCat').value, method:document.getElementById('txMethod').value};
  if(id){ Object.assign(DATA.transactions.find(t=>t.id===id), obj); }
  else DATA.transactions.push({id:uid(), ...obj});
  saveData(); closeModal(); toast('Movimentação salva'); renderDinheiro(); renderInicio();
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
      <button class="btn btn-primary" onclick="saveFixed()">Finalizar</button>
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
    <svg viewBox="0 0 42 42" style="width:130px;height:130px;flex:none;transform:rotate(-90deg)">${segs}
      <text x="21" y="21" transform="rotate(90 21 21)" text-anchor="middle" dominant-baseline="middle" font-size="5.6" fill="var(--text-1)" font-weight="700">${fmtMoney(total)}</text>
    </svg>
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

  let list = DATA.jobs.slice().sort((a,b)=> (a.deadline||'9999').localeCompare(b.deadline||'9999'));
  if(jobFilter==='entregas') list = list.filter(j=>j.deadline && daysUntil(j.deadline)>=0 && daysUntil(j.deadline)<=7 && j.status!=='Concluído');
  else if(jobFilter!=='todos') list = list.filter(j=>j.status===jobFilter);

  el.innerHTML = `
    <div class="grid grid-4">
      ${statCard('dollar','Total recebido', totalRecebido, null, true)}
      ${statCard('wallet','Total pendente', totalPendente, null, true)}
      ${statCard('check','Concluídos', concluidos)}
      ${statCard('clock','Em andamento', andamento)}
    </div>
    <div class="section-toolbar">
      <div class="chip-row">
        ${[['todos','Todos'],['A fazer','A fazer'],['Em andamento','Em andamento'],['Concluído','Concluídos'],['entregas','Entregas próximas']].map(([k,l])=>`<div class="chip ${jobFilter===k?'active':''}" onclick="setJobFilter('${k}')">${l}</div>`).join('')}
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
  const pillClass = {'A fazer':'pill-pendente','Em andamento':'pill-andamento',Concluído:'pill-concluido',Cancelado:'pill-cancelado'}[j.status]||'pill-pendente';
  return `<div class="card">
    <div class="card-head">
      <h3 style="cursor:pointer" onclick="openJobDetail('${j.id}')">${escapeHtml(j.name)}</h3>
      <span class="badge-pill ${pillClass}">${j.status}</span>
    </div>
    <div class="tiny" style="margin-bottom:10px;">Cliente: ${escapeHtml(j.client||'—')}${j.location?' · '+escapeHtml(j.location):''}</div>
    <div class="grid grid-2" style="margin-bottom:10px;">
      <div><div class="tiny">Valor total</div><div style="font-weight:700;font-family:'Sora'">${fmtMoney(j.value)}</div></div>
      <div><div class="tiny">A receber</div><div style="font-weight:700;font-family:'Sora';color:${pend>0?'var(--warn)':'var(--success)'}">${fmtMoney(pend)}</div></div>
    </div>
    <div class="tiny" style="margin-bottom:12px;">Prazo: ${j.deadline?fmtDate(j.deadline):'—'}</div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-sm btn-ghost" onclick="openJobDetail('${j.id}')">${icon('camera')}Fotos</button>
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
    <div class="field-row">
      <div class="field"><label>Cliente</label><input class="input" id="jbClient" value="${j?escapeHtml(j.client||''):''}"></div>
      <div class="field"><label>Localização</label><input class="input" id="jbLocation" value="${j?escapeHtml(j.location||''):''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Valor total</label><input class="input" id="jbValue" type="number" step="0.01" value="${j?j.value:''}"></div>
      <div class="field"><label>Valor recebido</label><input class="input" id="jbReceived" type="number" step="0.01" value="${j?j.received||0:0}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Data de início</label><input class="input" id="jbDate" type="date" value="${j?j.date||'':todayISO()}"></div>
      <div class="field"><label>Data de entrega</label><input class="input" id="jbDeadline" type="date" value="${j?j.deadline||'':''}"></div>
    </div>
    <div class="field"><label>Status</label>
      <select class="select" id="jbStatus">
        ${['A fazer','Em andamento','Concluído','Cancelado'].map(s=>`<option ${j&&j.status===s?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Observações</label><textarea class="input" id="jbNotes" rows="2">${j?escapeHtml(j.notes||''):''}</textarea></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveJob(${j?`'${j.id}'`:'null'})">Finalizar</button>
    </div>
  `);
}
function saveJob(id){
  const name = document.getElementById('jbName').value.trim();
  if(!name){ toast('Informe o nome do serviço','err'); return; }
  const prevStatus = id? DATA.jobs.find(j=>j.id===id).status : null;
  const obj = {
    name, client: document.getElementById('jbClient').value.trim(),
    location: document.getElementById('jbLocation').value.trim(),
    value: parseFloat(document.getElementById('jbValue').value)||0,
    received: parseFloat(document.getElementById('jbReceived').value)||0,
    date: document.getElementById('jbDate').value,
    deadline: document.getElementById('jbDeadline').value,
    status: document.getElementById('jbStatus').value,
    notes: document.getElementById('jbNotes').value.trim(),
  };
  let job;
  if(id){ job = DATA.jobs.find(j=>j.id===id); Object.assign(job, obj); }
  else { job = {id:uid(), photos:[], ...obj}; DATA.jobs.push(job); }
  // integração financeira: ao concluir e receber, oferece lançar entrada
  if(obj.status==='Concluído' && prevStatus!=='Concluído' && (+obj.received)>0){
    DATA.transactions.push({id:uid(), type:'entrada', desc:'Recebimento: '+name, value:+obj.received, date:todayISO(), category:'trabalho', method:'Pix'});
    toast('Trabalho salvo e entrada registrada em Dinheiro');
  } else {
    toast('Trabalho salvo');
  }
  saveData(); closeModal(); renderTrabalho(); renderInicio(); renderDinheiro();
}
function openJobDetail(id){
  const j = DATA.jobs.find(x=>x.id===id);
  if(!j.photos) j.photos=[];
  openModal(`
    <div class="modal-head"><h3>${escapeHtml(j.name)}</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="tiny" style="margin-bottom:12px;">Cliente: ${escapeHtml(j.client||'—')}${j.location?' · '+escapeHtml(j.location):''}</div>
    ${['Antes','Durante','Depois'].map(phase=>`
      <div class="card-head" style="margin-top:14px;"><h3 style="font-size:13px;">${phase}</h3></div>
      <div class="gallery-grid">
        ${j.photos.filter(p=>p.phase===phase).map(p=>`<img src="${p.src}" onclick="event.stopPropagation()">`).join('')}
        <div class="gallery-add" onclick="document.getElementById('jbPhotoInput_${phase}').click()">${icon('plus')}</div>
        <input type="file" id="jbPhotoInput_${phase}" accept="image/*" multiple style="display:none" onchange="addJobPhotos('${j.id}','${phase}',event)">
      </div>
    `).join('')}
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Fechar</button>
    </div>
  `);
}
function addJobPhotos(jid, phase, e){
  const files = Array.from(e.target.files||[]);
  const j = DATA.jobs.find(x=>x.id===jid);
  if(!j.photos) j.photos=[];
  let pending = files.length;
  if(!pending) return;
  files.forEach(file=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      j.photos.push({id:uid(), phase, src:reader.result});
      pending--;
      if(pending===0){ saveData(); openJobDetail(jid); }
    };
    reader.readAsDataURL(file);
  });
}

/* ================= ESCOLA ================= */
let escolaTab = 'materias';
function subjAvg(s){
  if(!s.grades || !s.grades.length) return null;
  const sum = s.grades.reduce((a,g)=>a+(+g.value||0),0);
  return sum/s.grades.length;
}
function renderEscola(){
  const el = document.getElementById('view-escola');
  el.innerHTML = `
    <div class="chip-row" style="margin-bottom:18px;">
      <div class="chip ${escolaTab==='materias'?'active':''}" onclick="setEscolaTab('materias')">Matérias</div>
      <div class="chip ${escolaTab==='ferramentas'?'active':''}" onclick="setEscolaTab('ferramentas')">Ferramentas</div>
    </div>
    <div id="escolaBody"></div>
  `;
  renderEscolaBody();
}
function setEscolaTab(t){ escolaTab=t; renderEscolaBody(); }
function renderEscolaBody(){
  const el = document.getElementById('escolaBody');
  if(escolaTab==='materias'){
    el.innerHTML = `
      <div class="grid grid-3">
        ${DATA.subjects.length? DATA.subjects.map(subjectCardHtml).join('') : emptyState('book','Nenhuma matéria cadastrada ainda',"openSubjectForm()",'Adicionar matéria')}
      </div>
      <div class="section-title">Atividades próximas do prazo</div>
      <div class="card">
        ${listOrEmpty(upcomingSchool(8), a=>rowGeneric('school', a.title, fmtDate(a.due), null),'school','Nenhuma atividade próxima')}
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="grid grid-4">
        ${toolCard('calc','Calculadora',"openToolCalc()")}
        ${toolCard('ruler','Geometria',"openToolGeo()")}
        ${toolCard('swap','Conversor',"openToolConvert()")}
        ${toolCard('target','Médias',"openToolAvg()")}
        ${toolCard('timer','Cronômetro',"openToolTimer()")}
        ${toolCard('note','Bloco de notas',"openToolNotes()")}
        ${toolCard('grid9','Tabuada',"openToolTable()")}
        ${toolCard('type','Contador',"openToolCounter()")}
      </div>
    `;
  }
}
function toolCard(ic,label,onclick){
  return `<div class="card tool-card" onclick="${onclick}"><div class="tool-ic">${icon(ic)}</div><b>${label}</b></div>`;
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
function deleteSubject(id){ confirmDialog('Excluir esta matéria e todos os dados dela?', ()=>{ DATA.subjects = DATA.subjects.filter(s=>s.id!==id); saveData(); renderEscolaBody(); toast('Matéria excluída'); }); }
function openSubjectForm(){
  openModal(`
    <div class="modal-head"><h3>Nova matéria</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Nome da matéria</label><input class="input" id="subName" placeholder="Ex: Matemática"></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveSubject()">Finalizar</button>
    </div>`);
}
function saveSubject(){
  const name = document.getElementById('subName').value.trim();
  if(!name){ toast('Informe o nome','err'); return; }
  DATA.subjects.push({id:uid(), name, grades:[], activities:[], absences:0});
  saveData(); closeModal(); toast('Matéria adicionada'); renderEscolaBody();
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
    <div class="modal-actions"><button class="btn btn-ghost" onclick="openSubjectDetail('${sid}')">Cancelar</button><button class="btn btn-primary" onclick="saveGrade('${sid}')">Finalizar</button></div>`);
}
function saveGrade(sid){
  const label = document.getElementById('grLabel').value.trim()||'Avaliação';
  const value = parseFloat(document.getElementById('grValue').value)||0;
  DATA.subjects.find(x=>x.id===sid).grades.push({id:uid(),label,value});
  saveData(); toast('Nota adicionada'); openSubjectDetail(sid); renderEscolaBody();
}
function delGrade(sid,gid){ const s = DATA.subjects.find(x=>x.id===sid); s.grades = s.grades.filter(g=>g.id!==gid); saveData(); openSubjectDetail(sid); renderEscolaBody(); }
function addActivity(sid){
  openModal(`
    <div class="modal-head"><h3>Nova atividade</h3><button class="icon-btn" onclick="openSubjectDetail('${sid}')">${icon('x')}</button></div>
    <div class="field"><label>Título</label><input class="input" id="acTitle" placeholder="Ex: Trabalho de história"></div>
    <div class="field-row">
      <div class="field"><label>Tipo</label><select class="select" id="acType"><option>Prova</option><option>Trabalho</option><option>Atividade</option></select></div>
      <div class="field"><label>Entrega</label><input class="input" id="acDue" type="date"></div>
    </div>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="openSubjectDetail('${sid}')">Cancelar</button><button class="btn btn-primary" onclick="saveActivity('${sid}')">Finalizar</button></div>`);
}
function saveActivity(sid){
  const title = document.getElementById('acTitle').value.trim();
  if(!title){ toast('Informe o título','err'); return; }
  DATA.subjects.find(x=>x.id===sid).activities.push({id:uid(), title, type:document.getElementById('acType').value, due:document.getElementById('acDue').value, done:false});
  saveData(); toast('Atividade adicionada'); openSubjectDetail(sid); renderEscolaBody(); renderInicio();
}
function toggleActivity(sid,aid){ const s = DATA.subjects.find(x=>x.id===sid); const a = s.activities.find(x=>x.id===aid); a.done=!a.done; saveData(); openSubjectDetail(sid); renderEscolaBody(); }
function delActivity(sid,aid){ const s = DATA.subjects.find(x=>x.id===sid); s.activities = s.activities.filter(a=>a.id!==aid); saveData(); openSubjectDetail(sid); renderEscolaBody(); }

/* ---- Ferramentas escolares ---- */
function openToolCalc(){
  openModal(`
    <div class="modal-head"><h3>Calculadora</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><input class="input" id="calcDisplay" readonly style="text-align:right;font-size:22px;font-family:'Sora';font-weight:700;" value="0"></div>
    <div class="grid grid-4" style="gap:8px;">
      ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(k=>`<button class="btn btn-ghost" style="justify-content:center;" onclick="calcPress('${k}')">${k}</button>`).join('')}
      <button class="btn btn-danger" style="justify-content:center;grid-column:span 2;" onclick="calcPress('C')">C</button>
      <button class="btn btn-ghost" style="justify-content:center;grid-column:span 2;" onclick="calcPress('%')">%</button>
    </div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal()">Fechar</button></div>
  `);
}
let _calcExpr = '';
function calcPress(k){
  const disp = document.getElementById('calcDisplay');
  if(k==='C'){ _calcExpr=''; disp.value='0'; return; }
  if(k==='='){
    try{ _calcExpr = _calcExpr.replace(/%/g,'/100'); disp.value = String(Function('"use strict";return('+_calcExpr+')')()); _calcExpr = disp.value; }
    catch(e){ disp.value='Erro'; _calcExpr=''; }
    return;
  }
  _calcExpr += k; disp.value = _calcExpr;
}
function openToolGeo(){
  openModal(`
    <div class="modal-head"><h3>Calculadora de geometria</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Forma</label>
      <select class="select" id="geoShape" onchange="renderGeoFields()">
        <option value="quadrado">Quadrado</option><option value="retangulo">Retângulo</option>
        <option value="triangulo">Triângulo</option><option value="circulo">Círculo</option>
        <option value="cubo">Cubo (volume)</option><option value="cilindro">Cilindro (volume)</option>
      </select>
    </div>
    <div id="geoFields"></div>
    <div class="card tight" id="geoResult" style="margin-top:10px;">—</div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal()">Fechar</button></div>
  `);
  renderGeoFields();
}
function renderGeoFields(){
  const shape = document.getElementById('geoShape').value;
  const map = {
    quadrado:[['lado','Lado']],
    retangulo:[['b','Base'],['h','Altura']],
    triangulo:[['b','Base'],['h','Altura']],
    circulo:[['r','Raio']],
    cubo:[['a','Aresta']],
    cilindro:[['r','Raio'],['h','Altura']],
  };
  const fields = map[shape];
  document.getElementById('geoFields').innerHTML = fields.map(([id,lb])=>`<div class="field"><label>${lb}</label><input class="input geoInput" data-k="${id}" type="number" step="0.01" oninput="calcGeo()"></div>`).join('');
  calcGeo();
}
function calcGeo(){
  const shape = document.getElementById('geoShape').value;
  const vals = {};
  document.querySelectorAll('.geoInput').forEach(i=> vals[i.dataset.k] = parseFloat(i.value)||0);
  let res = '';
  const PI = Math.PI;
  if(shape==='quadrado'){ res = `Área: ${(vals.lado**2).toFixed(2)} · Perímetro: ${(vals.lado*4).toFixed(2)}`; }
  else if(shape==='retangulo'){ res = `Área: ${(vals.b*vals.h).toFixed(2)} · Perímetro: ${(2*(vals.b+vals.h)).toFixed(2)}`; }
  else if(shape==='triangulo'){ res = `Área: ${(vals.b*vals.h/2).toFixed(2)}`; }
  else if(shape==='circulo'){ res = `Área: ${(PI*vals.r**2).toFixed(2)} · Perímetro: ${(2*PI*vals.r).toFixed(2)}`; }
  else if(shape==='cubo'){ res = `Volume: ${(vals.a**3).toFixed(2)}`; }
  else if(shape==='cilindro'){ res = `Volume: ${(PI*vals.r**2*vals.h).toFixed(2)}`; }
  document.getElementById('geoResult').textContent = res;
}
function openToolConvert(){
  openModal(`
    <div class="modal-head"><h3>Conversor de unidades</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Tipo</label>
      <select class="select" id="convType" onchange="renderConvUnits()">
        <option value="comprimento">Comprimento</option><option value="massa">Massa</option>
        <option value="tempo">Tempo</option><option value="area">Área</option><option value="temperatura">Temperatura</option>
      </select>
    </div>
    <div class="field-row">
      <div class="field"><label>De</label><select class="select" id="convFrom" onchange="calcConv()"></select></div>
      <div class="field"><label>Para</label><select class="select" id="convTo" onchange="calcConv()"></select></div>
    </div>
    <div class="field"><label>Valor</label><input class="input" id="convValue" type="number" value="1" oninput="calcConv()"></div>
    <div class="card tight" id="convResult">—</div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal()">Fechar</button></div>
  `);
  renderConvUnits();
}
const CONV_UNITS = {
  comprimento:{m:1, km:1000, cm:0.01, mm:0.001, mi:1609.34, ft:0.3048},
  massa:{kg:1, g:0.001, mg:0.000001, ton:1000, lb:0.453592},
  tempo:{s:1, min:60, h:3600, dia:86400},
  area:{'m²':1, 'km²':1000000, 'ha':10000, 'cm²':0.0001},
};
function renderConvUnits(){
  const type = document.getElementById('convType').value;
  if(type==='temperatura'){
    document.getElementById('convFrom').innerHTML = '<option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option>';
    document.getElementById('convTo').innerHTML = '<option>Fahrenheit</option><option>Celsius</option><option>Kelvin</option>';
  } else {
    const units = Object.keys(CONV_UNITS[type]);
    document.getElementById('convFrom').innerHTML = units.map(u=>`<option>${u}</option>`).join('');
    document.getElementById('convTo').innerHTML = units.map(u=>`<option>${u}</option>`).join('');
  }
  calcConv();
}
function calcConv(){
  const type = document.getElementById('convType').value;
  const from = document.getElementById('convFrom').value, to = document.getElementById('convTo').value;
  const v = parseFloat(document.getElementById('convValue').value)||0;
  let res;
  if(type==='temperatura'){
    let celsius = from==='Celsius'?v: from==='Fahrenheit'?(v-32)*5/9 : v-273.15;
    res = to==='Celsius'?celsius: to==='Fahrenheit'?celsius*9/5+32 : celsius+273.15;
  } else {
    const base = v * CONV_UNITS[type][from];
    res = base / CONV_UNITS[type][to];
  }
  document.getElementById('convResult').textContent = `${v} ${from} = ${res.toFixed(4)} ${to}`;
}
function openToolAvg(){
  openModal(`
    <div class="modal-head"><h3>Calculadora de médias</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Notas (separadas por vírgula)</label><input class="input" id="avgNotas" placeholder="Ex: 7, 8.5, 6"></div>
    <div class="field-row">
      <div class="field"><label>Média para aprovação</label><input class="input" id="avgAlvo" type="number" value="7" step="0.1"></div>
      <div class="field"><label>Quantidade total de notas</label><input class="input" id="avgQtd" type="number" value="4"></div>
    </div>
    <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="calcAvg()">Calcular</button>
    <div class="card tight" id="avgResult">—</div>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Fechar</button></div>
  `);
}
function calcAvg(){
  const notas = document.getElementById('avgNotas').value.split(',').map(s=>parseFloat(s.trim())).filter(n=>!isNaN(n));
  const alvo = parseFloat(document.getElementById('avgAlvo').value)||7;
  const qtd = parseInt(document.getElementById('avgQtd').value)||notas.length;
  if(!notas.length){ document.getElementById('avgResult').textContent='Informe ao menos uma nota'; return; }
  const media = notas.reduce((a,b)=>a+b,0)/notas.length;
  const faltam = qtd - notas.length;
  let msg = `Média atual: ${media.toFixed(2)}`;
  if(faltam>0){
    const necessaria = (alvo*qtd - notas.reduce((a,b)=>a+b,0)) / faltam;
    msg += ` · Precisa tirar ${necessaria.toFixed(2)} nas próximas ${faltam} avaliação(ões) para média ${alvo}`;
  }
  document.getElementById('avgResult').textContent = msg;
}
function openToolTimer(){
  openModal(`
    <div class="modal-head"><h3>Cronômetro de estudos</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div style="text-align:center;font-family:'Sora';font-size:40px;font-weight:800;margin:14px 0;" id="timerDisplay">00:00:00</div>
    <div class="field-row">
      <button class="btn btn-primary" style="justify-content:center;" onclick="timerToggle()" id="timerBtn">Iniciar</button>
      <button class="btn btn-ghost" style="justify-content:center;" onclick="timerReset()">Reiniciar</button>
    </div>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Fechar</button></div>
  `);
}
let _timerSec = 0, _timerRunning = false, _timerInt = null;
function timerToggle(){
  _timerRunning = !_timerRunning;
  document.getElementById('timerBtn').textContent = _timerRunning?'Pausar':'Iniciar';
  if(_timerRunning){ _timerInt = setInterval(()=>{ _timerSec++; updateTimerDisplay(); }, 1000); }
  else clearInterval(_timerInt);
}
function timerReset(){ _timerSec=0; _timerRunning=false; clearInterval(_timerInt); document.getElementById('timerBtn').textContent='Iniciar'; updateTimerDisplay(); }
function updateTimerDisplay(){
  const h = String(Math.floor(_timerSec/3600)).padStart(2,'0');
  const m = String(Math.floor((_timerSec%3600)/60)).padStart(2,'0');
  const s = String(_timerSec%60).padStart(2,'0');
  const el = document.getElementById('timerDisplay'); if(el) el.textContent = `${h}:${m}:${s}`;
}
function openToolNotes(){
  openModal(`
    <div class="modal-head"><h3>Bloco de notas</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <textarea class="input" id="notesArea" rows="10" placeholder="Escreva suas anotações...">${escapeHtml(DATA.notes||'')}</textarea>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveNotes()">Salvar</button>
    </div>
  `);
}
function saveNotes(){ DATA.notes = document.getElementById('notesArea').value; saveData(); closeModal(); toast('Notas salvas'); }
function openToolTable(){
  openModal(`
    <div class="modal-head"><h3>Gerador de tabuada</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Número</label><input class="input" id="tableNum" type="number" value="5" oninput="renderTable()"></div>
    <div class="card tight" id="tableResult" style="max-height:280px;overflow-y:auto;"></div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal()">Fechar</button></div>
  `);
  renderTable();
}
function renderTable(){
  const n = parseInt(document.getElementById('tableNum').value)||0;
  let html = '';
  for(let i=1;i<=10;i++) html += `<div class="list-row"><div class="body t1">${n} × ${i} = ${n*i}</div></div>`;
  document.getElementById('tableResult').innerHTML = html;
}
function openToolCounter(){
  openModal(`
    <div class="modal-head"><h3>Contador de texto</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <textarea class="input" id="counterArea" rows="8" placeholder="Cole ou digite seu texto..." oninput="renderCounter()"></textarea>
    <div class="grid grid-3" style="margin-top:10px;">
      <div class="card tight" style="text-align:center;"><div class="tiny">Palavras</div><b id="cntWords">0</b></div>
      <div class="card tight" style="text-align:center;"><div class="tiny">Caracteres</div><b id="cntChars">0</b></div>
      <div class="card tight" style="text-align:center;"><div class="tiny">Linhas</div><b id="cntLines">0</b></div>
    </div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal()">Fechar</button></div>
  `);
}
function renderCounter(){
  const t = document.getElementById('counterArea').value;
  document.getElementById('cntWords').textContent = t.trim()? t.trim().split(/\s+/).length : 0;
  document.getElementById('cntChars').textContent = t.length;
  document.getElementById('cntLines').textContent = t? t.split('\n').length : 0;
}

/* ================= TAREFAS ================= */
let taskFilter = {status:'pendentes', priority:'todas', category:'todas', search:''};
let taskSort = 'prioridade';
function renderTarefas(){
  const el = document.getElementById('view-tarefas');
  let list = DATA.tasks.slice();
  if(taskFilter.status==='pendentes') list = list.filter(t=>!t.done);
  else if(taskFilter.status==='concluidas') list = list.filter(t=>t.done);
  if(taskFilter.priority!=='todas') list = list.filter(t=>t.priority===taskFilter.priority);
  if(taskFilter.category!=='todas') list = list.filter(t=>t.category===taskFilter.category);
  if(taskFilter.search) list = list.filter(t=> t.title.toLowerCase().includes(taskFilter.search.toLowerCase()));
  const order = {urgente:0,alta:1,media:2,baixa:3};
  if(taskSort==='prioridade') list.sort((a,b)=> (order[a.priority]??2)-(order[b.priority]??2));
  else if(taskSort==='horario') list.sort((a,b)=> (a.time||'99:99').localeCompare(b.time||'99:99'));
  else list.sort((a,b)=> (a.date||'9999').localeCompare(b.date||'9999'));

  el.innerHTML = `
    <div class="section-toolbar">
      <div class="search-box">${icon('search')}<input placeholder="Buscar tarefas..." value="${taskFilter.search}" oninput="taskFilter.search=this.value;renderTarefas()"></div>
      <select class="select" style="width:auto" onchange="taskSort=this.value;renderTarefas()">
        <option value="prioridade" ${taskSort==='prioridade'?'selected':''}>Ordenar: Prioridade</option>
        <option value="data" ${taskSort==='data'?'selected':''}>Ordenar: Data</option>
        <option value="horario" ${taskSort==='horario'?'selected':''}>Ordenar: Horário</option>
      </select>
    </div>
    <div class="chip-row" style="margin-bottom:8px;">
      ${[['pendentes','Pendentes'],['concluidas','Concluídas'],['todas','Todas']].map(([k,l])=>`<div class="chip ${taskFilter.status===k?'active':''}" onclick="taskFilter.status='${k}';renderTarefas()">${l}</div>`).join('')}
    </div>
    <div class="chip-row" style="margin-bottom:8px;">
      ${[['todas','Todas categorias'],['escola','Escola'],['trabalho','Trabalho'],['diaadia','Dia a dia'],['outras','Outras']].map(([k,l])=>`<div class="chip ${taskFilter.category===k?'active':''}" onclick="taskFilter.category='${k}';renderTarefas()">${l}</div>`).join('')}
    </div>
    <div class="chip-row" style="margin-bottom:16px;">
      ${PRIORITIES.map(p=>`<div class="chip ${taskFilter.priority===p.id?'active':''}" onclick="taskFilter.priority=taskFilter.priority==='${p.id}'?'todas':'${p.id}';renderTarefas()">${p.emoji} ${p.label}</div>`).join('')}
    </div>
    <div class="card">
      ${listOrEmpty(list, taskRow, 'check','Nenhuma tarefa por aqui')}
    </div>
  `;
}
function taskRow(t){
  const pi = prioInfo(t.priority);
  const overdue = !t.done && t.date && daysUntil(t.date)<0;
  return `<div class="list-row">
    <div class="check-circle ${t.done?'done':''}" onclick="toggleTask('${t.id}')">${icon('check')}</div>
    <div class="body">
      <div class="t1 ${t.done?'strike':''}">${escapeHtml(t.title)}</div>
      <div class="t2">${taskCatLabel(t.category)}${t.date?' · '+fmtDate(t.date):''}${t.time?' · '+t.time:''}${overdue?' · <span style="color:var(--danger)">atrasada</span>':''}</div>
    </div>
    <span class="badge-pill pill-${t.priority}">${pi.emoji} ${pi.label}</span>
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
    <div class="field"><label>Categoria</label>
      <select class="select" id="tkCat">${TASK_CATS.map(c=>`<option value="${c.id}" ${t&&t.category===c.id?'selected':''}>${c.label}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Descrição da tarefa</label><input class="input" id="tkTitle" value="${t?escapeHtml(t.title):''}"></div>
    <div class="field-row">
      <div class="field"><label>Data</label><input class="input" id="tkDate" type="date" value="${t?t.date||'':todayISO()}"></div>
      <div class="field"><label>Horário</label><input class="input" id="tkTime" type="time" value="${t?t.time||'':''}"></div>
    </div>
    <div class="field"><label>Prioridade</label>
      <div class="priority-pick">
        ${PRIORITIES.map(p=>`<div class="p-opt" data-p="${p.id}" onclick="pickPriority('${p.id}')">${p.emoji} ${p.label}</div>`).join('')}
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveTask(${t?`'${t.id}'`:'null'})">Finalizar</button>
    </div>
  `);
  pickPriority(t?t.priority:'media');
}
function pickPriority(p){ _taskPriority=p; document.querySelectorAll('.p-opt').forEach(el=> el.classList.toggle('sel', el.dataset.p===p)); }
let _taskPriority='media';
function saveTask(id){
  const title = document.getElementById('tkTitle').value.trim();
  if(!title){ toast('Informe a descrição da tarefa','err'); return; }
  const obj = {
    title,
    category:document.getElementById('tkCat').value,
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
      <button class="btn btn-primary" onclick="saveRoutine(${r?`'${r.id}'`:'null'})">Finalizar</button>
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
        ${['semana','mes'].map(v=>`<div class="chip ${calView===v?'active':''}" onclick="setCalView('${v}')">${v==='mes'?'Mensal':'Semanal'}</div>`).join('')}
      </div>
      <div class="spacer"></div>
      <button class="icon-btn" onclick="calNav(-1)">${icon('chevron')}</button>
      <div style="font-weight:700;font-size:13.5px;min-width:150px;text-align:center;text-transform:capitalize;">${calLabel()}</div>
      <button class="icon-btn" onclick="calNav(1)" style="transform:scaleX(-1)">${icon('chevron')}</button>
    </div>
    <div class="card">${calView==='mes'?monthGridHtml():weekListHtml()}</div>
  `;
}
function setCalView(v){ calView=v; renderCalendario(); }
function calNav(dir){
  if(calView==='mes') calDate.setMonth(calDate.getMonth()+dir);
  else calDate.setDate(calDate.getDate()+7*dir);
  renderCalendario();
}
function calLabel(){
  if(calView==='mes') return calDate.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  const start = new Date(calDate); start.setDate(start.getDate()-start.getDay());
  const end = new Date(start); end.setDate(end.getDate()+6);
  return start.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})+' – '+end.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
}
function allCalItems(){
  const items = [];
  DATA.tasks.forEach(t=> t.date && items.push({date:t.date, title:t.title, icon:'check', type:'Tarefa'}));
  DATA.events.forEach(e=> items.push({id:e.id, date:e.date, title:e.title, icon:'pin', type:'Evento', isEvent:true}));
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
    cells += `<div class="cal-day" style="min-height:70px;border-radius:10px;padding:6px;cursor:pointer;background:${isToday?'var(--surface-strong)':'transparent'};border:1px solid ${isToday?'var(--c-accent)':'transparent'};" onclick="openDayDetail('${dateStr}')">
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
    html += `<div class="section-title" style="margin:14px 0 6px;text-transform:capitalize;cursor:pointer;" onclick="openDayDetail('${dateStr}')">${d.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'short'})}</div>`;
    html += dayItems.length? dayItems.map(it=>rowGeneric(it.icon,it.title,it.type,null)).join('') : `<div class="tiny" style="padding:6px 4px;">Nada agendado</div>`;
  }
  return html;
}
function openDayDetail(dateStr){
  const items = allCalItems().filter(it=>it.date===dateStr);
  openModal(`
    <div class="modal-head"><h3>${fmtDateFull(dateStr)}</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    ${listOrEmpty(items, it=>rowGeneric(it.icon,it.title,it.type,null),'calendar','Nada agendado para este dia')}
    <div class="modal-actions"><button class="btn btn-primary" onclick="closeModal();openEventForm('${dateStr}')">${icon('plus')}Novo compromisso</button></div>
  `);
}
function openEventForm(prefDate){
  openModal(`
    <div class="modal-head"><h3>Novo compromisso</h3><button class="icon-btn" onclick="closeModal()">${icon('x')}</button></div>
    <div class="field"><label>Nome</label><input class="input" id="evTitle" placeholder="Ex: Reunião, consulta..."></div>
    <div class="field"><label>Categoria</label>
      <select class="select" id="evCat">${TASK_CATS.map(c=>`<option value="${c.id}">${c.label}</option>`).join('')}</select>
    </div>
    <div class="field-row">
      <div class="field"><label>Data</label><input class="input" id="evDate" type="date" value="${prefDate||todayISO()}"></div>
      <div class="field"><label>Horário</label><input class="input" id="evTime" type="time"></div>
    </div>
    <div class="field"><label>Lembrete</label>
      <select class="select" id="evReminder"><option value="0">No horário</option><option value="30">30 min antes</option><option value="60">1 hora antes</option><option value="1440">1 dia antes</option></select>
    </div>
    <div class="field"><label>Observação</label><textarea class="input" id="evNotes" rows="2"></textarea></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveEvent()">Finalizar</button>
    </div>`);
}
function saveEvent(){
  const title = document.getElementById('evTitle').value.trim();
  if(!title){ toast('Informe o nome','err'); return; }
  DATA.events.push({
    id:uid(), title, category:document.getElementById('evCat').value,
    date:document.getElementById('evDate').value, time:document.getElementById('evTime').value,
    reminder:document.getElementById('evReminder').value, notes:document.getElementById('evNotes').value.trim()
  });
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
      <button class="btn btn-primary" onclick="saveGoal(${g?`'${g.id}'`:'null'})">Finalizar</button>
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
      ${statCard('arrowUp','Dinheiro ganho', entradas, null, true)}
      ${statCard('arrowDown','Dinheiro gasto', saidas, null, true)}
      ${statCard('wallet','Economia do mês', economia, null, true)}
      ${statCard('target','Metas concluídas', metasConcl)}
    </div>
    <div class="grid grid-4" style="margin-top:14px;">
      ${statCard('check','Tarefas concluídas', tConcl)}
      ${statCard('clock','Tarefas pendentes', tPend)}
      ${statCard('book','Horas estudadas/sem', horasEstudo.toFixed(1))}
      ${statCard('briefcase','Horas trabalhadas/sem', horasTrabalho.toFixed(1))}
    </div>
    <div class="section-title">Evolução financeira (6 meses)</div>
    <div class="card">${lineChartSVG(last6,'#E736B0')}</div>
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
        <div class="settings-row" style="margin-top:14px;">
          <div class="l"><b>Animações</b><span>Ativar transições e efeitos visuais</span></div>
          <div class="switch ${s.animOn!==false?'on':''}" onclick="toggleAnim()"><div class="knob"></div></div>
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
function toggleAnim(){
  DATA.settings.animOn = DATA.settings.animOn===false;
  saveData();
  document.body.classList.toggle('anim-off', DATA.settings.animOn===false);
  renderConfig();
}
function handlePhoto(e){
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ DATA.settings.photo = reader.result; saveData(); refreshChrome(); renderConfig(); };
  reader.readAsDataURL(file);
}
function exportData(){
  const blob = new Blob([JSON.stringify(DATA,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'rotiners-backup.json'; a.click();
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
  DATA.tasks.filter(t=>!t.done && t.date).forEach(t=>{ const d = daysUntil(t.date); if(d<=days) list.push({id:'task-'+t.id, title:t.title, sub:(d<0?'Atrasada':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'check'}); });
  DATA.subjects.forEach(s=> (s.activities||[]).forEach(a=>{ if(!a.done && a.due){ const d = daysUntil(a.due); if(d<=days) list.push({id:'act-'+a.id, title:a.title+' · '+s.name, sub:(d<0?'Atrasada':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'school'}); } }));
  DATA.jobs.forEach(j=>{ if(j.deadline && j.status!=='Concluído' && j.status!=='Cancelado'){ const d = daysUntil(j.deadline); if(d<=days) list.push({id:'job-'+j.id, title:'Entrega: '+j.name, sub:(d<0?'Atrasado':(d===0?'Hoje':'Em '+d+' dia(s)')), icon:'briefcase'}); } });
  DATA.fixedExpenses.filter(f=>!f.paid).forEach(f=>{
    const today = new Date().getDate();
    if(f.dueDay - today <= days) list.push({id:'fx-'+f.id, title:'Conta: '+f.desc, sub:'Vence dia '+f.dueDay, icon:'wallet'});
  });
  DATA.goals.forEach(g=>{ if(g.deadline){ const d = daysUntil(g.deadline); if(d>=0 && d<=days) list.push({id:'goal-'+g.id, title:'Meta: '+g.name, sub:'Prazo em '+d+' dia(s)', icon:'target'}); } });
  DATA.events.forEach(e=>{ const d = daysUntil(e.date); if(d>=0 && d<=days) list.push({id:'ev-'+e.id, title:e.title, sub:(d===0?'Hoje':'Em '+d+' dia(s)'), icon:'pin'}); });
  return list.filter(n=> !(DATA.notifState.deleted||[]).includes(n.id));
}
function toggleNotif(){
  const p = document.getElementById('notifPanel');
  if(p.classList.contains('open')) return closeNotif();
  renderNotifList();
  p.classList.add('open');
}
function renderNotifList(){
  const items = computeNotifications();
  document.getElementById('notifList').innerHTML = items.length? items.map(n=>{
    const read = (DATA.notifState.read||[]).includes(n.id);
    return `<div class="notif-item ${read?'':'unread'}">
      <div class="ic">${icon(n.icon)}</div>
      <div class="body" onclick="markNotifRead('${n.id}')"><b>${escapeHtml(n.title)}</b><span>${n.sub}</span></div>
      <button class="icon-btn btn-sm del" onclick="deleteNotif('${n.id}')">${icon('x')}</button>
    </div>`;
  }).join('') : `<div class="empty" style="padding:24px 10px;">${icon('bell')}<p>Nenhuma notificação no momento</p></div>`;
}
function markNotifRead(id){
  if(!DATA.notifState.read) DATA.notifState.read=[];
  if(!DATA.notifState.read.includes(id)) DATA.notifState.read.push(id);
  saveData(); renderNotifList(); updateNotifBadge();
}
function markAllNotifsRead(){
  const items = computeNotifications();
  DATA.notifState.read = items.map(n=>n.id);
  saveData(); renderNotifList(); updateNotifBadge(); toast('Todas marcadas como lidas');
}
function deleteNotif(id){
  if(!DATA.notifState.deleted) DATA.notifState.deleted=[];
  DATA.notifState.deleted.push(id);
  saveData(); renderNotifList(); updateNotifBadge();
}
function closeNotif(){ document.getElementById('notifPanel').classList.remove('open'); }
document.addEventListener('click', (e)=>{
  const p = document.getElementById('notifPanel'), b = document.getElementById('notifBtn');
  if(p.classList.contains('open') && !p.contains(e.target) && e.target!==b && !b.contains(e.target)) closeNotif();
});
function updateNotifBadge(){
  const items = computeNotifications();
  const unread = items.filter(n=> !(DATA.notifState.read||[]).includes(n.id)).length;
  const btn = document.getElementById('notifBtn');
  btn.innerHTML = icon('bell') + (unread? `<span class="badge">${unread>9?'9+':unread}</span>`:'');
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
  if(DATA.settings.animOn===false) document.body.classList.add('anim-off');
  buildNav();
  buildViews();
  refreshChrome();
  go('inicio');
  setInterval(updateNotifBadge, 30000);
}
init();
