function scrollToBottom() {
    // Scroll to the anchor with the ID "bottom"
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }