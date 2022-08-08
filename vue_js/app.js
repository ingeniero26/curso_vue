    var app = new Vue({
        el:'#app',
        data:{
            frutas:[
                {nombre:'Pera', cantidad:10},
                {nombre:'Manzana', cantidad:0},
                {nombre:'Platano', cantidad:11}
            ],
            nuevaFruta:'',
            precio:'',
            total: 0

        },
        methods: {
            addFrut: function() {
              this.frutas.push({
                nombre : this.nuevaFruta
              
                
              });
              this.nuevaFruta = '';
              this.nuevaCantidad = '';
            }
        },
        computed: {
            sumarFrutas() {
                this.total =0;
                for(fruta of this.frutas) {
                    this.total = this.total + fruta.cantidad
                }
                return this.total;
            }
        }
    });