function loadPartial(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadPartial('site-header', 'assets/partials/header.html');
    loadPartial('site-footer', 'assets/partials/footer.html');
  });