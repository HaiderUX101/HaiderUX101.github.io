document.addEventListener('DOMContentLoaded', () => {
  console.log('Interactive CV website loaded');
  
  // Example: Toggle detailed view in timeline (you can enhance this further)
  const timelineCards = document.querySelectorAll('.timeline-card');
  timelineCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
      // Optionally load more details or animate expansion
    });
  });
});
