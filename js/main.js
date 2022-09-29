const url = "datos.json";
let pagina = 0;
let i;
let contador = 1;
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');
const filtrado = document.getElementById('filtrado');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const cardsFilter = document.getElementById('cards-filter');

let estado = "";
let tipoEmpleo = "";
let mxn = "MXN";
let sueldo = "";

const sueldo1 = document.getElementById('sueldo1');
const sueldo2 = document.getElementById('sueldo2');
const sueldo3 = document.getElementById('sueldo3');
const sueldo4 = document.getElementById('sueldo4');

const ft = document.getElementById('ft');
const pt = document.getElementById('pt');

const ag = document.getElementById('ag');
const ja = document.getElementById('ja');
const ta = document.getElementById('ta');
const nl = document.getElementById('nl');
const cdmx = document.getElementById('cdmx');
const ve = document.getElementById('ve');
const so = document.getElementById('so');
const mex = document.getElementById('mex');
const nln = document.getElementById('nln');
const hi = document.getElementById('hi');
const mo = document.getElementById('mo');
const sl = document.getElementById('sl');
const gu = document.getElementById('gu');
const que = document.getElementById('que');
const pu = document.getElementById('pu');
const na = document.getElementById('na');
const du = document.getElementById('du');
const qui = document.getElementById('qui');
const chi = document.getElementById('chi');
const col = document.getElementById('col');
const yu = document.getElementById('yu');


let arregloUnicoEstado = [];
let arregloUnicoEmpleo = [];
let arregloUnicoMoneda = [];
let arregloUnicoSueldo = [];
let arregloUnicoPuesto = [];

sueldo1.addEventListener('click', ()=>{
    arregloUnicoSueldo = [];
    sueldo = "10000";
});

sueldo2.addEventListener('click', ()=>{
    arregloUnicoSueldo = [];
    sueldo = "15000";
});

sueldo3.addEventListener('click', ()=>{
    arregloUnicoSueldo = [];
    sueldo = "20000";
});

sueldo4.addEventListener('click', ()=>{
    arregloUnicoSueldo = [];
    sueldo = "20001";
});

ft.addEventListener('click', ()=>{
    arregloUnicoEmpleo = [];
    tipoEmpleo = "FULL_TIME";
});

pt.addEventListener('click', ()=>{
    arregloUnicoEmpleo = [];
    tipoEmpleo = "PART_TIME";
});

ag.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Aguascalientes";
    
});
ja.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Jalisco";
});
ta.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Tamaulipas";
});
nl.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nuevo Leon";
});
cdmx.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "CDMX";
});
ve.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Veracruz";
});
so.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Sonora";
});
mex.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "México";
});
nln.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nuevo León";
});
hi.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Hidalgo";
});
mo.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Morelos";
});
sl.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "San Luis Potosi";
});
gu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Guanajuato";
});
que.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Querétaro";
});
pu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Puebla";
});
na.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nayarit";
});
du.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Durango";
});
qui.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Quintana Roo";
});
chi.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Chiapas";
});
col.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Colima";
});
yu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Yucatán";
});



btnSiguiente.addEventListener('click', ()=> {
    if(pagina>=9){
        pagina=-1;
        contador=1;
    }
    if(pagina<10){
        pagina+=1;
        contador = 1;
        document.getElementById("pagina-label").innerHTML = "Página(" + (pagina + 1) + ")";
        cargarDatos();
    }
    window.scroll(0, 0);
});

btnAnterior.addEventListener('click', ()=> {
    if(pagina<=0){
        pagina=10;
        contador=1;
    }
    if(pagina>0){
        pagina-=1;
        contador = 1;
        document.getElementById("pagina-label").innerHTML = "Página(" + (pagina + 1) + ")";
        cargarDatos();
    }
    window.scroll(0, 0);
});

filtrado.addEventListener('click', ()=> {
    console.log("Ejecutado")
    id = document.getElementById("id").value;
    puesto =document.getElementById("puesto").value;
    busquedaFiltros();
    filtro();
})

const busquedaFiltros = () =>{

};

const filtroTipoEmpleo = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            if(estado == ""){
                datos.data.forEach(trabajos => {
                    if(estado == datos.data[x].UbicacionEstado && arregloUnicoEstado.includes(datos.data[i].UbicacionEstado) == false){
                        arregloUnicoEstado.push(datos.data[x].Id)
                    }else{
                    }
                    x++;
                });
            }
            if(arregloUnicoEstado.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div>
                        <p class="display-5 text-red">NO SE HA ENCONTRADO EL TRABAJO</p>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }else{
                filtroTipoEmpleo();
            }

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroUbicacionEstado = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            datos.data.forEach(trabajos => {
                if(estado == datos.data[x].UbicacionEstado && arregloUnicoEstado.includes(datos.data[i].UbicacionEstado) == false){
                    arregloUnicoEstado.push(datos.data[x].Id)
                }else{
                }
                x++;
            });
            if(arregloUnicoEstado.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div>
                        <p class="display-5 text-red">NO SE HA ENCONTRADO EL TRABAJO</p>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }else{
                filtroTipoEmpleo();
            }

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroId = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            datos.data.forEach(trabajos => {
                if(id==datos.data[x].Id && puestoB){

                    
                    let cardFilter = '';
                    document.getElementById('filter').classList = "d-flex";
                    cardFilter += `
                        <div class="col-12 card mb-5 d-f flex-wrap shadow">
                        <div class="card-header bg-dark text-white">
                            <h2 class="display-6 text-uppercase text-center">${datos.data[x].Titulo} - <strong class="display-6">${datos.data[x].Empresa}</strong></h2>
                            <p class="lead text-center mb-2">${datos.data[x].CatName}</p>
                        </div>
                        <div class="card-body">
                            <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                <p class="lead d-lg-inline d-block">Id: <strong>${datos.data[x].Id}</strong></p>
                                <p class="lead d-lg-inline d-block">Puesto: <strong>${datos.data[x].Puesto}</strong></p>
                                <p class="lead d-lg-inline d-block">Sueldo: <strong>${datos.data[x].Sueldo}</strong></p>
                                <p class="lead d-lg-inline d-block">Moneda: <strong>${datos.data[x].Moneda}</strong></p>
                            </div>
                            <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                <p class="lead d-lg-inline d-block">Tipo de Empleo: <strong>${datos.data[x].TipoEmpleo}</strong></p>
                                <p class="lead d-lg-inline d-block">Sueldo Tipo: <strong>${datos.data[x].SueldoTipo}</strong></p>
                                <p class="lead d-lg-inline d-block">Estado: <strong>${datos.data[x].UbicacionEstado}</strong></p>
                                <p class="lead d-lg-inline d-block">Ciudad: <strong>${datos.data[x].UbicacionCiudad}</strong></p>
                            </div>
                            <hr>
                            <p class="lead d-lg-inline d-block text-justify">Descripción: <strong>${datos.data[x].Descri}</strong></p>
                        </div>
                    </div>
                    `;

                    document.getElementById('cards-filter').innerHTML = cardFilter;
                    main.classList = "d-none";
                    footer.classList = "d-none";
                    return;
                }else if(id == ""){
                    main.classList = "d-flex";
                    footer.classList = "d-flex";
                    document.getElementById('filter').classList = "d-none";
                }else{
                    let cardFilter = '';
                    document.getElementById('filter').classList = "d-flex";
                    cardFilter += `
                        <div>
                            <p class="display-5 text-red">NO SE HA ENCONTRADO EL TRABAJO</p>
                        </div>
                    `;

                    document.getElementById('cards-filter').innerHTML = cardFilter;
                    main.classList = "d-none";
                    footer.classList = "d-none";
                }
                x++;
            });

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtro = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            datos.data.forEach(trabajos => {
                if(id==datos.data[x].Id && puestoB){
                    // console.log("Se encontró en el index: " + x);

                    
                    let cardFilter = '';
                    document.getElementById('filter').classList = "d-flex";
                    cardFilter += `
                        <div class="col-12 card mb-5 d-f flex-wrap shadow">
                        <div class="card-header bg-dark text-white">
                            <h2 class="display-6 text-uppercase text-center">${datos.data[x].Titulo} - <strong class="display-6">${datos.data[x].Empresa}</strong></h2>
                            <p class="lead text-center mb-2">${datos.data[x].CatName}</p>
                        </div>
                        <div class="card-body">
                            <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                <p class="lead d-lg-inline d-block">Id: <strong>${datos.data[x].Id}</strong></p>
                                <p class="lead d-lg-inline d-block">Puesto: <strong>${datos.data[x].Puesto}</strong></p>
                                <p class="lead d-lg-inline d-block">Sueldo: <strong>${datos.data[x].Sueldo}</strong></p>
                                <p class="lead d-lg-inline d-block">Moneda: <strong>${datos.data[x].Moneda}</strong></p>
                            </div>
                            <div class="col-lg-12 d-lg-flex d-block justify-content-between">
                                <p class="lead d-lg-inline d-block">Tipo de Empleo: <strong>${datos.data[x].TipoEmpleo}</strong></p>
                                <p class="lead d-lg-inline d-block">Sueldo Tipo: <strong>${datos.data[x].SueldoTipo}</strong></p>
                                <p class="lead d-lg-inline d-block">Estado: <strong>${datos.data[x].UbicacionEstado}</strong></p>
                                <p class="lead d-lg-inline d-block">Ciudad: <strong>${datos.data[x].UbicacionCiudad}</strong></p>
                            </div>
                            <hr>
                            <p class="lead d-lg-inline d-block text-justify">Descripción: <strong>${datos.data[x].Descri}</strong></p>
                        </div>
                    </div>
                    `;

                    document.getElementById('cards-filter').innerHTML = cardFilter;
                    main.classList = "d-none";
                    footer.classList = "d-none";
                    return;
                }else if(id == ""){
                    main.classList = "d-flex";
                    footer.classList = "d-flex";
                    document.getElementById('filter').classList = "d-none";
                }else{
                    let cardFilter = '';
                    document.getElementById('filter').classList = "d-flex";
                    cardFilter += `
                        <div>
                            <p class="display-5 text-red">NO SE HA ENCONTRADO EL TRABAJO</p>
                        </div>
                    `;

                    document.getElementById('cards-filter').innerHTML = cardFilter;
                    main.classList = "d-none";
                    footer.classList = "d-none";
                }
                x++;
            });

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
    filtroUbicacionEstado();
}

const cargarDatos = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            i=pagina *10;
            let trabajo = '';
            datos.data.forEach(trabajos => {

                if(contador<=10){
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