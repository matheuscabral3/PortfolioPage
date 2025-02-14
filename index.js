$(document).ready(function () {
  console.log(
    "Copyright \u00A9 2025 - Matheus M. Todos os direitos reservados."
  );

  // Animação do texto.
  changeText();

  // Animação
  $(window).on("scroll", function () {
    setAnimation();
  });

  $("#btnEntrarContato").click(function (e) {
    var nrWhatsApp = "5511983084158"; // Exemplo: (+55 11 99999-9999)
    var msg = "Olá, gostaria de saber mais informações.";
    var link =
      "https://wa.me/" + nrWhatsApp + "?text=" + encodeURIComponent(msg);

    window.open(link, "_blank");
  });
});

// Fazer as animações durante 3 vezes. Após isso, manter o #text2 fixo.
function changeText() {
  var showCount = 0;

  var interval = setInterval(function () {
    if ($("#text1").is(":visible")) {
      $("#text1").fadeOut(500);
      $("#text2").fadeIn(500);

      showCount++;
    } else {
      $("#text2").fadeOut(500);
      $("#text1").fadeIn(500);
    }

    if (showCount >= 3) {
      clearInterval(interval);
      $("#text1").fadeOut(500);
      $("#text2").fadeIn(500);
    }
  }, 5000);
}

function setAnimation() {
  // var div_habilidadesDesc = $(".habilidades-descricao").offset().top;
  var div_habilidadesLista = $(".habilidades-lista").offset().top;
  var positionScroll = $(window).scrollTop();

  //   if (positionScroll + $(window).height() >= div_habilidadesDesc) {
  //     $(".habilidades-descricao").addClass("animate");
  //     $(".habilidades-descricao").addClass("fadeInLeft");
  //     $(".habilidades-descricao").addClass("three");
  //   }

  if (positionScroll + $(window).height() >= div_habilidadesLista) {
    $(".habilidades-lista").addClass("animate");
    $(".habilidades-lista").addClass("fadeInRight");
    $(".habilidades-lista").addClass("four");
  }
}
