(function(){
  var t=document.querySelector('.navtoggle'),n=document.getElementById('mainnav');
  if(!t||!n)return;
  t.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    t.setAttribute('aria-expanded',o?'true':'false');
    t.setAttribute('aria-label',o?'Close menu':'Open menu');
    t.innerHTML=o?'&times;':'&#9776;';
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&n.classList.contains('open')){t.click();t.focus();}
  });
})();
