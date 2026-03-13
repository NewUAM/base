(function () {
  const blocksContainer = document.getElementById('hub-blocks');
  if (!blocksContainer) return;

  const mobileQuery = window.matchMedia('(max-width: 320px)');

  function applyMinWidthFromHeight() {
    if (mobileQuery.matches) {
      blocksContainer.style.removeProperty('grid-template-columns');
      return;
    }

    const firstBlock = blocksContainer.querySelector('.block');
    if (!firstBlock) return;

    const blockHeight = firstBlock.getBoundingClientRect().height;

    const cs = getComputedStyle(blocksContainer);
const gap = parseFloat(cs.gap || cs.columnGap || '20') || 20;
const cw = blocksContainer.clientWidth;

let possible = Math.floor((cw + gap) / (blockHeight + gap));
if (!Number.isFinite(possible) || possible < 1) possible = 1;
const cols = Math.min(3, possible);

blocksContainer.style.gridTemplateColumns = `repeat(${cols}, minmax(${blockHeight}px, 1fr))`;

  }

  applyMinWidthFromHeight();

  window.addEventListener('resize', applyMinWidthFromHeight);

  mobileQuery.addEventListener('change', applyMinWidthFromHeight);

  const ro = new ResizeObserver(applyMinWidthFromHeight);
  ro.observe(blocksContainer);
})();