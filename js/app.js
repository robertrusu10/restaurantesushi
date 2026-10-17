// Seleccionamos todos los botones de las pestañas y todos los contenidos
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Quitar la clase 'active' de todos los botones y ocultar todos los contenidos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // 2. Añadir la clase 'active' al botón que hemos pulsado
        btn.classList.add('active');

        // 3. Obtener el id del contenido que queremos mostrar (nigiris, uramakis o bebidas)
        const targetId = btn.getAttribute('data-target');
        
        // 4. Mostrar el contenido correspondiente
        document.getElementById(targetId).classList.add('active');
    });
});

// Lógica para el formulario de reserva (si existe en la página actual)
const bookingForm = document.getElementById('kintsugi-booking');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue
        alert('¡Solicitud recibida! Nos pondremos en contacto contigo en breve para confirmar tu reserva en la barra Omakase.');
        this.reset(); // Limpia los campos del formulario tras enviarlo
    });
}