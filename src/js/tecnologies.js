// Función para cargar y renderizar tecnologías dinámicamente
function loadTechnologies() {
    try {
        // Usar los datos directamente del archivo tecnologies-data.js
        // Asegurarse de que technologiesData esté disponible
        if (typeof technologiesData === 'undefined') {
            console.error('technologiesData no está disponible. Asegúrate de cargar tecnologies-data.js antes de tecnologies.js');
            return;
        }
        
        const data = technologiesData;
        
        // Obtener todos los slides
        const slides = document.querySelectorAll('.web-slide');
        
        slides.forEach(slide => {
            // Obtener el título del slide
            const titleElement = slide.querySelector('.web-slide-title');
            if (!titleElement) return;
            
            const slideTitle = titleElement.textContent.trim();
            
            // Buscar las tecnologías relacionadas
            const techIds = data.relations[slideTitle];
            if (!techIds || techIds.length === 0) return;
            
            // Obtener el contenedor de botones de tecnologías
            const techButtonsContainer = slide.querySelector('.web-slide-tech-buttons-container');
            if (!techButtonsContainer) return;
            
            // Limpiar el contenedor
            techButtonsContainer.innerHTML = '';
            
            // Crear botones para cada tecnología
            techIds.forEach(techId => {
                const tech = data.technologies.find(t => t.id === techId);
                if (!tech) return;
                
                // Crear el botón
                const button = document.createElement('button');
                button.className = 'tech-btn';
                button.setAttribute('data-tech-id', tech.id);
                button.setAttribute('data-tech-name', tech.nombre.toLowerCase());
                button.setAttribute('data-tech-description', tech.description);
                
                // Crear el icono
                const icon = document.createElement('i');
                icon.className = tech.icono;
                
                // Crear el span con el nombre
                const span = document.createElement('span');
                span.textContent = tech.nombre;
                
                // Agregar icono y texto al botón
                button.appendChild(icon);
                button.appendChild(span);
                
                // Agregar evento click para navegar a la tecnología específica
                button.addEventListener('click', function() {
                    navigateToTechnologies([tech.id]);
                });
                
                // Agregar el botón al contenedor
                techButtonsContainer.appendChild(button);
            });
        });
    } catch (error) {
        console.error('Error al cargar las tecnologías:', error);
    }
}

// Función para mostrar detalles de la tecnología (para implementar después)
function showTechDetails(tech) {
    console.log('Tecnología seleccionada:', tech);
    // Aquí puedes agregar la lógica para mostrar los detalles
    // Por ejemplo, abrir un modal, mostrar información, etc.
}

// Función para navegar a la sección de tecnologías y resaltar las relacionadas
function navigateToTechnologies(techIds) {
    if (!techIds || techIds.length === 0) return;
    
    // Buscar la primera tecnología relacionada
    const firstTechId = techIds[0];
    const techCard = document.getElementById(`tech-card-${firstTechId}`);
    
    if (techCard) {
        // Remover resaltado anterior
        document.querySelectorAll('.tech-card').forEach(card => {
            card.classList.remove('tech-card-highlighted');
        });
        
        // Calcular posición con offset para el header
        const headerOffset = 100;
        const elementPosition = techCard.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Scroll suave directamente a la tarjeta de la tecnología
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Esperar a que el scroll se complete y luego resaltar todas las tecnologías relacionadas
        setTimeout(() => {
            techIds.forEach(techId => {
                const card = document.getElementById(`tech-card-${techId}`);
                if (card) {
                    card.classList.add('tech-card-highlighted');
                }
            });
        }, 500);
    } else {
        // Si la tarjeta no existe aún, navegar a la sección y esperar
        const tecnologiasSection = document.getElementById('tecnologias');
        if (tecnologiasSection) {
            const headerOffset = 100;
            const elementPosition = tecnologiasSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Intentar de nuevo después de un delay
            setTimeout(() => {
                navigateToTechnologies(techIds);
            }, 800);
        }
    }
}

// Cargar tecnologías cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTechnologies);
} else {
    loadTechnologies();
}

