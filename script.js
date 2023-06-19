

keyword = "palavra chave";



  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  var meuElementoH1 = document.getElementById("meuH1");
  
  if (isMobileDevice()) {
    console.log("Dispositivo móvel detectado.");
    meuElementoH1.textContent = "Dispositivo móvel detectado.";
    tipoWhats = "api";
  } else {
    console.log("Computador detectado.");
    meuElementoH1.textContent = "Computador detectado.";
    tipoWhats = "web";

  }

  function bntWhatsapp() {
    window.location.href = "https://" + tipoWhats + ".whatsapp.com/send?phone=5511972855782?text=Ol%C3%A1%2C+gostaria+de+saber+sobre *" + keyword + "*";
  }


