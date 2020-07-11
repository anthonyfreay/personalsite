var loadTime;

function loadContent() {
  loadTime = setTimeout(showContent, 600);
}

function showContent() {
  document.getElementById('content').style.display = 'flex';
}
