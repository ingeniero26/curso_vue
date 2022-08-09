var app = new Vue({
    el:'#app',
    data:{
        contador:0
    },
    computed:{
        color() {
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        }
    }
});