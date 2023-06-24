function irPara(url) {
    document.body.classList.add('animacao-surgir');
    setTimeout(function() {
      window.location.href = url;
    }, 200); 
  }