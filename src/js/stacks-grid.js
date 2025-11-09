// Función para cargar y renderizar stacks en grid
function loadStacksGrid() {
    try {
        // Usar los datos directamente del archivo stacks-data.js
        if (typeof stacksData === 'undefined') {
            console.error('stacksData no está disponible. Asegúrate de cargar stacks-data.js antes de stacks-grid.js');
            return;
        }
        
        const data = stacksData;
        
        // Obtener el contenedor del grid de stacks
        const stacksGrid = document.querySelector('.stacks-grid');
        if (!stacksGrid) {
            console.error('Grid de stacks no encontrado');
            return;
        }
        
        // Limpiar el grid
        stacksGrid.innerHTML = '';
        
        // Crear tarjetas para cada stack
        data.stacks.forEach(stack => {
            const card = document.createElement('div');
            card.className = 'stack-card';
            card.id = `stack-card-${stack.id}`;
            card.setAttribute('data-stack-id', stack.id);
            
            // Crear lista de tecnologías con event listeners
            const tecnologiasContainer = document.createElement('div');
            tecnologiasContainer.className = 'stack-card-technologies';
            
            stack.tecnologias.forEach(techName => {
                const tag = document.createElement('span');
                tag.className = 'stack-tech-tag';
                tag.textContent = techName;
                tag.style.cursor = 'pointer';
                tag.setAttribute('data-tech-name', techName.toLowerCase());
                
                // Agregar evento click para navegar a la tecnología
                tag.addEventListener('click', function() {
                    navigateToTechnologyByName(techName);
                });
                
                tecnologiasContainer.appendChild(tag);
            });
            
            card.innerHTML = `
                <div class="stack-card-header">
                    <h3 class="stack-card-title">${stack.nombre}</h3>
                    <span class="stack-card-category">${stack.categoria}</span>
                </div>
                <div class="stack-card-content">
                    <p class="stack-card-description">${stack.descripcion}</p>
                </div>
            `;
            
            // Agregar el contenedor de tecnologías
            card.querySelector('.stack-card-content').appendChild(tecnologiasContainer);
            
            // Agregar la tarjeta al grid
            stacksGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar los stacks en grid:', error);
    }
}

// Función para navegar a una tecnología por nombre
function navigateToTechnologyByName(techName) {
    // Mapeo de nombres de tecnologías en stacks a nombres en la base de datos
    const techNameMap = {
        'mongodb': 'MongoDB',
        'express.js': 'JavaScript', // Express.js no está en la BD, usar JavaScript
        'express': 'JavaScript',
        'react': 'ReactJS',
        'node.js': 'JavaScript', // Node.js no está directamente, usar JavaScript
        'nodejs': 'JavaScript',
        'angular': 'Angular',
        'vue.js': 'VueJS',
        'vuejs': 'VueJS',
        'postgresql': 'PostgreSQL',
        'django': 'Django',
        'flask': 'Python', // Flask no está directamente, usar Python
        'python': 'Python',
        'php': 'PHP',
        'mysql': 'MySQL',
        'wordpress': 'WORDPRESS',
        'prestashop': 'PRESTASHOP',
        'java': 'Java',
        'c#': 'C#',
        'c++': 'C++',
        'sql server': 'SQL Server',
        'azure': 'Azure',
        'aws': 'AWS',
        'gcp': 'GCP',
        'docker': 'Docker',
        'kubernetes': 'Kubernetes',
        'traefik': 'Traefik',
        'rust': 'Rust',
        'golang': 'Golang',
        'go': 'Golang',
        'next.js': 'NextJS',
        'nextjs': 'NextJS',
        'machine learning': 'Machine Learning',
        'deep learning': 'Deep Learning',
        'nlp': 'NLP',
        'linux': 'Ubuntu', // Linux no está directamente, usar Ubuntu
        'apache/nginx': 'Ubuntu', // No está directamente
        'apache': 'Ubuntu',
        'nginx': 'Ubuntu',
        'mysql/oracle': 'MySQL', // Usar MySQL como default
        'oracle': 'Oracle'
    };
    
    // Normalizar el nombre
    const normalizedName = techName.toLowerCase().trim();
    const mappedName = techNameMap[normalizedName] || techName;
    
    // Buscar la tecnología en la base de datos
    if (typeof technologiesData === 'undefined') {
        console.error('technologiesData no está disponible');
        return;
    }
    
    // Buscar por nombre exacto o parcial (case-insensitive)
    const tech = technologiesData.technologies.find(t => {
        const techNameLower = t.nombre.toLowerCase();
        const mappedNameLower = mappedName.toLowerCase();
        const normalizedNameLower = normalizedName.toLowerCase();
        
        return techNameLower === mappedNameLower ||
               techNameLower === normalizedNameLower ||
               techNameLower.includes(normalizedNameLower) ||
               normalizedNameLower.includes(techNameLower) ||
               techNameLower.replace(/\s+/g, '') === normalizedNameLower.replace(/\s+/g, '') ||
               techNameLower.replace(/[.\-]/g, '') === normalizedNameLower.replace(/[.\-]/g, '');
    });
    
    if (tech) {
        // Navegar a la tecnología usando la función existente
        if (typeof navigateToTechnologies === 'function') {
            navigateToTechnologies([tech.id]);
        } else {
            // Si la función no existe, usar scroll directo
            const techCard = document.getElementById(`tech-card-${tech.id}`);
            if (techCard) {
                const headerOffset = 100;
                const elementPosition = techCard.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    document.querySelectorAll('.tech-card').forEach(card => {
                        card.classList.remove('tech-card-highlighted');
                    });
                    techCard.classList.add('tech-card-highlighted');
                }, 500);
            }
        }
    } else {
        console.warn(`Tecnología "${techName}" no encontrada en la base de datos`);
    }
}

// Cargar stacks cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadStacksGrid);
} else {
    loadStacksGrid();
}

