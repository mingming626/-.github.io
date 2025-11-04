
document.addEventListener('DOMContentLoaded', ()=>{
  const hearts = document.querySelector('.hearts');
  if(hearts){
    setInterval(()=>{
      const h = document.createElement('div');
      h.className = 'heart';
      h.style.left = Math.random()*100 + '%';
      h.style.animationDuration = (4 + Math.random()*3) + 's';
      h.style.opacity = 0.6 + Math.random()*0.4;
      hearts.appendChild(h);
      setTimeout(()=>h.remove(), 8000);
    }, 600);
  }
  const bgm = document.getElementById('bgm');
  const btn = document.getElementById('playMusic');
  if(bgm && btn){
    btn.addEventListener('click', ()=>{
      if(bgm.paused){ bgm.play(); btn.textContent='⏸︎ 暂停音乐'; }
      else { bgm.pause(); btn.textContent='▶︎ 播放/暂停 背景音乐（许嵩《素颜》）'; }
    });
  }
});
