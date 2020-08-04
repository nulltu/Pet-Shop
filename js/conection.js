if(document.querySelector('#farmacia')){


    fetch('https://apipetshop.herokuapp.com/api/articulos')
    .then(response => response.json())
    .then(json => console.log(json))



}

