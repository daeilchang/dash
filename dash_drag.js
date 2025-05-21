// 모든 .draggable 패널에 대해 드래그 기능 적용(크기 고정, transform 미사용)
document.querySelectorAll('.draggable').forEach(el => {
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener('mousedown', function(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;
    isDragging = true;

    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    el.style.zIndex = 999;
    document.body.style.userSelect = 'none';
    // 드래그 시작시 크기를 픽셀로 고정
    el.style.width = rect.width + "px";
    el.style.height = rect.height + "px";
  });

  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    const parentRect = el.parentElement.getBoundingClientRect();
    el.style.left = (e.clientX - parentRect.left - offsetX) + 'px';
    el.style.top = (e.clientY - parentRect.top - offsetY) + 'px';
  });

  window.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      el.style.zIndex = 10;
      document.body.style.userSelect = '';
    }
  });
});