const iframe = document.getElementById('video-iframe');
  const menuContainer = document.getElementById('menu-container');

  // Simulating video end with a setTimeout (replace with real event handling for your video)
  setTimeout(function() {
    showMenu();
  }, 5000); // Adjust the timeout duration as needed

  function showMenu() {
    menuContainer.style.display = 'flex';
  }

  function redirectToPage(page) {
    window.location.href = page;
  }