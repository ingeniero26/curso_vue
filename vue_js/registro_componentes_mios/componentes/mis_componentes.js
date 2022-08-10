Vue.component('cliente',{
    template://html
    `
        <div>
        <h1 class="text-center">Registro de clientes</h1>
        
            <label for="name"><b>Nombre</b></label>
            <input class="form-control" type="text">
            <label for="name"><b>Apellidos</b></label>
            <input class="form-control" type="text">
          
            <div class="col-lg-12">
            <label for=""><b>Tipo Documento</b></label>
            <select class="form-control" aria-label="Seleccione un tipo">
                <option selected>Seleccione un tipo</option>
                <option value="Cedula">Cedula</option>
                <option value="TI">TI</option>
                <option value="PASAPORTE">PASAPORTE</option>
            </select>
            </div>
            <label for="name"><b>Documento</b></label>
            <input class="form-control" type="number">

            <label for="name"><b>Dirección</b></label>
            <input class="form-control" type="text">

            <label for="name"><b>Telefono</b></label>
            <input class="form-control" type="number"> <br>

            <button class="btn btn-primary">Guardar</button>

        </div>
        </div>
    `, 
    data() {
        return {
            
        }
    },
})















Vue.component('proveedor',{
    template://html
    `
        <div>
        <h1 class="text-center">Registro de proveedores</h1>
            <label for="name">Nombre</label>
            <input class="form-control" type="text">
            <label for="name">Apellidos</label>
            <input class="form-control" type="text">
          
            <div class="col-lg-12">
            <label for="">Tipo Documento</label>
            <select class="form-control" aria-label="Seleccione un tipo">
                <option selected>Seleccione un tipo</option>
                <option value="Cedula">Cedula</option>
                <option value="TI">TI</option>
                <option value="PASAPORTE">PASAPORTE</option>
            </select>
            </div>
            <label for="name">Documento</label>
            <input class="form-control" type="number">

            <label for="name">Dirección</label>
            <input class="form-control" type="text">

            <label for="name">Telefono</label>
            <input class="form-control" type="number"> <br>

            <button class="btn btn-primary">Guardar</button>

        </div>
        </div>
    `, 
    data() {
        return {
            
        }
    },
})



Vue.component('ventas',{
    template://html
    `
        <div>
            <h1 class="text-center">Registro de VENTAS</h1>
            <div class="col-lg-12">
            <label for=""> <b>Clientes</b></label>
            <select class="form-control" aria-label="Seleccione un tipo">
                <option selected>Seleccione un cliente</option>
                <option value="1">Jerson Batista</option>
                <option value="2">Luis Tapia</option>
                <option value="3">Jose Tapia</option>
            </select>
            </div> <br>
            <div>
                  <label for="fecha">Fecha Venta</label>
                  <input type="date">
            </div>
          
        </div>
    `, 
    data() {
        return {
            
        }
    },
})