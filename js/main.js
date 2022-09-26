const url = "datos.json";

const cargarDatos = async() => {
    try{
        const respuesta = await fetch(url);
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            // console.log(datos);
            // console.log(datos.data)

            let trabajo = '';
            let i=0;
            datos.data.forEach(trabajos => {

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

                // const card = document.createElement("div");

                // console.log(datos.data[i].Id)
                // console.log(datos.data[i].Titulo);
                i++;
            });

            document.getElementById('cards').innerHTML = trabajo;
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
        

    } catch(error){
        console.log(error)
    }
}

cargarDatos();