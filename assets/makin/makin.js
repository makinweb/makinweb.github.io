function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var makinstyle = document.createElement('link');
makinstyle.setAttribute('rel','stylesheet');
makinstyle.setAttribute('href', url_folder+ 'assets/makin/makin.css');
document.querySelector('head').appendChild(makinstyle);

ready(function(){
    
    //ganti logo
    document.querySelector('.sl-r-banner__brand img').remove();
    document.querySelector('.sl-r-banner__brand a').innerHTML = '<h1>SSSTRAIGHT</h1><p>SCSS/SASS for straight men.</p><h6>disclaimer: this is not initiated by Brendan Eich</h6>'
    document.querySelector('.sl-r-banner__brand a').setAttribute('href', url_folder+'sass.html');
    
    
});