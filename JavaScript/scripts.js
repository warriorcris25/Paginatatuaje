document.addEventListener("DOMContentLoaded", function() {
    cargarPromociones();

    // Función para cargar las promociones desde el archivo JSON
    function cargarPromociones() {
        fetch('promociones.json')
            .then(response => response.json())
            .then(data => {
                let promocionesContainer = document.querySelector('#ofertas .row');
                data.forEach(promocion => {
                    let promoHTML = `
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="${promocion.imagen}" class="card-img-top" alt="${promocion.titulo}">
                                <div class="card-body">
                                    <h5 class="card-title">${promocion.titulo}</h5>
                                    <p class="card-text">${promocion.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    promocionesContainer.innerHTML += promoHTML;
                });
            })
            .catch(error => console.error('Error cargando promociones:', error));
    }

    // Formulario de subida de diseños
    const form = document.getElementById('upload-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const designName = document.getElementById('designName').value;
        const designImage = document.getElementById('designImage').files[0];

        if (designName && designImage) {
            alert('Diseño subido con éxito.');
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
