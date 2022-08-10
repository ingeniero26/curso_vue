Vue.component('saludo', {
    template://html
    `
    <div>
         <h1>{{saludo}}</h1>
          <h3>Otro elemento</h3>
          <button class="btn btn-primary">Agregar</button>
          <br>
    </div>
    `,
    data() {
        return {
            saludo :'Componentes de  vue'
        }
    }
});