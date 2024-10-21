$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
      event.preventDefault(); 
  
      var tarefa = $('#tarefa').val();
      $('#tarefa').val('');
  
      $('#lista-tarefas').append('<li>' + tarefa + '</li>');
    });
  
    $('#lista-tarefas').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  