(function(){
  const openBtn = document.querySelector('.header-stats-right');
  const overlay = document.getElementById('nuam-modal');
  const closeBtn = document.getElementById('nuam-modal-close');

  if(!openBtn || !overlay || !closeBtn) return;

  function openModal(){ overlay.hidden = false; }
  function closeModal(){ overlay.hidden = true; }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e)=>{
    if(e.target === overlay) closeModal();
  });

  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !overlay.hidden) closeModal();
  });
})();