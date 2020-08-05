$.ajax({
    url: 'https://apipetshop.herokuapp.com/api/articulos',
    dataType: 'json',

    success: function (dataApi) {
        var dataApi = dataApi.response
        myProgram(dataApi)

    }
})

/*---------------------------------------------------------------PHARMACY-----------------------------------------------------------*/

function myProgram(dataApi) {
    //console.log(dataApi)

    //Filtro la info de la API por categoria.
    var arrayPharma = dataApi.filter(articulo => articulo.tipo == 'Medicamento')
    //console.log(arrayPharma)
    var arrayToy = dataApi.filter(articulo => articulo.tipo == 'Juguete')
    //console.log(arrayToy)

    $(document).ready(function () {
        $(".content").hide()
        $(".show_hide").on("click", function () {
          var txt = $(".content").is(':visible') ? 'Mostrar Descripcion' : 'Ocultar Descripcion'
          $(".show_hide").text(txt)
          $(this).next('.content').slideToggle(200)
        });
      });

    if (document.querySelector('#infoPharma')) {

       
        for (let value of arrayPharma) {
            var lastUnits = ''
            if (value.stock < 5) {

                lastUnits = "Últimas Unidades!!!"
                document.querySelector('#infoPharma').innerHTML += `
    <div class="col mb-4">
    <div class="card w-55" id="image-product">
    <img src="${value.imagen}" class="card-img-top" alt="...">
    <div class="lastUnits">${lastUnits}</div>
    <h3 class="card-title">$${value.precio}.00</h3>
    </div>
    </div>

    <div>
    <a href="#" class="show_hide card-link" data-content="toggle-text">
    Mostrar Descripcion
    </a>
    <div class="description content card w-55 card-body">
    <p>${value.descripcion}</p>
    </div>
    </div>



   `

            } else {
                lastUnits = 'En Stock'
                document.querySelector('#infoPharma').innerHTML += `
    <div class="col mb-4">
    <div class="card w-55" id="image-product">
    <img src="${value.imagen}" class="card-img-top" alt="...">
    <div class="available-stock">${lastUnits}</div>
    <h3 class="card-title">$${value.precio}.00</h3>
    </div>
    </div>
    
       <div>
    <a href="#" class="show_hide card-link" data-content="toggle-text">
    Mostrar Descripcion
    </a>
    <div class="description content card w-55 card-body">
    <p>${value.descripcion}</p>
    </div>
    </div>`

            }
        }
    }

    /*---------------------------------------------------------------Toys-----------------------------------------------------------*/

    
        if (document.querySelector('#infoToys')) {
    
            for (let value of arrayToy) {
                var lastUnits = ''
                if (value.stock < 5) {
    
                    lastUnits = "Últimas Unidades!!!"
                    document.querySelector('#infoToys').innerHTML += `
        <div class="col mb-4">
        <div class="card w-60" id="image-product">
        <img src="${value.imagen}" class="card-img-top" alt="...">
        <div class="lastUnits">${lastUnits}</div>
        <h3 class="card-title">$${value.precio}.00</h3>
        </div>
        <div>${value.descripcion}</div>
        </div>`
    
                } else {
                    lastUnits = 'En Stock'
                    document.querySelector('#infoToys').innerHTML += `
        <div class="col mb-4">
        <div class="card w-60" id="image-product">
        <img src="${value.imagen}" class="card-img-top" alt="...">
        <div class="available-stock">${lastUnits}</div>
        <h3 class="card-title">$${value.precio}.00</h3>
        </div>
        <div>${value.descripcion}</div>
        </div>`
    
                }
            }
        }







































}


// function myProgram(dataApi){
// for (let value of dataApi) {
//     info.innerHTML += `
//     <div class="container" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">${value.nombre}</h5>
//     </div>
//     </div>

//     `
// }
// }
















































    // fetch('https://apipetshop.herokuapp.com/api/articulos')
    // .then(response => response.json())
    // .then(dataApi =>{

    //    var info = document.querySelector('#info')

    //     dataApi.response.map(value=>{
    //         info.innerHTML=`
    //         <div class="card" style="width: 18rem;">
    //         <img src="${value.imagen}" class="card-img-top" alt="...">
    //         <div class="card-body">
    //           <h5 class="card-title">${value.nombre}</h5>
    //           <h4 class="card-title">${value.stock} unidades</h4>
    //           <h3 class="card-title">$${value.precio}</h3>
    //         </div>
    //       </div>`
    //     })
    // })














