var app = new Vue({
    el:'#app',
    data:{
        titulo:'REGISTRO DE CLIENTES',
        clientes:[],
        nombre:'',
        apellidos:'',
        documento:'',
        direccion:'',
        tipoDoc:'',
        nuevoCliente:'',
        nuevoApellidos:'',
        nuevoDoc:'',
        nuevaDir:'',
        nuevoTipoDoc:''
        

    },
    methods: {
        AgregarCliente() {
            this.clientes.push({
                nombre:this.nuevoCliente,
                 apellidos:this.nuevoApellidos,
                 tipoDoc:this.nuevoTipoDoc,
                 documento:this.nuevoDoc,
                 direccion:this.nuevaDir,
                 estado:false

            }),
            this.nuevoCliente ='';
            this.nuevoApellidos='';
            this.nuevoDoc='';
            this.nuevaDir='';
            localStorage.setItem('cliente-local',JSON.stringify(this.clientes));
        },
        editEstado: function(index) {
            this.clientes[index].estado = true;
            localStorage.setItem('cliente-local',JSON.stringify(this.clientes));
        },
        deleteCliente:function(index) {
            this.clientes.splice(index,1);
            localStorage.setItem('cliente-local',JSON.stringify(this.clientes));
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('cliente-local'));
      //  console.log(datosDB);
      if(datosDB === null) {
        this.clientes =[];
      } else {
        this.clientes = datosDB;
      }
    },
});