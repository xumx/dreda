// click listener
$('.content.icon').click(function(){
    $('.ui.sidebar').sidebar('toggle');
  });

// modals
function toggleModal(){
  $('.ui.modal')
    .modal('show')
  ;
}

// add loaders

function plot(){
  setTimeout(function(){
    plotData();
  $('#loader').removeClass('ui active dimmer');
  }, 1);
  $('#loader').addClass('ui active dimmer');
}

function togglePlot(){
  setTimeout(function(){
    plot();
  }, 1);
	$('.ui.sidebar').sidebar('toggle')
}