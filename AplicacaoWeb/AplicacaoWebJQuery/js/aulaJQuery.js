$('#btnAlert').click(function () { alert('Boas férias!'); }); //EXIBE UM ALERT AO CLICAR

//$('.tags').removeClass('tags'); //REMOVE O ESTILDO QUE FOI APLICADO A CADA ELEMENTO HTML

$(document).ready(function () {
   $('#btnOcultar').click(function () {
      $('div').fadeOut(1000);
   });

   $('#btnExibir').click(function () {
       $('div').fadeIn(1000);
   });
});


