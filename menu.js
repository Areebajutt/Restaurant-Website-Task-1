document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('menu-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const foodCards = document.querySelectorAll('.menu-grid .card');

  // Filter functionality
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        filterCards(filterValue, searchInput ? searchInput.value : '');
      });
    });
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
      filterCards(activeFilter, searchTerm);
    });
  }

  function filterCards(category, searchTerm) {
    foodCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardName = card.querySelector('.card-title').textContent.toLowerCase();
      
      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesSearch = cardName.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        // Add a tiny animation when showing
        card.style.animation = 'fadeIn 0.5s ease-in';
      } else {
        card.style.display = 'none';
      }
    });
  }
});
