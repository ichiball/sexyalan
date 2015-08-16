$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['one', 'two', 'three', 'four', 'five', 'six'],
    controlArrows: true,
    scrollingSpeed:1000,
    slidesNavigation: true,
    lockAnchors: false,
    loopHorizontal: true,
    continuousVertical: false,
  });
});
