//Copiar Link en HTML
       //<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
       

       // Aquí van tus configuraciones personalizadas
        const serviceID = 'service_xxxxxxx';  // Reemplaza con tu ID de servicio
        const templateID = 'template_xxxxxxxx';  // Reemplaza con tu ID de plantilla
        const userID = 'xxxxxxxxxxxxxx';  // Reemplaza con tu llave pública de EmailJS

        // Inicializar EmailJS
        emailjs.init(userID);

        // Obtener Datos del Formulario
        document.getElementById('form-contact').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const data = {
                name: formData.get('from_name'),
                email: formData.get('reply_to'),
                message: formData.get('message')
            };

             // Función Enviar Email
            emailjs.send(serviceID, templateID, data)
                .then(function(response) {
                    alert('¡Mensaje enviado con éxito!');
                }, function(error) {
                    alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
                    //alert('Codigo de Error: '+ error.status + '  Mensaje: ' + error.text);
                });
        });