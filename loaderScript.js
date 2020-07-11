var loadTime;

function loadContent() {
  loadTime = setTimeout(showContent, 1000);
}

function showContent() {
  document.getElementById('content').style.display = 'flex';
}
