const url = "datos.json";
let pagina = 0;
let pagMax = 10;
let i;
let iCard = 0;
let i2 = 0;
let contador = 1;
let flag = 0;
let flag2 = 0;
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const cardsFilter = document.getElementById('cards-filter');
const getFiltro = document.getElementById('filtro');
let btnModal = document.getElementById('main');

// btnModal.addEventListener('click', ()=>{
//     console.log("FUE EL INDEX: " + i)
//     console.log(document.getElementById('card-id').innerHTML)
// })

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


document.getElementById('btnSiguiente').addEventListener('click', ()=> {
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

document.getElementById('btnAnterior').addEventListener('click', ()=> {
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

document.getElementById('btnSiguienteF').addEventListener('click', ()=> {
    if(pagina>=pagMax-1){
        pagina=-1;
        contador=1;
    }
    if(pagina<pagMax){
        pagina+=1;
        contador = 1;
        document.getElementById("pagina-labelF").innerHTML = "Página(" + (pagina + 1) + ")";
        filtrado();
    }
    window.scroll(0, 0);
});

document.getElementById('btnAnteriorF').addEventListener('click', ()=> {
    if(pagina<=0){
        pagina=pagMax;
        contador=1;
    }
    if(pagina>0){
        pagina-=1;
        contador = 1;
        document.getElementById("pagina-labelF").innerHTML = "Página(" + (pagina + 1) + ")";
        filtrado();
    }
    window.scroll(0, 0);
});

const filtrado = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            if(flag2==0){
                document.getElementById('main').remove();
                flag2=1;
            }
            if(arregloUnicoPuesto.length>10){
                document.getElementById('btnPaginaFiltro').classList.remove('d-none');
                document.getElementById('btnPaginaFiltro').classList.add('d-flex');
            }
            pagMax = Math.ceil(arregloUnicoPuesto.length/10);

            let y=pagina*10;
            let x=0;
            if(arregloUnicoPuesto.length == 0 && flag==0){
                let cardFilter = '';
                console.log("prueba")
                document.getElementById('filter').classList = "d-flex";
                document.getElementById('btn-sinFiltros').classList = "container d-flex flex-column justify-content-center";
                cardFilter += `
                <div class="d-flex justify-content-center">
                <p class="display-5">NO SE HA ENCONTRADO RESULTADOS</p>
                </div>
                `;
                
                document.getElementById('cards-filter').innerHTML = cardFilter;
                main.classList = "d-none";
                footer.classList = "d-none";
            }else if(arregloUnicoPuesto.length != 0){
                let contador = 1;
                let cardFilter = '';
                document.getElementById('text-sinFiltros').innerHTML = "Resultados: " + (arregloUnicoPuesto.length);
                main.classList = "d-none";
                footer.classList = "d-flex";
                document.getElementById('btn-sinFiltros').classList = "container d-flex flex-column justify-content-center";
                document.getElementById('nav').classList = "d-none";
                document.getElementById('filter').classList = "d-flex";
                
                arregloUnicoPuesto.forEach(ID => {
                        datos.data.forEach(trabajos => {
                            if(contador<=10){
                                if(arregloUnicoPuesto[y] == datos.data[x].Id){
                                    console.log("Index: " + x + " ID: " + datos.data[x].Id + " y: " + y)
                                    console.log("CONTADOOOOOOR: " + contador)
                                    cardFilter += `
                                    <div class="container d-flex justify-content-center">
                                        <div class="col-11 col-md-8 col-lg-7 card mb-4 d-f flex-column flex-wrap-wrap shadow">
                                            <div class="card-header bg-dark text-white">
                                            <div class="h4 h2-md text-center">
                                                <button onclick="modal${contador-1}();" id="btn-modal" class="bg-dark text-uppercase text-decoration-lg-none text-white" style="border: none;"><u>${datos.data[x].Titulo} / ${datos.data[x].Puesto}</u></button>
                                                <p class="d-none" id="card-id-${contador-1}">${datos.data[x].Id}</p>
                                            </div>
                                                <p class="text-center h5 mb-2"><i class="bi bi-building"></i> ${datos.data[x].Empresa}</p>
                                            </div>
                                            <div class="card-body">
                                                <div class="col-lg-12 d-lg-flex d-flex flex-column justify-content-between">
                                                    <p class="lead d-block"><i class="bi bi-geo-alt"></i> ${datos.data[x].UbicacionCiudad}, ${datos.data[x].UbicacionEstado}.</p>
                                                    <p class="h5 d-block text-success"><i class="bi bi-cash"></i> <strong class="px-2">${datos.data[x].Sueldo}${datos.data[x].Moneda}</strong></p>
                                                    <p class="lead d-block"><i class="bi bi-briefcase-fill"></i> <strong>${datos.data[x].TipoEmpleo}</strong></p>
                                                </div>
                                                <hr>
                                                <div class="container">
                                                    <p class="lead d-lg-inline d-block text-justify">${datos.data[x].Descri.substr(0, 250)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `;
                                    
                                    contador++;
                                    document.getElementById('cards-filter').innerHTML = cardFilter;
    
                                    x=0;
                                    i++;
                                    y++;
                                }else{
                                    x++;
                                }
                            }
                                
                        });
                })
            }
            if(flag==1){
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
    console.log("Se ejecuto todo")
}

const filtroPuesto = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let x=0;
            if(puesto == ""){
                arregloUnicoPuesto = arregloUnicoSueldo;
            }else if(puesto!="" && arregloUnicoSueldo.length != 0){
                datos.data.forEach(trabajos => {
                    if(puesto.toLowerCase() == datos.data[x].Puesto.toLowerCase() && arregloUnicoPuesto.includes(datos.data[x].Id) == false && arregloUnicoSueldo.includes(datos.data[x].Id) == true){
                        arregloUnicoPuesto.push(datos.data[x].Id)
                    }
                    x++;
                });
            }else if(puesto!="" && arregloUnicoSueldo.length == 0){
                datos.data.forEach(trabajos => {
                    if(datos.data[x].Puesto.toLowerCase().includes(puesto.toLowerCase()) && arregloUnicoPuesto.includes(datos.data[x].Id) == false){
                        arregloUnicoPuesto.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoPuesto.length == 0){
                console.log("FOOTEEEEEEER")
                document.getElementById('nav').classList = "d-none";
                document.getElementById('filter').classList = "d-flex";
                document.getElementById('btn-sinFiltros').classList = "container d-none flex-column justify-content-center";
                let cardFilter = '';
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
            filtrado();

        } if(respuesta.status === 404){
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
            const datos = await respuesta.json();

            let x=0;
            if(sueldo == ""){
                arregloUnicoSueldo = arregloUnicoEmpleo;
            }else if(sueldo!=""){
                datos.data.forEach(trabajos => {
                    if(parseInt(sueldo) <= parseInt(datos.data[x].Sueldo)){
                        console.log(datos.data[x].Sueldo)
                    }else{
                        console.log("No cumple")
                    }
                    if(parseInt(sueldo) <= parseInt(datos.data[x].Sueldo) && arregloUnicoSueldo.includes(datos.data[x].Id) == false){
                        if(arregloUnicoEmpleo.length == 0){
                            console.log("CUANDO EL ARREGLO ANTERIOR ESTA VACIO")
                            arregloUnicoSueldo.push(datos.data[x].Id);
                        }else if(arregloUnicoEmpleo.length != 0){
                            console.log("CUANDO EL ARREGLO ANTERIOR NO ESTA VACIO")
                            if(arregloUnicoEmpleo.includes(datos.data[x].Id) == true){
                                console.log("CUANDO EL ARREGLO ANTERIOR COINCIDE CON EL QUE SE VA INGRESAR")
                                arregloUnicoSueldo.push(datos.data[x].Id);
                            }
                        }
                    }
                    x++;
                });
            }
            if(arregloUnicoSueldo.length == 0){
                let cardFilter = '';
                console.log("se ejecuto el de abajo")
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

            let x=0;
            if(tipoEmpleo == ""){
                arregloUnicoEmpleo = arregloUnicoEstado;
            }else if(tipoEmpleo!="" && arregloUnicoEstado.length == 0){
                console.log("ENTRO AL METODO NO VACIO Y ARRAY VACIO")
                datos.data.forEach(trabajos => {
                    if(tipoEmpleo == datos.data[x].TipoEmpleo && arregloUnicoEmpleo.includes(datos.data[x].Id) == false){
                        arregloUnicoEmpleo.push(datos.data[x].Id)
                    }
                    x++;
                });
            }else if(tipoEmpleo!="" && arregloUnicoEstado.length != 0){
                console.log("ENTRO AL METODO NO VACIO Y ARREGLO NO VACIO")
                datos.data.forEach(trabajos => {
                    if(tipoEmpleo == datos.data[x].TipoEmpleo && arregloUnicoEmpleo.includes(datos.data[x].Id) == false && arregloUnicoEstado.includes(datos.data[x].Id)==true){
                        console.log("COINCIDE CON EL ARREGLO ANTERIOR")
                        arregloUnicoEmpleo.push(datos.data[x].Id)
                    }
                    x++;
                });
            }
            if(arregloUnicoEmpleo.length == 0){
                console.log("EMPLEOOOOOOOOO")
                document.getElementById('nav').classList = "d-none";
                document.getElementById('filter').classList = "d-flex";
                document.getElementById('btn-sinFiltros').classList = "container d-none flex-column justify-content-center";
                let cardFilter = '';
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
                console.log("ESTADOOOOOOOOOO")
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
    document.getElementById('btnPagina').classList.remove('d-flex');
    document.getElementById('btnPagina').classList.add('d-none');
    pagina=0;
    console.log("Ejecutado")
    if(puesto=="" && sueldo=="" && tipoEmpleo=="" && estado==""){
        flag=1;
        arregloUnicoEstado = [];
    }else{
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
            console.log(datos.data)
            datos.data.forEach(trabajos => {

                if(contador<=10){
                    trabajo += `
                    <div class="container d-flex justify-content-center">
                        <div class="col-11 col-md-8 col-lg-7 card mb-4 d-f flex-column flex-wrap-wrap shadow">
                            <div class="card-header bg-dark text-white">
                                <div class="h4 h2-md text-center">
                                    <button onclick="modal${contador-1}();" id="btn-modal" class="bg-dark text-uppercase text-decoration-lg-none text-white" style="border: none;"><u>${datos.data[i].Titulo} / ${datos.data[i].Puesto}</u></button>
                                    <p class="d-none" id="card-id-${contador-1}">${datos.data[i].Id}</p>
                                </div>
                                <p class="text-center h5 mb-2"><i class="bi bi-building"></i> ${datos.data[i].Empresa}</p>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12 d-lg-flex d-flex flex-column justify-content-between">
                                    <p class="lead d-block"><i class="bi bi-geo-alt"></i> ${datos.data[i].UbicacionCiudad}, ${datos.data[i].UbicacionEstado}.</p>
                                    <p class="h5 d-block text-success"><i class="bi bi-cash"></i> <strong class="px-2">${datos.data[i].Sueldo}${datos.data[i].Moneda}</strong></p>
                                    <p class="lead d-block"><i class="bi bi-briefcase-fill"></i> <strong>${datos.data[i].TipoEmpleo}</strong></p>
                                </div>
                                <hr>
                                <div class="container">
                                    <p class="lead d-lg-inline d-block text-justify">${datos.data[i].Descri.substr(0, 250)}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    
                    contador++;
                    i++;
                }else{
                }
            });

            btnModal = document.getElementById('btn-modal');
            document.getElementById('cards').innerHTML = trabajo;
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
        

    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}

cargarDatos();

/* BOTON DE SCROLL HACIA ARRIBA */
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/* CREACION DE MODALES PARA MAS INFORMACION */
function modal0(){
    iCard = console.log(document.getElementById('card-id-' + 0).innerHTML)
    iCard = document.getElementById('card-id-' + 0).innerHTML
    cardModal();
}
function modal1(){
    iCard = console.log(document.getElementById('card-id-' + 1).innerHTML)
    iCard = document.getElementById('card-id-' + 1).innerHTML
    cardModal();
}
function modal2(){
    iCard = console.log(document.getElementById('card-id-' + 2).innerHTML)
    iCard = document.getElementById('card-id-' + 2).innerHTML
    cardModal();
}
function modal3(){
    iCard = console.log(document.getElementById('card-id-' + 3).innerHTML)
    iCard = document.getElementById('card-id-' + 3).innerHTML
    cardModal();
}
function modal4(){
    iCard = console.log(document.getElementById('card-id-' + 4).innerHTML)
    iCard = document.getElementById('card-id-' + 4).innerHTML
    cardModal();
}
function modal5(){
    iCard = console.log(document.getElementById('card-id-' + 5).innerHTML)
    iCard = document.getElementById('card-id-' + 5).innerHTML
    cardModal();
}
function modal6(){
    iCard = console.log(document.getElementById('card-id-' + 6).innerHTML)
    iCard = document.getElementById('card-id-' + 6).innerHTML
    cardModal();
}
function modal7(){
    iCard = console.log(document.getElementById('card-id-' + 7).innerHTML)
    iCard = document.getElementById('card-id-' + 7).innerHTML
    cardModal();
}
function modal8(){
    iCard = console.log(document.getElementById('card-id-' + 8).innerHTML)
    iCard = document.getElementById('card-id-' + 8).innerHTML
    cardModal();
}
function modal9(){
    iCard = console.log(document.getElementById('card-id-' + 9).innerHTML)
    iCard = document.getElementById('card-id-' + 9).innerHTML
    cardModal();
}

const cardModal = async() => {
    try{
        const respuesta = await fetch(url);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let modalPrint = '';
            document.getElementById('container-master').classList = "d-none";
            document.getElementById('modalContainer').classList.add("d-flex");
            window.scroll(0, 0);
            datos.data.forEach(trabajos => {

                if(iCard == datos.data[i2].Id){
                    modalPrint += `
                        <div class="col-12 p-0 m-0">
                            <h2 class="col-12 text-center text-uppercase bg-dark display-5 display-md-4 p-4 p-md-5 text-white">
                                <strong>${datos.data[i2].Titulo} / ${datos.data[i2].Puesto}</strong>
                            </h2>
                            <div class="d-flex justify-content-center">
                            <div class="col-10 my-3 d-flex flex-column flex-wrap-wrap align-items-center">
                                <div class="col-12 card shadow-sm">
                                    <div class="card-body d-flex justify-content-center align-items-center">
                                        <p>anuncio</p>
                                    </div>
                                 </div>
                                <div class="col-12 col-sm-10 my-4 d-flex flex-column mx-3">
                                    <div class="col-12 card shadow mb-2">
                                        <div class="card-body py-3 px-4">
                                            <p class="text-center h5 mb-2"><i class="bi bi-building"></i> ${datos.data[i2].Empresa}</p>
                                            <p class="lead mb-2 d-block"><i class="bi bi-geo-alt"></i> ${datos.data[i2].UbicacionCiudad}, ${datos.data[i2].UbicacionEstado}.</p>
                                            <p class="h5 mb-2 d-block text-success"><i class="bi bi-cash"></i> <strong class="px-2">${datos.data[i2].Sueldo}${datos.data[i2].Moneda}</strong></p>
                                            <p class="lead mb-2 d-block"><i class="bi bi-briefcase-fill"></i> <strong>${datos.data[i2].TipoEmpleo}</strong></p>
                                        </div>
                                    </div>
                                    <div class="col-12 card shadow mb-2">
                                        <div class="card-body p-4">
                                            <h4 class="mb-3">Descripción</h4>
                                            <p class="mb-4">${datos.data[i2].Descri}</p>
                                            <div class="d-flex justify-content-center">
                                                <a href="index.html" class="col-6 text-center btn btn-outline-dark">Postularse</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 card shadow-sm">
                                    <div class="card-body d-flex justify-content-center align-items-center">
                                        <p>anuncio</p>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    `;
    
                }
                i2++;
            });

            document.getElementById('modalContainer').innerHTML = modalPrint;
        } else if(respuesta.status === 404){
            console.log("No se ha encontrado los datos solicitados.")
        }
        

    } catch(error){
        console.log("Ha surgido el siguiente error: " + error)
    }
}