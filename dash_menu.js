// 좌측 메뉴 토글 스크립트
const toggleBtn = document.getElementById('toggle-menu');
const submenu = document.getElementById('submenu');
const arrow = document.getElementById('arrow');

toggleBtn.addEventListener('click', () => {
  submenu.classList.toggle('open');
  arrow.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
});

// 상단 컨트롤 패널: 초기화 버튼 동작 예시
document.querySelector('.reset-btn').addEventListener('click', function() {
  document.getElementById('detectSwitch').checked = false;
  document.querySelectorAll('.control-group input[type="checkbox"]').forEach((el) => el.checked = true);
});