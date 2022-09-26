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
                        <div>
                            <h2>${datos.data[i].Titulo}</h2>
                            <p>${datos.data[i].CatName}</p>
                            <p>${datos.data[i].Empresa}</p>
                            <p>${datos.data[i].Id}</p>
                            <p>${datos.data[i].Puesto}</p>
                            <p>${datos.data[i].Sueldo}</p>
                            <p>${datos.data[i].Moneda}</p>
                            <p>${datos.data[i].TipoEmpleo}</p>
                            <p>${datos.data[i].SueldoTipo}</p>
                            <p>${datos.data[i].UbicacionEstado}</p>
                            <p>${datos.data[i].UbicacionCiudad}</p>
                            <p>${datos.data[i].Descri}</p>
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