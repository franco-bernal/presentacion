// Base de datos de tecnologías
const technologiesData = {
  technologies: [
    {
      id: 1,
      nombre: "HTML",
      description: "Lenguaje de marcado estándar para crear la estructura y el contenido de páginas web. Define los elementos y su jerarquía en el documento.",
      icono: "fab fa-html5"
    },
    {
      id: 2,
      nombre: "CSS",
      description: "Lenguaje de estilos que controla la presentación visual de las páginas web. Define colores, tipografías, layouts y animaciones.",
      icono: "fab fa-css3-alt"
    },
    {
      id: 3,
      nombre: "JavaScript",
      description: "Lenguaje de programación que añade interactividad a las páginas web. Permite crear funcionalidades dinámicas y responder a eventos del usuario.",
      icono: "fab fa-js"
    },
    {
      id: 4,
      nombre: "ReactJS",
      description: "Biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y aplicaciones de una sola página (SPA) eficientes.",
      icono: "fab fa-react"
    },
    {
      id: 5,
      nombre: "Angular",
      description: "Framework de JavaScript para desarrollar aplicaciones web complejas. Proporciona una estructura completa para aplicaciones empresariales escalables.",
      icono: "fab fa-angular"
    },
    {
      id: 6,
      nombre: "VueJS",
      description: "Framework progresivo de JavaScript para construir interfaces de usuario. Combina simplicidad con potencia para aplicaciones modernas.",
      icono: "fab fa-vuejs"
    },
    {
      id: 7,
      nombre: "NextJS",
      description: "Framework de React para producción. Ofrece renderizado del lado del servidor, generación de sitios estáticos y optimizaciones automáticas.",
      icono: "fab fa-react"
    },
    {
      id: 8,
      nombre: "Python",
      description: "Lenguaje de programación versátil usado para desarrollo backend, análisis de datos, automatización y aplicaciones web con frameworks como Django y Flask.",
      icono: "fab fa-python"
    },
    {
      id: 9,
      nombre: "PHP",
      description: "Lenguaje de programación del lado del servidor especialmente diseñado para desarrollo web. Ampliamente usado en sitios dinámicos y sistemas de gestión de contenido.",
      icono: "fab fa-php"
    },
    {
      id: 10,
      nombre: "PRESTASHOP",
      description: "Plataforma de e-commerce open source para crear tiendas online. Ofrece gestión completa de productos, pedidos, clientes y pagos.",
      icono: "fas fa-shopping-cart"
    },
    {
      id: 11,
      nombre: "WORDPRESS",
      description: "Sistema de gestión de contenido (CMS) más popular del mundo. Permite crear y administrar sitios web, blogs y tiendas online de forma sencilla.",
      icono: "fab fa-wordpress"
    },
    {
      id: 12,
      nombre: "tiendas a medida",
      description: "Soluciones de e-commerce completamente personalizadas desarrolladas desde cero. Adaptadas a las necesidades específicas de cada negocio con funcionalidades únicas.",
      icono: "fas fa-store"
    },
    {
      id: 13,
      nombre: "Golang",
      description: "Lenguaje de programación desarrollado por Google, ideal para microservicios y aplicaciones de alto rendimiento. Conocido por su simplicidad y eficiencia.",
      icono: "fas fa-code"
    },
    {
      id: 14,
      nombre: "Rust",
      description: "Lenguaje de programación de sistemas que garantiza seguridad de memoria y alto rendimiento. Perfecto para microservicios y aplicaciones críticas.",
      icono: "fas fa-cog"
    },
    {
      id: 15,
      nombre: "Django",
      description: "Framework web de alto nivel para Python que fomenta el desarrollo rápido y el diseño limpio. Ideal para aplicaciones backend robustas.",
      icono: "fab fa-python"
    },
    {
      id: 16,
      nombre: "Java",
      description: "Lenguaje de programación orientado a objetos ampliamente usado en desarrollo empresarial. Ideal para aplicaciones backend escalables y robustas.",
      icono: "fab fa-java"
    },
    {
      id: 17,
      nombre: "C++",
      description: "Lenguaje de programación de propósito general que ofrece control de bajo nivel y alto rendimiento. Usado en sistemas críticos y aplicaciones de alto rendimiento.",
      icono: "fas fa-code"
    },
    {
      id: 18,
      nombre: "C#",
      description: "Lenguaje de programación moderno desarrollado por Microsoft. Ideal para desarrollo backend con .NET, aplicaciones empresariales y servicios web.",
      icono: "fab fa-microsoft"
    },
    {
      id: 19,
      nombre: "MySQL",
      description: "Sistema de gestión de bases de datos relacionales open source. Ampliamente usado en aplicaciones web para almacenar y gestionar datos estructurados.",
      icono: "fas fa-database"
    },
    {
      id: 20,
      nombre: "MongoDB",
      description: "Base de datos NoSQL orientada a documentos. Ideal para aplicaciones que requieren flexibilidad en el esquema y escalabilidad horizontal.",
      icono: "fas fa-database"
    },
    {
      id: 21,
      nombre: "Oracle",
      description: "Sistema de gestión de bases de datos empresariales de alto rendimiento. Usado en aplicaciones críticas que requieren máxima confiabilidad y escalabilidad.",
      icono: "fas fa-database"
    },
    {
      id: 22,
      nombre: "SQL Server",
      description: "Sistema de gestión de bases de datos relacionales de Microsoft. Ideal para aplicaciones empresariales que requieren integración con el ecosistema Microsoft.",
      icono: "fas fa-database"
    },
    {
      id: 23,
      nombre: "PostgreSQL",
      description: "Sistema de gestión de bases de datos relacionales open source avanzado. Ofrece características avanzadas y es ideal para aplicaciones complejas.",
      icono: "fas fa-database"
    },
    {
      id: 24,
      nombre: "Docker",
      description: "Plataforma de contenedores que permite empaquetar aplicaciones y sus dependencias. Facilita el despliegue y la escalabilidad de aplicaciones.",
      icono: "fab fa-docker"
    },
    {
      id: 25,
      nombre: "Kubernetes",
      description: "Sistema de orquestación de contenedores para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores.",
      icono: "fab fa-kubernetes"
    },
    {
      id: 26,
      nombre: "Traefik",
      description: "Proxy reverso y balanceador de carga moderno para microservicios. Facilita el enrutamiento y la gestión de tráfico.",
      icono: "fas fa-network-wired"
    },
    {
      id: 27,
      nombre: "Jenkins",
      description: "Servidor de automatización open source para implementar pipelines de CI/CD. Permite automatizar tareas de construcción, prueba y despliegue.",
      icono: "fab fa-jenkins"
    },
    {
      id: 28,
      nombre: "GitHub Actions",
      description: "Plataforma de CI/CD integrada en GitHub. Permite automatizar workflows de desarrollo, testing y despliegue directamente desde el repositorio.",
      icono: "fab fa-github"
    },
    {
      id: 29,
      nombre: "Ubuntu",
      description: "Distribución de Linux basada en Debian, ampliamente usada en servidores. Conocida por su facilidad de uso y soporte comunitario.",
      icono: "fab fa-ubuntu"
    },
    {
      id: 30,
      nombre: "CentOS",
      description: "Distribución de Linux empresarial basada en Red Hat Enterprise Linux. Ideal para servidores que requieren estabilidad y seguridad.",
      icono: "fab fa-linux"
    },
    {
      id: 31,
      nombre: "AWS",
      description: "Amazon Web Services, plataforma de computación en la nube líder. Ofrece servicios de infraestructura, almacenamiento y computación escalables.",
      icono: "fab fa-aws"
    },
    {
      id: 32,
      nombre: "Azure",
      description: "Plataforma de servicios en la nube de Microsoft. Ofrece soluciones de infraestructura, desarrollo y gestión empresarial.",
      icono: "fab fa-microsoft"
    },
    {
      id: 33,
      nombre: "GCP",
      description: "Google Cloud Platform, suite de servicios en la nube de Google. Ofrece infraestructura, machine learning y análisis de datos.",
      icono: "fab fa-google"
    },
    {
      id: 34,
      nombre: "JUnit",
      description: "Framework de testing para Java. Permite escribir y ejecutar pruebas unitarias para asegurar la calidad del código.",
      icono: "fas fa-vial"
    },
    {
      id: 35,
      nombre: "Selenium",
      description: "Framework de automatización para pruebas de aplicaciones web. Permite automatizar navegadores para testing funcional y de regresión.",
      icono: "fas fa-spider"
    },
    {
      id: 36,
      nombre: "SQLmap",
      description: "Herramienta de código abierto para pruebas de penetración que automatiza la detección y explotación de vulnerabilidades de inyección SQL.",
      icono: "fas fa-shield-alt"
    },
    {
      id: 37,
      nombre: "SonarQube",
      description: "Plataforma de análisis de calidad de código. Detecta bugs, vulnerabilidades y code smells para mantener estándares de código.",
      icono: "fas fa-search"
    },
    {
      id: 38,
      nombre: "Machine Learning",
      description: "Rama de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de datos sin programación explícita.",
      icono: "fas fa-brain"
    },
    {
      id: 39,
      nombre: "Deep Learning",
      description: "Subconjunto del machine learning que utiliza redes neuronales profundas para procesar y aprender de grandes volúmenes de datos complejos.",
      icono: "fas fa-project-diagram"
    },
    {
      id: 40,
      nombre: "Data Mining",
      description: "Proceso de descubrimiento de patrones y conocimiento a partir de grandes conjuntos de datos. Extrae información valiosa para la toma de decisiones.",
      icono: "fas fa-chart-line"
    },
    {
      id: 41,
      nombre: "NLP",
      description: "Procesamiento de Lenguaje Natural. Tecnología que permite a las máquinas entender, interpretar y generar lenguaje humano de forma natural.",
      icono: "fas fa-language"
    }
  ],
  relations: {
    "LANDING": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "E-commerce y CMS": [10, 11, 12],
    "DESARROLLOS A MEDIDA": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "MICROSERVICIOS": [13, 14, 8, 15, 16, 17, 18],
    "BASES DE DATOS": [19, 20, 21, 22, 23],
    "DEVOPS Y DESPLIEGUE": [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    "CIBERSEGURIDAD": [36, 37],
    "IA Y MACHINE LEARNING": [38, 39, 40, 41]
  }
};

