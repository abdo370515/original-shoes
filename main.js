const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
const data = [
    "Nike",
    "Lacoste",

];

document.getElementById('searchInput').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = data.filter(item => item.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    if (results.length > 0) {
        results.forEach(result => {
            let div = document.createElement('div');
            div.textContent = result;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
