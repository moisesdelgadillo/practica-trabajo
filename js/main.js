const url = "datos.json";
let pagina = 0;
let paginaF = 0;
let i;
let iF;
let contador = 1;
let contadorF = 1;
let flag = 0;
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const cardsFilter = document.getElementById('cards-filter');
const getFiltro = document.getElementById('filtro');

let id = "";
let puesto = "";
let sueldo = "";
let tipoEmpleo = "";
let estado = "";

const moneda = document.getElementById('moneda');

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

let arregloUnicoId = [];
let arregloUnicoPuesto = [];
let arregloUnicoSueldo = [];
let arregloUnicoMoneda = [];
let arregloUnicoEmpleo = [];
let arregloUnicoEstado = [];

getFiltro.addEventListener('click', ()=>{
    filtro();
});

moneda.addEventListener('click', ()=>{
    document.getElementById('btn-moneda').innerHTML = "MXN";
});

ft.addEventListener('click', ()=>{
    arregloUnicoEmpleo = [];
    tipoEmpleo = "FULL_TIME";
    document.getElementById('btn-te').innerHTML = "FULL_TIME";
});

pt.addEventListener('click', ()=>{
    arregloUnicoEmpleo = [];
    tipoEmpleo = "PART_TIME";
    document.getElementById('btn-te').innerHTML = "PART_TIME";
});

ag.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Aguascalientes";
    document.getElementById('btn-estado').innerHTML = "Aguascalientes";
    
});
ja.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Jalisco";
    document.getElementById('btn-estado').innerHTML = "Jalisco";
});
ta.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Tamaulipas";
    document.getElementById('btn-estado').innerHTML = "Tamaulipas";
});
nl.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nuevo Leon";
    document.getElementById('btn-estado').innerHTML = "Nuevo Leon";
});
cdmx.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "CDMX";
    document.getElementById('btn-estado').innerHTML = "CDMX";
});
ve.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Veracruz";
    document.getElementById('btn-estado').innerHTML = "Veracruz";
});
so.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Sonora";
    document.getElementById('btn-estado').innerHTML = "Sonora";
});
mex.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "México";
    document.getElementById('btn-estado').innerHTML = "México";
});
nln.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nuevo León";
    document.getElementById('btn-estado').innerHTML = "Nuevo León";
});
hi.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Hidalgo";
    document.getElementById('btn-estado').innerHTML = "Hidalgo";
});
mo.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Morelos";
    document.getElementById('btn-estado').innerHTML = "Morelos";
});
sl.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "San Luis Potosi";
    document.getElementById('btn-estado').innerHTML = "San Luis Potosi";
});
gu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Guanajuato";
    document.getElementById('btn-estado').innerHTML = "Guanajuato";
});
que.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Querétaro";
    document.getElementById('btn-estado').innerHTML = "Querétaro";
});
pu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Puebla";
    document.getElementById('btn-estado').innerHTML = "Puebla";
});
na.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Nayarit";
    document.getElementById('btn-estado').innerHTML = "Nayarit";
});
du.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Durango";
    document.getElementById('btn-estado').innerHTML = "Durango";
});
qui.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Quintana Roo";
    document.getElementById('btn-estado').innerHTML = "Quintana Roo";
});
chi.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Chiapas";
    document.getElementById('btn-estado').innerHTML = "Chiapas";
});
col.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Colima";
    document.getElementById('btn-estado').innerHTML = "Colima";
});
yu.addEventListener('click', ()=>{
    arregloUnicoEstado = [];
    estado = "Yucatán";
    document.getElementById('btn-estado').innerHTML = "Yucatán";
});

const monedaSF = document.getElementById('monedaSF').addEventListener('click', ()=>{
    document.getElementById('btn-moneda').innerHTML = "Moneda";
    moneda="";
});
const empleoSF = document.getElementById('empleoSF').addEventListener('click', ()=>{
    document.getElementById('btn-te').innerHTML = "Tipo Empleo";
    tipoEmpleo="";
});
const estadoSF = document.getElementById('estadoSF').addEventListener('click', ()=>{
    document.getElementById('btn-estado').innerHTML = "Ubicación Estado";
    estado="";
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

const filtrado = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            console.log("ENTRO AL METODO IMPRIMIR")
            const datos = await respuesta.json();

            let y=paginaF*10;
            let x=0;
            if(arregloUnicoPuesto.lenght == 0 && flag==0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }else if(arregloUnicoPuesto.lenght != 0){
                let cardFilter = '';
                document.getElementById('btn-sinFiltros').classList = "container d-flex"
                document.getElementById('nav').classList = "d-none"
                arregloUnicoPuesto.forEach(ID => {
                    console.log("ENTRO A METODO FILTRADO CUANDO EL ARRAY PUESTO NO ESTA VACIO")
                    datos.data.forEach(trabajos => {
                        if(arregloUnicoPuesto[y] == datos.data[x].Id){
                            console.log("Index: " + x + " ID: " + datos.data[x].Id + " y: " + y)
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

                            x=0;
                            y++;
                        }else{
                            x++;
                        }
                    });
                })
            }
            if(flag==1){  //ESTE ES POR SI LOS FILTROS SE QUITAN Y LE PICAN ACTUALIZAR
                main.classList = "d-flex";
                footer.classList = "d-flex";
                document.getElementById('filter').classList = "d-none";
                flag=0;
            }
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
    console.log("SALIO DEL METODO IMPRIMIR")
}

const filtroPuesto = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            console.log("ENTRO AL METODO PUESTO")
            const datos = await respuesta.json();

            let x=0;
            if(puesto == ""){
                console.log("ENTRO A PUESTO VACIO")
                arregloUnicoPuesto = arregloUnicoSueldo;
            }else if(puesto!="" && arregloUnicoSueldo.lenght != 0){
                console.log("ENTRO A PUESTO NO VACIO Y ARRAY ANTERIOR NO VACIO")
                datos.data.forEach(trabajos => {
                    if(puesto == datos.data[x].Puesto && arregloUnicoPuesto.includes(datos.data[x].Id) == false ){
                        arregloUnicoPuesto.push(datos.data[x].Id)
                    }
                    x++;
                });
            }else if(puesto!="" && arregloUnicoSueldo.lenght == 0){
                console.log("ENTRO A PUESTO NO VACIO Y A ARREGLO ANTERIOR VACIO")
                datos.data.forEach(trabajos => {
                    if(puesto == datos.data[x].Puesto && arregloUnicoPuesto.includes(datos.data[x].Id) == false){
                        arregloUnicoPuesto.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoPuesto.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }
            console.log("SALIO DEL METODO PUESTO")
            filtrado();

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroSueldo = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            console.log("ENTRO AL METODO ID")
            const datos = await respuesta.json();

            let x=0;
            if(sueldo == ""){
                console.log("ENTRO A sueldo VACIO")
                arregloUnicoSueldo = arregloUnicoEmpleo;
            }else if(sueldo!="" && arregloUnicoEmpleo.lenght != 0){
                console.log("ENTRO A sueldo NO VACIO Y A ARREGLO ANTERIOR NO VACIO")
                datos.data.forEach(trabajos => {
                    if(parseInt(sueldo) >= parseInt(datos.data[x].Sueldo) && arregloUnicoSueldo.includes(datos.data[x].Id) == false){
                        if(arregloUnicoEmpleo.includes(datos.data[x].Id) == true){
                            arregloUnicoSueldo.push(datos.data[x].Id)
                        }
                    }
                    x++;
                });
            }
            if(arregloUnicoId.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }
            console.log("SALIO DEL METODO sueldo")
            filtroPuesto();

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroSueldoo = async() => {  //ID VIEJO

    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            console.log("ENTRO AL METODO SUELDO")
            const datos = await respuesta.json();

            let x=0;
            if(sueldo == ""){
                console.log("ENTRO A METODO SUELDO VACIO")
                arregloUnicoSueldo = arregloUnicoEmpleo;
            }else if (sueldo<=10000){

            }else if(sueldo!="" && arregloUnicoEmpleo.lenght != 0){
                console.log("ENTRO A METODO SUELDO NO VACIO Y ARRAY ANTERIOR NO VACIO")
                datos.data.forEach(trabajos => {
                    if(sueldo == datos.data[x].Sueldo && arregloUnicoSueldo.includes(datos.data[x].Id) == false ){
                        arregloUnicoSueldo.push(datos.data[x].Id)
                    }
                    x++;
                });
            }else if(sueldo!="" && arregloUnicoEmpleo.lenght == 0){
                console.log("ENTRO A METODO SUELDO NO VACIO Y ARRAY VACIO")
                datos.data.forEach(trabajos => {
                    if(sueldo == datos.data[x].Sueldo && arregloUnicoSueldo.includes(datos.data[x].Id) == false){
                        arregloUnicoSueldo.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoSueldo.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }
            console.log("SALIO DEL METODO SUELDO")
            filtroPuesto();

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroTipoEmpleo = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            console.log("ENTRÓ AL METODO DE EMPLEO")

            let x=0;
            if(tipoEmpleo == ""){
                console.log("ENTRO A METODO EMPLEO VACIO")
                arregloUnicoEmpleo = arregloUnicoEstado;
            }else if(tipoEmpleo!="" && arregloUnicoEstado.lenght != 0){
                console.log("ENTRO A METODO EMPLEO NO VACIO Y ARRAY NO VACIO")
                datos.data.forEach(trabajos => {
                    if(tipoEmpleo == datos.data[x].TipoEmpleo && arregloUnicoEmpleo.includes(datos.data[x].Id) == false){
                        arregloUnicoEmpleo.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoEmpleo.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }
            console.log("SALIO DEL METODO EMPLEO")
            filtroSueldo();

        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtroUbicacionEstado = async() => {
    console.log("ENTRO METODO ESTADO")
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            if(estado == ""){
                console.log("ENTRO A METODO ESTADO VACIO")
            }else if(estado != ""){
                console.log("ENTRO A METODO ESTADO NO VACIO")
                datos.data.forEach(trabajos => {
                    if(estado == datos.data[x].UbicacionEstado && arregloUnicoEstado.includes(datos.data[x].Id) == false){
                        arregloUnicoEstado.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoEstado.length == 0){
                let cardFilter = '';
                document.getElementById('filter').classList = "d-flex";
                cardFilter += `
                    <div class="d-flex justify-content-center">
                        <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                    </div>
                    <div class="container d-flex justify-content-center my-3">
                        <a href="index.html" class="btn btn-outline-dark">Volver</a>
                    </div>
                `;

                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }
            console.log("SE TERMINó EL METODO DE ESTADO")
            filtroTipoEmpleo();
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

const filtro = async() => {
    puesto =document.getElementById("puesto").value;
    sueldo = document.getElementById("sueldo").value;
    console.log("Ejecutado")
    if(puesto=="" && sueldo=="" && tipoEmpleo=="" && estado==""){
        console.log("FLAGGGGG")
        flag=1;
        arregloUnicoEstado = [];
        filtroUbicacionEstado();
    }else{
        puesto =document.getElementById("puesto").value;
        sueldo = document.getElementById("sueldo").value;
        filtroUbicacionEstado();
    }
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