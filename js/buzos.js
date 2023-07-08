function renderProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class="col-xxl-3 col-xl-6 col-md-6 mb-5">
        <a href="../ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="d-flex justify-content-around align-items-center flex-wrap">
                <div data-aos="fade-up" data-aos-duration="500">
                    <div class="tarjeta card text-center border">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                            <p class="text-secondary">${producto.nombre}</p>
                        </div>
                    </div>
                </div>  
            </div>  
        </a>
      </div>`;
    });

    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();