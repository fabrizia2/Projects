// Fetch and insert the header
fetch('header.html')
.then(response => response.text())
.then(html => document.getElementById('header-placeholder').innerHTML = html);

// Fetch and insert the footer
fetch('footer.html')
.then(response => response.text())
.then(html => document.getElementById('footer-placeholder').innerHTML = html);