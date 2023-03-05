window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

document.getElementById('toTop').addEventListener('click', function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});