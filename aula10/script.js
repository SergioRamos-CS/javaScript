function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerText = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = "img/manha.png";
        img.alt = "Imagem da manhã";
        document.body.style.background = "#89cdfa";
  } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = "img/tarde.png";
        img.alt = "Imagem da tarde";
        document.body.style.background = "#f7ca83ff";
  } else {
        // Boa noite!
        img.src = "img/noite.png";
        img.alt = "Imagem da noite";
        document.body.style.background = "#00223a";
  }
}
