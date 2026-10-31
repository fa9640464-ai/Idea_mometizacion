<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>BloxVirality IA</title>
<style>
:root{--bg:#020617;--card:#0f172a;--deep:#0b1222;--line:#1e293b;--text:#e2e8f0;--mute:#94a3b8;--or:#f97316;--ye:#eab308;--gr:#10b981;--bl:#60a5fa;--pk:#f472b6}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5;padding-bottom:env(safe-area-inset-bottom,0px)}
header{position:sticky;top:0;z-index:5;background:rgba(15,23,42,.9);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px}
.hd{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
h1{font-size:1.1rem;margin:0}
.sub{font-size:.72rem;color:var(--mute);margin:0}
nav{display:flex;gap:4px;background:var(--line);padding:4px;border-radius:12px}
nav button{border:0;background:transparent;color:var(--mute);padding:7px 12px;border-radius:9px;font-size:.82rem;cursor:pointer}
nav button.on{background:var(--or);color:#fff;font-weight:700}
main{max-width:1100px;margin:0 auto;padding:14px;display:grid;gap:14px}
@media(min-width:900px){#gen{grid-template-columns:5fr 7fr}}
#gen{display:grid;gap:14px;align-items:start}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px}
.card h2{font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.list{display:grid;gap:8px;max-height:270px;overflow-y:auto}
.opt{border:1px solid var(--line);background:var(--deep);border-radius:12px;padding:10px;cursor:pointer;display:flex;justify-content:space-between;gap:8px;align-items:center}
.opt.on{border-color:var(--or);background:rgba(249,115,22,.1)}
.opt.m.on{border-color:var(--ye);background:rgba(234,179,8,.1)}
.opt b{font-size:.85rem}.opt small{display:block;color:var(--mute);font-size:.72rem}
.pill{font-size:.7rem;border-radius:99px;padding:2px 8px;border:1px solid rgba(16,185,129,.3);color:var(--gr);background:rgba(16,185,129,.1);white-space:nowrap}
input{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:10px;color:var(--text);font:inherit;font-size:.9rem}
label{font-size:.78rem;color:var(--mute);display:block;margin-bottom:4px}
.btn{width:100%;border:0;border-radius:12px;padding:14px;font-weight:800;font-size:.9rem;cursor:pointer;color:#0b1222;margin-top:12px}
.b1{background:linear-gradient(90deg,#f97316,#eab308)}.b2{background:linear-gradient(90deg,#10b981,#06b6d4)}
.btn:disabled{opacity:.55}
.top{display:flex;gap:14px;flex-wrap:wrap;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:14px}
.ic{width:80px;height:80px;border-radius:16px;background:var(--bg);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.7rem;color:var(--or);text-align:center;flex:0 0 auto}
.ic img{width:100%;height:100%;object-fit:cover}
.score{background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:10px 16px;text-align:center}
.score b{font-size:1.7rem;color:var(--ye)}
.box{border-radius:12px;padding:12px;margin-bottom:12px;background:var(--bg);border:1px solid var(--line);font-size:.85rem}
.hook{background:rgba(249,115,22,.1);border-color:rgba(249,115,22,.35)}
.t{font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px;color:var(--mute)}
.g2{display:grid;gap:8px}@media(min-width:600px){.g2{grid-template-columns:1fr 1fr}.g3{grid-template-columns:repeat(3,1fr)}}
.g3{display:grid;gap:8px}
.step{display:flex;gap:10px;font-size:.8rem}
.step i{font-style:normal;background:rgba(96,165,250,.12);color:var(--bl);border-radius:8px;min-width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.75rem}
.price{color:var(--gr);font-weight:800;font-size:.72rem}
.mono{font-family:ui-monospace,Menlo,monospace;font-size:.78rem}
.tag{display:inline-block;background:rgba(234,179,8,.1);border:1px solid rgba(234,179,8,.25);color:#fcd34d;border-radius:6px;padding:2px 8px;margin:0 6px 6px 0}
.bar{height:8px;background:var(--line);border-radius:99px;overflow:hidden}.bar div{height:100%;background:linear-gradient(90deg,var(--or),var(--ye))}
.nm{display:grid;gap:12px}@media(min-width:700px){.nm{grid-template-columns:1fr 1fr}}@media(min-width:1000px){.nm{grid-template-columns:repeat(3,1fr)}}
.err{color:#fca5a5;font-size:.85rem}
.empty{text-align:center;color:var(--mute);padding:40px 16px;border:1px dashed var(--line);border-radius:16px}
.note{color:var(--mute);font-size:.75rem}
[hidden]{display:none!important}
</style>
</head>
<body>
<header><div class="hd">
<div><h1>🚀 BloxVirality IA</h1><p class="sub">Analizador de mercado y arquitecto de juegos de Roblox</p></div>
<nav><button id="t-gen" class="on">Generador viral</button><button id="t-nic">Nichos</button></nav>
</div></header>
<main>
<div id="gen">
<div style="display:grid;gap:14px">
<div class="card"><h2 style="color:var(--or)">1. Selecciona el nicho base</h2><div class="list" id="niches"></div></div>
<div class="card"><h2 style="color:var(--ye)">2. Inyecta mecánicas adictivas</h2><div class="list" id="mechs"></div></div>
<div class="card"><label for="extra">Tema o requisito extra (opcional)</label>
<input id="extra" placeholder="Ej.: dragones espaciales, memes de gatos">
<button class="btn b1" id="go">GENERAR CONCEPTO VIRAL</button></div>
</div>
<div id="right"><div class="empty">Configura el nicho y las mecánicas y toca “Generar concepto viral”.</div></div>
</div>
<div id="nic" hidden class="card">
<h2 style="color:var(--or)">Matriz de nichos de Roblox</h2>
<p class="note">Cifras orientativas y aproximadas, no son datos oficiales de Roblox. Verifica en rotrends.com o rolimons.com antes de decidir.</p>
<div class="nm" id="nicgrid"></div>
</div>
</main>
<script>
var NICHES=[
{id:"simulators",name:"Simulators / Idle",pop:95,ret:"Alta",mon:"Extrema",trend:"+15%",icon:"⚡"},
{id:"tycoon",name:"Tycoon / Business",pop:88,ret:"Media-Alta",mon:"Alta",trend:"+8%",icon:"🏢"},
{id:"anime",name:"Anime / Battlegrounds",pop:98,ret:"Muy Alta",mon:"Muy Alta",trend:"+22%",icon:"⚔️"},
{id:"horror",name:"Horror / Supervivencia asimétrica",pop:91,ret:"Media",mon:"Media-Alta",trend:"+12%",icon:"👁️"},
{id:"obby",name:"Obby / Tower / Física",pop:82,ret:"Baja-Media",mon:"Media",trend:"+5%",icon:"🏃"},
{id:"roleplay",name:"RP / Life Sim / Moda",pop:94,ret:"Extrema",mon:"Alta",trend:"+18%",icon:"👗"},
{id:"rng",name:"RNG / Suerte / Unboxing",pop:96,ret:"Alta",mon:"Extrema",trend:"+35%",icon:"🎲"}];
var MECHS=[
{n:"Dopamine Rebirth Loop",i:98,d:"Reinicio de stats por multiplicadores masivos y auras visuales."},
{n:"Trading & Hatching Pets",i:95,d:"Ecosistema gacha con probabilidades mínimas y comercio entre usuarios."},
{n:"Afk World / Time-reward",i:89,d:"Recompensas por tiempo acumulado sin desconectarse."},
{n:"Short-form Content Bait",i:97,d:"Momentos espectaculares de alto contraste pensados para TikTok/Shorts."},
{n:"UGC Item Drops",i:92,d:"Ítems de catálogo gratis para los primeros jugadores que cumplan metas."},
{n:"PVP Leaderboards & Guilds",i:86,d:"Competencia global pública que fomenta el gasto en pases."},
{n:"Lucky Block / Aura Roll",i:94,d:"Sonidos cinemáticos y auras espectaculares al obtener algo raro."}];
var niche=NICHES[0],sel={"Dopamine Rebirth Loop":1,"Trading & Hatching Pets":1,"Short-form Content Bait":1},game=null;
function $(id){return document.getElementById(id);}
function esc(s){var d=document.createElement("div");d.textContent=s==null?"":String(s);return d.innerHTML;}
function drawNiches(){$("niches").innerHTML=NICHES.map(function(n){return '<div class="opt'+(n.id===niche.id?' on':'')+'" data-id="'+n.id+'"><span><b>'+n.icon+' '+esc(n.name)+'</b><small>Retención: '+esc(n.ret)+' · Mon. '+esc(n.mon)+'</small></span><span class="pill">'+esc(n.trend)+'</span></div>';}).join("");
 document.querySelectorAll("#niches .opt").forEach(function(e){e.onclick=function(){niche=NICHES.filter(function(n){return n.id===e.dataset.id;})[0];drawNiches();};});}
function drawMechs(){$("mechs").innerHTML=MECHS.map(function(m,k){return '<div class="opt m'+(sel[m.n]?' on':'')+'" data-k="'+k+'"><span><b>'+(sel[m.n]?'✅ ':'⬜ ')+esc(m.n)+'</b><small>'+esc(m.d)+'</small></span><span class="pill" style="color:var(--ye);border-color:rgba(234,179,8,.3);background:rgba(234,179,8,.1)">'+m.i+'%</span></div>';}).join("");
 document.querySelectorAll("#mechs .opt").forEach(function(e){e.onclick=function(){var n=MECHS[+e.dataset.k].n;if(sel[n]){if(Object.keys(sel).length>1)delete sel[n];}else sel[n]=1;drawMechs();};});}
$("nicgrid").innerHTML=NICHES.map(function(n){return '<div class="box"><b>'+n.icon+' '+esc(n.name)+'</b> <span class="pill">'+esc(n.trend)+' mes</span><div class="note" style="margin:8px 0 4px">Popularidad estimada: '+n.pop+'%</div><div class="bar"><div style="width:'+n.pop+'%"></div></div><p class="note" style="margin:8px 0 0">Retención: <b>'+esc(n.ret)+'</b> · Monetización: <b>'+esc(n.mon)+'</b></p></div>';}).join("");
drawNiches();drawMechs();
function tab(w){$("gen").hidden=w!=="gen";$("nic").hidden=w!=="nic";$("t-gen").className=w==="gen"?"on":"";$("t-nic").className=w==="nic"?"on":"";}
$("t-gen").onclick=function(){tab("gen");};$("t-nic").onclick=function(){tab("nic");};
async function call(body){
  var code="";try{code=localStorage.getItem("bv_code")||"";}catch(e){}
  body.code=code;
  var r=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  var d=await r.json().catch(function(){return {error:"El servidor respondió con código "+r.status+" y no devolvió datos válidos. Revisa que api/gemini.js exista y que las variables estén en Vercel."};});
  return {status:r.status,d:d};
}
async function api(body){
  var x=await call(body);
  if(x.status===401){var c=window.prompt("Código de acceso");if(c){try{localStorage.setItem("bv_code",c);}catch(e){}x=await call(body);}}
  if(x.d.error)throw new Error(x.d.error);
  return x.d;
}
function parse(t){return JSON.parse(String(t).replace(/```json|```/g,"").trim());}
var SYS1='Eres el mayor experto en desarrollo de juegos virales de Roblox, analista de tendencias y psicología de la Generación Z y Alfa. Diseña un concepto de juego extremadamente adictivo, viral y monetizable mezclando el nicho y las mecánicas dadas. Responde EXCLUSIVAMENTE en ESPAÑOL y en JSON con este esquema: {"title":"nombre impactante","tagline":"slogan de 1 frase","viralScore":"número de 1 a 100","hook":"gancho de 3 segundos","gameplayLoop":["paso 1","paso 2","paso 3","paso 4"],"retentionStrategy":"cómo mantener jugando más de 40 min al día","monetizationPasses":[{"name":"","price":"X Robux","reason":""},{"name":"","price":"X Robux","reason":""},{"name":"","price":"X Robux","reason":""}],"tikTokStrategy":"video de 15 segundos para volverse viral","thumbnailPrompt":"prompt en inglés para la portada, vibrante, saturada y 3D estilo Roblox"}. Crea una propuesta original: copia mecánicas, nunca nombres ni assets de otros juegos.';
var SYS2='Eres Lead Developer de Roblox Studio con más de 10 años en Luau. Crea un Documento Técnico de Desarrollo listo para programadores, 100% en ESPAÑOL, en JSON: {"luauArchitecture":{"serverScripts":["script y función"],"localScripts":["script y función"],"moduleScripts":["módulo y función"]},"dataStoreSchema":["variable (tipo)"],"buildingAndMap":"diseño del mapa, zonas y estética","launchStrategy":"plan de lanzamiento paso a paso"}';
$("go").onclick=async function(){
  var b=$("go");b.disabled=true;b.textContent="Analizando…";game=null;
  $("right").innerHTML='<div class="empty">Generando tu concepto…</div>';
  try{
    var q="Nicho principal: "+niche.name+".\nMecánicas: "+Object.keys(sel).join(", ")+".\nNotas del desarrollador: "+($("extra").value||"sigue la tendencia actual de RNG, auras y coleccionables")+".\nMaximiza concurrentes y ventas de Robux. TODO EN ESPAÑOL.";
    var d=await api({kind:"json",system:SYS1,prompt:q});
    game=parse(d.text);drawGame();icon(game.thumbnailPrompt||("Roblox game icon "+game.title));
  }catch(e){$("right").innerHTML='<div class="card err">No se pudo generar: '+esc(e.message)+'</div>';}
  b.disabled=false;b.textContent="GENERAR CONCEPTO VIRAL";
};
async function icon(p){
  var box=$("icon");if(!box)return;box.textContent="Creando icono…";
  try{var d=await api({kind:"image",prompt:p+", 3d stylized roblox icon art, saturated neon colors, highly detailed"});
    box.innerHTML=d.image?'<img alt="Icono" src="data:image/png;base64,'+d.image+'">':"🖼️";}catch(e){box.textContent="🖼️";}
}
function drawGame(){
  var g=game;
  $("right").innerHTML='<div class="card"><div class="top"><div style="display:flex;gap:12px"><div class="ic" id="icon">🖼️</div><div><span class="pill" style="color:var(--or);border-color:rgba(249,115,22,.3);background:rgba(249,115,22,.1)">'+esc(niche.name)+'</span><h2 style="font-size:1.35rem;text-transform:none;letter-spacing:0;margin:4px 0 0;color:#fff">'+esc(g.title)+'</h2><p class="note" style="margin:2px 0 0;font-style:italic">“'+esc(g.tagline)+'”</p></div></div><div class="score"><b>🔥 '+esc(g.viralScore)+'</b><span class="note">/100</span><div class="note">Potencial viral</div></div></div>'
  +'<div class="box hook"><p class="t" style="color:var(--or)">Gancho de 3 segundos</p>'+esc(g.hook)+'</div>'
  +'<p class="t">Core loop</p><div class="g2" style="margin-bottom:12px">'+(g.gameplayLoop||[]).map(function(s,k){return '<div class="box step" style="margin:0"><i>'+(k+1)+'</i><span>'+esc(s)+'</span></div>';}).join("")+'</div>'
  +'<div class="box"><p class="t">Retención</p>'+esc(g.retentionStrategy)+'</div>'
  +'<p class="t">Gamepasses y monetización</p><div class="g3" style="margin-bottom:12px">'+(g.monetizationPasses||[]).map(function(m){return '<div class="box" style="margin:0"><b>'+esc(m.name)+'</b><div class="price">'+esc(m.price)+'</div><div class="note">'+esc(m.reason)+'</div></div>';}).join("")+'</div>'
  +'<div class="box"><p class="t" style="color:var(--pk)">Estrategia TikTok / Shorts</p>'+esc(g.tikTokStrategy)+'</div>'
  +'<button class="btn b2" id="gdd">¡ME INTERESA! Generar documento técnico</button></div><div id="gddout"></div>';
  $("gdd").onclick=makeGdd;
}
function list(a){return '<ul style="margin:0;padding-left:18px">'+(a||[]).map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>';}
async function makeGdd(){
  var b=$("gdd");b.disabled=true;b.textContent="Redactando documento…";
  try{
    var q="Título: "+game.title+"\nNicho: "+niche.name+"\nMecánicas: "+Object.keys(sel).join(", ")+"\nGamepasses: "+JSON.stringify(game.monetizationPasses)+"\nGenera la guía técnica paso a paso para Roblox Studio, 100% en español.";
    var d=parse((await api({kind:"json",system:SYS2,prompt:q})).text),a=d.luauArchitecture||{};
    $("gddout").innerHTML='<div class="card" style="border-color:rgba(16,185,129,.5);margin-top:14px"><h2 style="color:var(--gr);font-size:1rem">Documento técnico (Roblox Studio)</h2>'
    +'<div class="box mono"><p class="t" style="color:var(--gr)">ServerScriptService</p>'+list(a.serverScripts)+'</div>'
    +'<div class="box mono"><p class="t" style="color:#22d3ee">StarterPlayerScripts</p>'+list(a.localScripts)+'</div>'
    +'<div class="box mono"><p class="t" style="color:var(--ye)">ReplicatedStorage (módulos)</p>'+list(a.moduleScripts)+'</div>'
    +'<p class="t">Datos a guardar (DataStore)</p><div class="box mono">'+(d.dataStoreSchema||[]).map(function(v){return '<span class="tag">'+esc(v)+'</span>';}).join("")+'</div>'
    +'<p class="t">Mapa y modelado 3D</p><div class="box">'+esc(d.buildingAndMap)+'</div>'
    +'<p class="t">Lanzamiento y publicidad</p><div class="box">'+esc(d.launchStrategy)+'</div></div>';
  }catch(e){$("gddout").innerHTML='<div class="card err" style="margin-top:14px">No se pudo generar: '+esc(e.message)+'</div>';}
  b.disabled=false;b.textContent="¡ME INTERESA! Generar documento técnico";
}
</script>
</body>
</html>
