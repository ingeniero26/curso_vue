Vue.component('productos', {
    template://html

        `
    <div>
    <h1 class="text-center">Registro de Productos</h1>
     <div class="row">
    
        
        <div class="col-lg-6">
             <label for="name"><b>Descripción</b>    </label>
             <input class="form-control" type="text">
        </div>
        <div class="col-lg-6">

             <label for="name"><b>Còdigo</b>    </label>
             <input class="form-control" type="text">
        </div>
        <div class="col-lg-6">
             <label for=""> <b>Categorias</b></label>
             <select class="form-control" aria-label="Seleccione un tipo">
                 <option selected>Seleccione una Categoria</option>
                 <option value="1">Tecnologia</option>
                 <option value="2">Papeleria</option>
                 <option value="3">Libros</option>
             </select>
        </div>
        <div class="col-lg-6">
             <label for=""> <b>Medidas</b></label>
            <select class="form-control" aria-label="Seleccione una medida">
                 <option selected>Seleccione una Medida</option>
                 <option value="1">UNIDAD</option>
                  <option value="2">KILOGRAMO</option>
                 <option value="3">GRAMO</option>
           </select>
        </div>

        <div class="col-lg-6">
            <label for="precio"><b>Precio Compra</b></label>
            <input type="number" class="form-control">
        </div>
        <div class="col-lg-6">
            <label for="precio"><b>Precio Venta</b></label>
            <input type="number" class="form-control">
        </div>
        <div class="col-lg-6">
            <label for="precio"><b>Stock Inicial</b></label>
            <input type="number" class="form-control">
        </div>
    </div>
    </div>
    
    `,
    data() {
        return {

        }
    },
})