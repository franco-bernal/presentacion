// Función para cargar y renderizar servicios dinámicamente
function loadServicios() {
    try {
        // Usar los datos directamente del archivo servicios-data.js
        if (typeof serviciosData === 'undefined') {
            console.error('serviciosData no está disponible. Asegúrate de cargar servicios-data.js antes de servicios.js');
            return;
        }
        
        const data = serviciosData;
        
        // Obtener el contenedor del slider de servicios
        const serviciosSlider = document.querySelector('.servicios-slider');
        if (!serviciosSlider) {
            console.error('Slider de servicios no encontrado');
            return;
        }
        
        // Limpiar el slider
        serviciosSlider.innerHTML = '';
        
        // Crear slides para cada servicio
        data.servicios.forEach(servicio => {
            const slide = document.createElement('div');
            slide.className = 'servicio-slide';
            
            slide.innerHTML = `
                <h3 class="servicio-slide-title">${servicio.nombre}</h3>
                <p class="servicio-slide-description">${servicio.descripcion}</p>
                <ul class="servicio-slide-caracteristicas">
                    ${servicio.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                </ul>
            `;
            
            // Agregar el slide al slider
            serviciosSlider.appendChild(slide);
        });
        
        // Actualizar botones después de cargar los slides
        if (typeof updateServiciosSliderButtons === 'function') {
            setTimeout(updateServiciosSliderButtons, 100);
        }
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
    }
}

// Cargar servicios cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadServicios);
} else {
    loadServicios();
}

