document.addEventListener('DOMContentLoaded', () => {
  console.log('Interactive CV website loaded');
  
  // Example: Toggle detailed view in timeline (you can enhance this further)
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
      // Optionally load more details or animate expansion
    });
  });
});
