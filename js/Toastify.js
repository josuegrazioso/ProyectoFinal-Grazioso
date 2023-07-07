var miBoton = document.getElementById('agregarAlCarrito');

miBoton.addEventListener('click', function() {Toastify({
    text: 'Agregaste un Buzo al carrito',
    duration: 3000,  
    gravity: 'top',
    position: "center",
    backgroundColor: 'linear-gradient(to right, #dd00ff, #0000ff)', 
  }).showToast();
});