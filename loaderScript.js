var loadTime;

function loadContent() {
  loadTime = setTimeout(showContent, 400);
}

function showContent() {
  document.getElementById('content').style.display = 'flex';
}
