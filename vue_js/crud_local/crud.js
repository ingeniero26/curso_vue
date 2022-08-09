var app = new Vue({
    el:'#app',
    data:{
        titulo:'TAREAS  GYM, VUE',
        tareas:[],
        nuevaTarea:''
    },
    methods: {
        addTarea:function() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            })
          //  console.log(this.tareas);
            this.nuevaTarea = '';
            localStorage.setItem('gym-local',JSON.stringify(this.tareas));
        }, 
        editTarea:function(index) {
            this.tareas[index].estado = true;
            localStorage.setItem('gym-local',JSON.stringify(this.tareas));
        },
        deleteTarea:function(index) {
            this.tareas.splice(index,1);
            localStorage.setItem('gym-local',JSON.stringify(this.tareas));
        }
    },
    // se ejecuta fuera de los metodos,  esto para almacenar  localmente estos datos
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
      //  console.log(datosDB);
      if(datosDB === null) {
        this.tareas =[];
      } else {
        this.tareas = datosDB;
      }
    },

});