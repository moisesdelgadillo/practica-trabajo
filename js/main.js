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
                        <div class="ol-12 card mb-4 d-f flex-wrap">
                            <div class="card-body">
                                <h2 class="display-6 text-uppercase text-center">${datos.data[i].Titulo}</h2>
                                <p class="lead text-center mb-3">${datos.data[i].CatName}</p>
                                <p class="lead">Empresa: <strong>${datos.data[i].Empresa}</strong></p>
                                <p class="lead">Id: <strong>${datos.data[i].Id}</strong></p>
                                <p class="lead">Puesto: <strong>${datos.data[i].Puesto}</strong></p>
                                <p class="lead">Sueldo: <strong>${datos.data[i].Sueldo}</strong></p>
                                <p class="lead">Moneda: <strong>${datos.data[i].Moneda}</strong></p>
                                <p class="lead">Tipo de Empleo: <strong>${datos.data[i].TipoEmpleo}</strong></p>
                                <p class="lead">Sueldo Tipo: <strong>${datos.data[i].SueldoTipo}</strong></p>
                                <p class="lead">Estado: <strong>${datos.data[i].UbicacionEstado}</strong></p>
                                <p class="lead">Ciudad: <strong>${datos.data[i].UbicacionCiudad}</strong></p>
                                <p class="lead">Descripción: <strong>${datos.data[i].Descri}</strong></p>
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