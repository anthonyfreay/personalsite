var loadTime;

function loadPage() {
  loadTime = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}
