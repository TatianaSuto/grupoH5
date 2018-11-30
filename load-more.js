jQuery(document).ready(function($){
  $("#load-more").click(function(){
    loadmore();
  });
});

function loadmore()
{
  $("#carregando").css("display", "block");

  var more = _more;
  var action = document.getElementById("_action").value;
  var id = document.getElementById("_id").value;

  $.ajax({
    type: 'post',
    url: homeURL+'/atos-heroicos/',
    data: { more:more, action:action, id:id},

    success: function (response) {
      var content = document.getElementById("atos");
      content.innerHTML = content.innerHTML+response;

      $("#carregando").css("display", "none");

      //Inicializa o Tooltip do bootstrap depois de pegar o conteúdo gerado
      $('[data-toggle="tooltip"]').tooltip();

      // We increase the value by 2 because we limit the results by
      _more = Number(more)+10;

      $('form#compartilhar-doacao').submit(function(e) {
        e.preventDefault();
      });
    }
  });
}

var _more = 0;