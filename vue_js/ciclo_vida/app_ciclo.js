var app = new Vue({
    el:'#app',
    data:{
        saludo :'CICLO DE VIDA DE UNA INSTANCIA DE VUE'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        // al crear los metodos, observadores  y eventos, pero aun no accede al DOM
        //aun no se puede acceder al 'el'
        console.log('created');
    },
    beforeMount() {
        // se ejecuta antes de inserdar el DOM
        console.log('beforeMount');
    },
    mounted() {
        // se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // se ejecuta al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        // al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        // antes  de destruir la instancia
        console.log('beforeDestroy');

    },
    destroyed() {
        // se destruye todo la instancia
        console.log('destroyed');
    },

    methods: {
        destruir() {
            this.$destroy();
        }
    },
});