document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm('service_ujtmm3i', 'template_yywtjtt', this)
            .then(function() {
                alert("Mensaje enviado correctamente!");
                contactForm.reset();
            }, function(error) {
                alert("Ocurrió un error al enviar el mensaje: " + JSON.stringify(error));
            });
    });
});

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    const whatsappMessage = `Hola, mi nombre es ${name} y mi número de teléfono es ${phone}. ${message}`;
    const whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;
  
    window.open(whatsappURL, '_blank');
  }
  
