// Avoid `console` errors in browsers that lack a console.
(function () {
  let method;
  const noop = function () {
  };
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  let length = methods.length;
  const console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
const navToggle = document.querySelector('#side-menu')
const navLink = document.querySelectorAll('.nav-item');

for (let i = 0; i < navLink.length; ++i) {
  navLink[i].addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-item')) {
      navToggle.checked = false;
    }
  });
}
