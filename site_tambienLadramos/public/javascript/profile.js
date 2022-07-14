const mediaQueryList = window.matchMedia('(min-width: 600px)');

if(mediaQueryList.matches) {
  console.log('Window is max 600px');
}
else {
  console.log('Window is over 600px');
}