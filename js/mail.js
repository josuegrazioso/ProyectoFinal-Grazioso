document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
  
    var data = {
      email: email
    };
  
    var existingData = localStorage.getItem('emails');
    var emails = existingData ? JSON.parse(existingData) : [];
  
    emails.push(data);
  
    localStorage.setItem('emails', JSON.stringify(emails));
  
    document.getElementById('email').value = '';
  
    swal.fire({
      title: 'Correo electrónico guardado',
      text: 'El correo electrónico se ha guardado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  
    var storedData = localStorage.getItem('emails');
    var storedEmails = storedData ? JSON.parse(storedData) : [];
  
    console.log(storedEmails);
  
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(storedEmails);
      }, 2000);
    })
    .then(function(emails) {
      console.log('Correos electrónicos después de 2 segundos:', emails);
    })
  });
  