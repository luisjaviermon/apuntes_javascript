const app = new Vue({
  el: '#app', //indica a que elemento al que esta asociado
  data:{
    mensaje: 'hola mundo'//es la informacion que colocara al renderizar
  }
})

const app2 = new Vue({
  el: '#app-2',
  data:{
    texto_ayuda: 'cambiando el texto de ayuda'
  }
})

const var_texto = new Vue({
  el: '#actualiza-texto',
  data:{
    texto_nuevo: ''
  }
})