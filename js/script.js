window.addEventListener('load', function () {
  this.document.getElementById('loading').setAttribute('style', 'display: none');
  this.document.getElementById('container').removeAttribute('style');
  setTimeout(function () {
    document.getElementsByClassName('name-card')[0].classList.add('name-card--transition');
    document.getElementsByClassName('navigation')[0].classList.add('navigation--transition');
  }, 1000)
  setTimeout(function () {
    document.getElementById('tagabout').setAttribute('id', 'about');
    document.getElementById('about').removeAttribute('style');
  }, 3180)
})

document.addEventListener("scroll", function () {
  window.scrollY > 655 ?
    document.getElementsByClassName("navbar")[0].classList.add("navbar--transition") :
    document.getElementsByClassName("navbar")[0].classList.remove("navbar--transition")
});
