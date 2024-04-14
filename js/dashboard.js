/*
    SI YO INGRESARÁ DIRECTAMENTE
    A DASHBOARD.HTML 
    SIN HABERME LOGEADO
    DEBERIA DE DEVOLVERME A INDEX.HTML

    --> codigo parecido dentro de profefavorito
    --> localStorage()
*/

const compras = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Compra en Real Plaza",
        "monto": "S/. 1890",
        "detalle": "La compra se realizo en Real plaza La Marina a las 9:30pm",
        "productos": [
            {
                "SKU": "14815",
                "nombre": "Aire Acondicionado",
                "monto": "S/ 1000.00",
                "imagen": "images/aireacondicionado.jpeg"
            },
            {
                "SKU": "145811",
                "nombre": "Refrigeradora",
                "monto": "S/ 690.00",
                "imagen": "images/refri.jpg"
            },
            {
                "SKU": "148112",
                "nombre": "Microondas",
                "monto": "S/ 200.00",
                "imagen": "images/microondas.jpg"
            }
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Compra en Monterrico",
        "monto": "S/. 2200.00",
        "detalle": "La compra se realizo en Monterrico a las 7:20pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Lavadora",
                "monto": "S/ 2000.00",
                "imagen": "images/lavadora.jpg"
            },
            {
                "SKU": "177771",
                "nombre": "Licuadora",
                "monto": "S/ 90.00",
                "imagen": "images/licuadora.jpg"
            },
            {
                "SKU": "177779",
                "nombre": "Cafetera",
                "monto": "S/ 110.00",
                "imagen": "images/cafetera.jpg"
            }
        ]
    },
    {
        "id": "18",
        "uuid": "1566664514aa",
        "nombre": "Compra en Azangaro",
        "monto": "S/. 890.00",
        "detalle": "La compra se realizo en Azangaro a las 6:06pm",
        "productos": [
            {
                "SKU": "666",
                "nombre": "Impresora Canon",
                "monto": "S/ 89000",
                "imagen": "images/impresora.png"
            }
        ]
    }
];
//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "producto.html?idcompra="+compra.id;
    const template = `
        <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${compra.nombre}</span>
            <p>
                ${compra.detalle}        
            </p>
            <p class="precio">
                ${compra.monto}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ver producto
            </a>
        </li>
    `;
    $misProductos.append(template);
});

/*
    3. En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
    compras.forEach((compra) => {
        if (compra.id == idcompra) {
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);
            misproductos = compra.productos;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            const template = `
            <li class="collection-item">
                <img src="${producto.imagen}" class="imagen-producto">
                <p class="sku">SKU: ${producto.SKU}</p>
                <p class="nombre">${producto.nombre}</p>
                <p class="monto">${producto.monto}</p>
            </li>
            `;
            $("#myProducts").append(template);
        });
    }
}
//verificar si se esta logueado
function verificarAutenticacion() {
    if (!localStorage.getItem("userLogueado")) {
        location.href = "index.html";
    }
}
verificarAutenticacion();

//para salir 
document.getElementById("salir").addEventListener('click', function () {
    localStorage.removeItem("userLogueado");
    location.href = "index.html";
});