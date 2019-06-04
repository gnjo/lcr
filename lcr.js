;(function(root){
 let fn={}
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 fn.q=(s,doc=document)=>{return doc.querySelector(s)}
 fn.deep=d=>JSON.parse(JSON.stringify(d));
 fn.clone=fn.deep;
 fn.fr=function(html=''){
  let flg = (typeof 'html' === 'string')
  ,e= (flg)?document.createElement('table'): html||document.createElement('table')
  ,fr=document.createDocumentFragment()
  ;
  if(flg) e.innerHTML= html||'';
  ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
  return fr;
 }
 fn.empty=(el)=>{
  while( el.firstChild ){el.removeChild( el.firstChild )}
  return el
 }
 ;
 let is={}
 is.element=function(o){return !!(o && o.nodeType === 1)}
 is.string = function(obj){return toString.call(obj) === '[object String]'} 
 ;
 function sizer(){
  let w=document.documentElement.getBoundingClientRect()
  ,r=fn.clone(document.body.getBoundingClientRect())
  Object.assign(document.body.dataset,r)
  ;
  let left=fn.q('#left')
  ,right=fn.q('#right')
  ,alive=(left&&right)
  ;
  if(!alive)return
  ;
  right.style.width=(w.width - r.right)+'px'
  right.style.left=r.right+'px'
  left.style.width=r.left+'px'
 }
 ;
 function entry(l,c,r){
  var o={}
  if(l&&c&&r){
   document.body.style.marginLeft=l
   document.body.style.width=c
   document.body.style.marginRight=r
  }else{
   document.body.style.width=l//old version   
  }
  let isload=document.body.dataset.lcr
  if(isload){
   o.c=fn.q('#center>.wrap')
   o.l=fn.q('#left>.wrap')
   o.r=fn.q('#right>.wrap')
   return o;
  }
  ;
  document.body.dataset.lcr=true;
  o.c=fn.i3(`<div id="center"><div class="wrap"></div></div>`)
  o.l=fn.i3(`<div id="left"><div class="wrap"></div></div>`)
  o.r=fn.i3(`<div id="right"><div class="wrap"></div></div>`)
  ;[o.c,o.l,o.r].map(el=>document.body.appendChild(el))
  o.c=fn.q('.wrap',o.c)
  o.l=fn.q('.wrap',o.l)
  o.r=fn.q('.wrap',o.r)
  document.body.addEventListener('resize',sizer)
  sizer()
  ;
  o.sethtml=(html,target)=>{
   let el=is.element(target)?target:void 0
   if(target==='l'||target==='left') el=o.l
   if(target==='r'||target==='right') el=o.r
   if(target==='c'||target==='center') el=o.c
   if((!el)) el=document.querySelector(target)
   if(!el)return console.log('target empty=>sethtml')
   fn.empty(el)
   return el.appendChild(fn.fr(html))
  }
  return o;
 }
 root.lcr=entry
 /*usage
 let obj=lcr('54rem');
 let obj=lcr('auto','54rem','15rem');
 obj.l.style.background="blue"
 obj.c.style.background='white'
 obj.r.style.background='orange'
 obj.sethtml('<div style="background:orange">xyz</div>','c')
 */
})(this);
