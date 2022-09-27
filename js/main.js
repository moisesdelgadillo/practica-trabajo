const url = "datos.json";
let pagina = 0;
let i;
let contador = 1;
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');

btnSiguiente.addEventListener('click', ()=> {
    if(pagina>=9){
        pagina=-1;
        contador=1;
    }
    if(pagina<10){
        pagina+=1;
        contador = 1;
        cargarDatos();
    }
    window.scroll(0, 0);
})

btnAnterior.addEventListener('click', ()=> {
    if(pagina<=0){
        pagina=10;
        contador=1;
    }
    if(pagina>0){
        pagina-=1;
        contador = 1;
        cargarDatos();
    }
    window.scroll(0, 0);
})

const cargarDatos = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            i=pagina *10;
            let trabajo = '';
            datos.data.forEach(trabajos => {

                if(contador<=10){
                    const card = document.createElement("div");
                    trabajo += `
                        <div class="col-12 card mb-5 d-f flex-wrap shadow">
                            <div class="card-header bg-dark text-white">
                                <h2 class="display-6 text-uppercase text-center">${datos.data[i].Titulo} - <strong class="display-6">${datos.data[i].Empresa}</strong></h2>
                                <p class="lead text-center mb-2">${datos.data[i].CatName}</p>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                    <p class="lead d-lg-inline d-block">Id: <strong>${datos.data[i].Id}</strong></p>
                                    <p class="lead d-lg-inline d-block">Puesto: <strong>${datos.data[i].Puesto}</strong></p>
                                    <p class="lead d-lg-inline d-block">Sueldo: <strong>${datos.data[i].Sueldo}</strong></p>
                                    <p class="lead d-lg-inline d-block">Moneda: <strong>${datos.data[i].Moneda}</strong></p>
                                </div>
                                <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                    <p class="lead d-lg-inline d-block">Tipo de Empleo: <strong>${datos.data[i].TipoEmpleo}</strong></p>
                                    <p class="lead d-lg-inline d-block">Sueldo Tipo: <strong>${datos.data[i].SueldoTipo}</strong></p>
                                    <p class="lead d-lg-inline d-block">Estado: <strong>${datos.data[i].UbicacionEstado}</strong></p>
                                    <p class="lead d-lg-inline d-block">Ciudad: <strong>${datos.data[i].UbicacionCiudad}</strong></p>
                                </div>
                                <hr>
                                <p class="lead d-lg-inline d-block text-justify">Descripción: <strong>${datos.data[i].Descri}</strong></p>
                            </div>
                        </div>
                    `;
    
                    contador++;
                    i++;
                }else{
                }
            });

            document.getElementById('cards').innerHTML = trabajo;
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
        

    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

cargarDatos();