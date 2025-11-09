// Función para cargar y renderizar stacks dinámicamente
function loadStacks() {
    try {
        // Usar los datos directamente del archivo stacks-data.js
        if (typeof stacksData === 'undefined') {
            console.error('stacksData no está disponible. Asegúrate de cargar stacks-data.js antes de stacks.js');
            return;
        }
        
        const data = stacksData;
        
        // Obtener el contenedor de botones de stacks
        const stacksContainer = document.querySelector('.stacks-buttons-container');
        if (!stacksContainer) {
            console.error('Contenedor de stacks no encontrado');
            return;
        }
        
        // Limpiar el contenedor
        stacksContainer.innerHTML = '';
        
        // Crear botones para cada stack
        data.stacks.forEach(stack => {
            const button = document.createElement('button');
            button.className = 'stack-btn';
            button.setAttribute('data-stack-id', stack.id);
            button.setAttribute('data-stack-name', stack.nombre.toLowerCase());
            button.textContent = stack.nombre;
            
            // Agregar evento click (para futura funcionalidad)
            button.addEventListener('click', function() {
                showStackDetails(stack);
            });
            
            // Agregar el botón al contenedor
            stacksContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Error al cargar los stacks:', error);
    }
}

// Función para navegar a la tarjeta del stack en el grid
function navigateToStack(stackId) {
    const stackCard = document.getElementById(`stack-card-${stackId}`);
    
    if (stackCard) {
        // Remover resaltado anterior
        document.querySelectorAll('.stack-card').forEach(card => {
            card.classList.remove('stack-card-highlighted');
        });
        
        // Calcular posición con offset para el header
        const headerOffset = 100;
        const elementPosition = stackCard.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Scroll suave directamente a la tarjeta del stack
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Esperar a que el scroll se complete y luego resaltar
        setTimeout(() => {
            stackCard.classList.add('stack-card-highlighted');
        }, 500);
    } else {
        // Si la tarjeta no existe aún, navegar a la sección y esperar
        const stacksSection = document.getElementById('stacks');
        if (stacksSection) {
            const headerOffset = 100;
            const elementPosition = stacksSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Intentar de nuevo después de un delay
            setTimeout(() => {
                navigateToStack(stackId);
            }, 800);
        }
    }
}

// Función para mostrar detalles del stack
function showStackDetails(stack) {
    navigateToStack(stack.id);
}

// Cargar stacks cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadStacks);
} else {
    loadStacks();
}

