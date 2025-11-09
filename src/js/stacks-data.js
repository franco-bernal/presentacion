// Base de datos de stacks tecnológicos
const stacksData = {
  stacks: [
    {
      id: 1,
      nombre: "MERN",
      tecnologias: ["MongoDB", "Express.js", "React", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack completo de JavaScript que combina MongoDB para base de datos NoSQL, Express.js para el backend, React para el frontend y Node.js como entorno de ejecución. Ideal para aplicaciones web modernas y escalables."
    },
    {
      id: 2,
      nombre: "MEAN",
      tecnologias: ["MongoDB", "Express.js", "Angular", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack full stack con MongoDB, Express.js, Angular y Node.js. Angular proporciona una estructura robusta para aplicaciones empresariales complejas, mientras MongoDB ofrece flexibilidad en el esquema de datos."
    },
    {
      id: 3,
      nombre: "MEVN",
      tecnologias: ["MongoDB", "Express.js", "Vue.js", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack moderno que combina MongoDB, Express.js, Vue.js y Node.js. Vue.js ofrece simplicidad y rendimiento, ideal para aplicaciones que requieren una curva de aprendizaje suave y desarrollo rápido."
    },
    {
      id: 4,
      nombre: "PERN",
      tecnologias: ["PostgreSQL", "Express.js", "React", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack full stack JavaScript con PostgreSQL como base de datos relacional. Combina la potencia de React con la confiabilidad y características avanzadas de PostgreSQL para aplicaciones que requieren transacciones ACID."
    },
    {
      id: 5,
      nombre: "PEAN",
      tecnologias: ["PostgreSQL", "Express.js", "Angular", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack completo con PostgreSQL, Express.js, Angular y Node.js. Ideal para aplicaciones empresariales que requieren base de datos relacional robusta y framework frontend con estructura completa."
    },
    {
      id: 6,
      nombre: "PEVN",
      tecnologias: ["PostgreSQL", "Express.js", "Vue.js", "Node.js"],
      categoria: "Full Stack JavaScript",
      descripcion: "Stack full stack con PostgreSQL, Express.js, Vue.js y Node.js. Combina la simplicidad de Vue.js con la potencia de PostgreSQL para aplicaciones que requieren flexibilidad y rendimiento."
    },
    {
      id: 7,
      nombre: "Django Stack",
      tecnologias: ["Django", "PostgreSQL", "Python"],
      categoria: "Python",
      descripcion: "Stack de Python con Django como framework web de alto nivel. Django proporciona un ORM potente, sistema de autenticación y administración automática. Ideal para aplicaciones web complejas y escalables."
    },
    {
      id: 8,
      nombre: "Python Flask",
      tecnologias: ["Flask", "PostgreSQL", "Python"],
      categoria: "Python",
      descripcion: "Stack ligero de Python con Flask como microframework. Flask ofrece flexibilidad y control total sobre la estructura de la aplicación. Perfecto para APIs REST y aplicaciones web ligeras."
    },
    {
      id: 9,
      nombre: "LAMP/LEMP",
      tecnologias: ["Linux", "Apache/Nginx", "MySQL", "PHP"],
      categoria: "PHP",
      descripcion: "Stack tradicional de desarrollo web con Linux como sistema operativo, Apache o Nginx como servidor web, MySQL como base de datos y PHP como lenguaje de programación. Ampliamente usado y confiable."
    },
    {
      id: 10,
      nombre: "WordPress",
      tecnologias: ["WordPress", "PHP", "MySQL"],
      categoria: "PHP",
      descripcion: "Stack basado en WordPress, el CMS más popular del mundo. Permite crear y administrar sitios web, blogs y tiendas online de forma sencilla con extensibilidad mediante plugins y temas personalizados."
    },
    {
      id: 11,
      nombre: "PrestaShop",
      tecnologias: ["PrestaShop", "PHP", "MySQL"],
      categoria: "PHP",
      descripcion: "Stack especializado en e-commerce con PrestaShop como plataforma principal. PrestaShop ofrece gestión completa de productos, pedidos, clientes y pagos, ideal para tiendas online robustas."
    },
    {
      id: 12,
      nombre: "Java Enterprise",
      tecnologias: ["Java", "MySQL/Oracle", "PostgreSQL"],
      categoria: "Java",
      descripcion: "Stack empresarial con Java como lenguaje principal. Java Enterprise Edition proporciona APIs y servicios para aplicaciones empresariales escalables, con soporte para bases de datos relacionales robustas."
    },
    {
      id: 13,
      nombre: ".NET Stack",
      tecnologias: ["C#", "SQL Server", "Azure"],
      categoria: ".NET",
      descripcion: "Stack de Microsoft con C# como lenguaje, SQL Server como base de datos y Azure como plataforma cloud. Ideal para aplicaciones empresariales que requieren integración con el ecosistema Microsoft."
    },
    {
      id: 14,
      nombre: "Rust/Golang Microservices",
      tecnologias: ["Rust", "Golang", "Docker", "Kubernetes", "PostgreSQL"],
      categoria: "Microservicios",
      descripcion: "Stack de microservicios de alto rendimiento con Rust y Golang. Docker empaqueta las aplicaciones, Kubernetes las orquesta, y PostgreSQL asegura la integridad de datos. Ideal para sistemas críticos que requieren máximo rendimiento y seguridad."
    },
    {
      id: 15,
      nombre: "Next.js Stack",
      tecnologias: ["Next.js", "React", "Node.js", "PostgreSQL"],
      categoria: "Moderno",
      descripcion: "Stack moderno con Next.js, framework de React para producción. Ofrece renderizado del lado del servidor, generación de sitios estáticos y optimizaciones automáticas. Perfecto para aplicaciones web de alto rendimiento."
    },
    {
      id: 16,
      nombre: "Kubernetes Stack",
      tecnologias: ["Docker", "Kubernetes", "Traefik"],
      categoria: "DevOps",
      descripcion: "Stack de orquestación con Docker para contenedores, Kubernetes para automatización y escalado, y Traefik como proxy reverso. Facilita el despliegue, gestión y escalado de aplicaciones en contenedores."
    },
    {
      id: 17,
      nombre: "AWS Cloud",
      tecnologias: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
      categoria: "Cloud",
      descripcion: "Stack cloud con Amazon Web Services como plataforma principal. Combina servicios de AWS con contenedores Docker, orquestación Kubernetes y PostgreSQL. Ideal para aplicaciones escalables en la nube."
    },
    {
      id: 18,
      nombre: "Azure Cloud",
      tecnologias: ["Azure", "C#", "SQL Server", "Docker"],
      categoria: "Cloud",
      descripcion: "Stack cloud de Microsoft con Azure como plataforma, C# como lenguaje, SQL Server como base de datos y Docker para contenedores. Perfecto para aplicaciones empresariales en el ecosistema Microsoft."
    },
    {
      id: 19,
      nombre: "GCP Cloud",
      tecnologias: ["GCP", "Docker", "Kubernetes", "PostgreSQL"],
      categoria: "Cloud",
      descripcion: "Stack cloud con Google Cloud Platform. Combina servicios de GCP con Docker, Kubernetes y PostgreSQL. Ideal para aplicaciones que requieren machine learning, análisis de datos y escalabilidad global."
    },
    {
      id: 20,
      nombre: "Python AI/ML",
      tecnologias: ["Python", "Machine Learning", "Deep Learning", "NLP"],
      categoria: "IA/ML",
      descripcion: "Stack especializado en Inteligencia Artificial y Machine Learning con Python como lenguaje principal. Incluye Machine Learning, Deep Learning y Procesamiento de Lenguaje Natural para aplicaciones inteligentes y automatización."
    }
  ]
};
