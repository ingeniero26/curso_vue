Vue.component('mimenu',{
    template: //html
    `
        <div>
            <a href="javaScript:void(0)" @click="$emit('change', 'c')" class="btn btn-primary">Clientes</a>
            <a href="javaScript:void(0)" @click="$emit('change', 'p')" class="btn btn-primary">Proveedores</a>
            <a href="javaScript:void(0)" @click="$emit('change', 'pr')" class="btn btn-primary">Productos</a>
            <a href="javaScript:void(0)" @click="$emit('change', 'vt')" class="btn btn-primary">Ventas</a>
            <a href="#">Compras</a>
        </div>
    `,
    data() {
        return {
            
        }
    },
})