let btn = document.querySelector('#submit')
btn.addEventListener('click', () =>{
  Apod()
})

function Apod() {
  const data = $('#data').val();
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=b2e4yQbTO2NueoODTlnAaA3tb7mui6cQpTpSLI6I&date=${data}`,
    success: function(data){
      Datas(data);
    }
  })
}

function Datas(saida){
  const foto = $(".foto");
  if(saida.media_type == 'image') {
    foto.html(`<img class='img' src="${saida.url}"/>`)
  } else {
    foto.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
    }
}