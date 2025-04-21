$(document).ready(function () {
  //Progress Bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 60);

      circle.setText(value);
    },
  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 254);

      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 32);

      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAF9",
    strokeWidth: 8,
    duration: 2200,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 5243);

      circle.setText(value);
    },
  });

  //iniciando o loader quando o usuario chega no elemento
  let dataAreaOffset = $("#data-area").offset();
  let stop = 0; // stop serve para a animação não carregar mais que uma vez

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    //parametro de evento
    console.log("dataAreaOffset.top:  ", dataAreaOffset.top);
    let triggerPoint = dataAreaOffset.top - dataAreaOffset.top * 0.45;

    console.log("Scroll:", $(window).scrollTop(), "Trigger:", triggerPoint);

    if (scroll > triggerPoint && stop == 0) {
      //-500px = na parte da pag que ta esse scroll
      //'disparando = pra começar
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
      stop = 1;
    }
  });

  //Parallax
  setTimeout(function () {
    //pra carregar as imagens da pagina primeiro (Evita bugs)
    $("#data-area").parallax({ imageSrc: "/img/cidadeparallax.png" });
  }, 250); //250 milesimos
});
