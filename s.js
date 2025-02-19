const scrollContainer = document.querySelector('.scroll-container');
const scrollItems = document.querySelectorAll('.scroll-item');

function updateActiveItem() {
  let center = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;

  scrollItems.forEach(item => {
    let itemCenter = item.offsetLeft + item.offsetWidth / 2;
    let distance = Math.abs(center - itemCenter);

    // Adjust size and z-index based on distance
    let scale = Math.max(0.8, 1 - distance / 300);
    let zIndex = Math.floor(100 - distance / 10);

    item.style.transform = `scale(${scale})`;
    item.style.zIndex = zIndex;
    item.classList.remove('active');
  });

  // Find the center item
  let closestItem = Array.from(scrollItems).reduce((closest, item) => {
    let itemCenter = item.offsetLeft + item.offsetWidth / 2;
    let distance = Math.abs(center - itemCenter);
    return distance < Math.abs(center - (closest.offsetLeft + closest.offsetWidth / 2)) ? item : closest;
  });

  closestItem.classList.add('active');
}

// Trigger on scroll and load
scrollContainer.addEventListener('scroll', updateActiveItem);
window.addEventListener('load', () => {
  scrollContainer.scrollLeft = scrollItems[4].offsetLeft - scrollContainer.offsetWidth / 2 + scrollItems[4].offsetWidth / 2;
  updateActiveItem();
});
