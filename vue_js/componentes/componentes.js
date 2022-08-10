Vue.component('post',{
    props:['post'],
    template: ` <article class="post" >
            <h2>{{ post.titulo}}</h2>
            <p>{{post.contenido}}</p>
            <a name="" id="" class="btn btn-primary" href="#" role="button">Leer Más</a>
            </article>`,
});


var app = new Vue({
    
    el:'#app',
    data:{
        posts:[
            {
                titulo:'Esto es un titulo de post',
                contenido:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
              
            },
            {
                titulo:'Esto es segundo titulo de post',
                contenido:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
            },
            {
                titulo:'Esto es tercer titulo de post',
                contenido:'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
            }
        ]
    }
});