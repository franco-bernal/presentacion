// Función para cargar y renderizar tecnologías en grid
function loadTechnologiesGrid() {
    try {
        // Usar los datos directamente del archivo tecnologies-data.js
        if (typeof technologiesData === 'undefined') {
            console.error('technologiesData no está disponible. Asegúrate de cargar tecnologies-data.js antes de tecnologies-grid.js');
            return;
        }
        
        const data = technologiesData;
        
        // Obtener el contenedor del grid de tecnologías
        const technologiesGrid = document.querySelector('.technologies-grid');
        if (!technologiesGrid) {
            console.error('Grid de tecnologías no encontrado');
            return;
        }
        
        // Limpiar el grid
        technologiesGrid.innerHTML = '';
        
        // Crear tarjetas para cada tecnología
        data.technologies.forEach(tech => {
            const card = document.createElement('div');
            card.className = 'tech-card';
            card.id = `tech-card-${tech.id}`;
            card.setAttribute('data-tech-id', tech.id);
            
            card.innerHTML = `
                <div class="tech-card-icon">
                    <i class="${tech.icono}"></i>
                </div>
                <div class="tech-card-content">
                    <h3 class="tech-card-title">${tech.nombre}</h3>
                    <p class="tech-card-description">${tech.description}</p>
                </div>
            `;
            
            // Agregar la tarjeta al grid
            technologiesGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar las tecnologías en grid:', error);
    }
}

// Cargar tecnologías cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTechnologiesGrid);
} else {
    loadTechnologiesGrid();
}

