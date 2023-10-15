function toggleChapterList() {
    var chaptersNav = document.querySelector('.chapters-navigation');
    chaptersNav.style.display = (chaptersNav.style.display === 'block' || chaptersNav.style.display === '') ? 'none' : 'block';
  }