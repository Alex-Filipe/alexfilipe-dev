import type { PortfolioContent } from "../types/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Alex-Filipe",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-filipe-7b0108160/",
  },
  {
    label: "Email",
    href: "mailto:alexfilipe0508@gmail.com",
  },
];

export const portfolioContent: Record<string, PortfolioContent> = {
  "pt-BR": {
    language: "pt-BR",
    navigation: [
      { label: "Sobre", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experiência", href: "#experience" },
      { label: "Projetos", href: "#projects" },
      { label: "Formação", href: "#education" },
      { label: "Contato", href: "#contact" },
    ],
    profile: {
      name: "Alex Filipe",
      role: "Software Engineer",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      headline:
        "Desenvolvo APIs, integrações e sistemas empresariais com foco em qualidade, manutenção e performance.",
      summary:
        "Sou engenheiro de software com foco em desenvolvimento backend, APIs, integrações de sistemas e aplicações escaláveis. Trabalho principalmente com C#, .NET, bancos relacionais e boas práticas de engenharia, mantendo também experiência em front-end com React e Vue.js.",
      shortIntro:
        "Atuo na evolução de sistemas corporativos, conectando serviços, dados e processos com uma base técnica sólida em .NET, arquitetura de software e integrações.",
    },
    heroMetrics: [
      { label: "Foco", value: "Backend" },
      { label: "Stack", value: ".NET / C#" },
      { label: "Pesquisa", value: "IA" },
    ],
    socialLinks,
    sections: {
      experience: {
        eyebrow: "Experiência",
        title: "Sistemas, APIs e integrações em produção",
        description:
          "Experiência em desenvolvimento backend, evolução de sistemas corporativos, integrações e sustentação de soluções empresariais.",
      },
      projects: {
        eyebrow: "Projetos",
        title: "Espaço preparado para cases reais",
        description:
          "A seção de projetos está pronta para receber estudos de caso, repositórios e entregas publicáveis sem criar informações fictícias.",
      },
      skills: {
        eyebrow: "Tech stack",
        title: "Tecnologias que uso para construir e integrar sistemas",
        description:
          "Uma visão organizada das linguagens, frameworks, bancos, ferramentas e práticas citadas no meu perfil profissional.",
      },
      education: {
        eyebrow: "Formação",
        title: "Base acadêmica e pesquisa",
        description:
          "Minha formação conecta engenharia de software com pesquisa em IA eficiente e destilação de conhecimento.",
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos conversar sobre tecnologia, produto e carreira",
        description:
          "Estou aberto a conexões profissionais, oportunidades e conversas sobre desenvolvimento de software, backend, integrações e aplicações de IA.",
      },
    },
    experiences: [
      {
        company: "Rehagro",
        role: "Engenheiro de software",
        period: "out de 2024 - o momento",
        location: "Belo Horizonte, MG · Remoto",
        description:
          "Atuo no desenvolvimento e evolução de sistemas empresariais, com foco em backend, APIs, integrações e serviços escaláveis usando C# e .NET. No dia a dia, contribuo para soluções que conectam dados, processos e diferentes sistemas corporativos, mantendo atenção à qualidade do código, manutenção e performance.",
        highlights: [
          "Desenvolvimento de APIs e serviços em C#/.NET.",
          "Integrações entre sistemas corporativos, filas e Service Bus.",
          "Trabalho com PostgreSQL, SQL Server, Docker e boas práticas de engenharia.",
        ],
      },
      {
        company: "Metadados",
        role: "Associate Software Developer",
        period: "jul de 2024 - set de 2024",
        location: "Caxias do Sul, RS · Remoto",
        description:
          "Experiência em desenvolvimento de software em ambiente remoto, contribuindo para sistemas corporativos e sustentação de soluções. A atuação reforçou minha prática em colaboração técnica, análise de demandas e evolução incremental de sistemas em um contexto profissional distribuído.",
        highlights: [
          "Participação em rotinas de desenvolvimento e manutenção de software.",
          "Colaboração com equipe técnica em demandas de sistemas empresariais.",
          "Aplicação de práticas de versionamento, análise e resolução de problemas.",
        ],
      },
      {
        company: "Rehagro",
        role: "Engenheiro de software júnior",
        period: "out de 2023 - abr de 2024",
        location: "Belo Horizonte, MG · Remoto",
        description:
          "Atuei no desenvolvimento de APIs, interfaces e integrações, contribuindo para a melhoria de sistemas internos e fluxos de processo. Também participei de manutenções em sistemas PHP/Laravel, implementação de telas com React, integrações com plataformas externas e apoio em ambientes de produção.",
        highlights: [
          "Desenvolvimento de APIs e serviços em C#/.NET.",
          "Implementação de front-end com React e manutenção de sistemas PHP/Laravel.",
          "Integrações com ERP Senior, CRM HubSpot e plataforma iPaaS Digibee.",
          "Configuração de pipelines no Azure DevOps e apoio em ambientes de produção.",
        ],
      },
    ],
    projects: [
      {
        title: "Projetos profissionais em organização",
        description:
          "Meu LinkedIn ainda não lista projetos públicos específicos. Esta área está preparada para receber estudos de caso, repositórios e entregas selecionadas conforme forem organizados para publicação.",
        stack: ["C#", ".NET", "React", "APIs", "Integrações"],
      },
    ],
    skillGroups: [
      {
        title: "Backend",
        items: ["C#", ".NET", ".NET Framework", "REST APIs", "PHP", "Laravel"],
      },
      {
        title: "Front-end",
        items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Bancos de dados",
        items: ["PostgreSQL", "SQL Server", "Modelagem de dados", "SQL"],
      },
      {
        title: "Integrações",
        items: ["System integrations", "Service Bus", "ERP Senior", "HubSpot", "Digibee"],
      },
      {
        title: "Engenharia",
        items: ["Git", "Azure DevOps", "Docker", "SOLID", "Clean Code", "Testes unitários"],
      },
      {
        title: "Pesquisa",
        items: ["Destilação de conhecimento", "Visão computacional", "Deep Learning", "Python"],
      },
    ],
    education: [
      {
        title: "Mestrado em Ciência da Computação",
        institution: "Programa de Pós-Graduação em Ciência da Computação (PPGCC)",
        status: "Em andamento",
        description:
          "Pesquisa em destilação de conhecimento para criar modelos de IA mais eficientes, aplicada à detecção de violência em vídeos de vigilância.",
        highlights: [
          "Destilação de conhecimento (modelo professor → estudante).",
          "Detecção de violência em vídeos de vigilância.",
          "Modelos eficientes com menor custo computacional.",
        ],
      },
      {
        title: "Graduação em Engenharia de Software",
        institution: "Formação acadêmica",
        status: "Concluído",
        description:
          "Formação voltada para desenvolvimento de software, arquitetura de sistemas, qualidade de código, bancos de dados e práticas de engenharia aplicadas à construção de soluções digitais.",
        highlights: [
          "Desenvolvimento de software e arquitetura de sistemas.",
          "Qualidade de código, bancos de dados e práticas de engenharia.",
          "Base acadêmica para construção de soluções digitais.",
        ],
      },
    ],
  },
  "en-US": {
    language: "en-US",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Alex Filipe",
      role: "Software Engineer",
      location: "Belo Horizonte, Minas Gerais, Brazil",
      headline:
        "I build APIs, integrations, and enterprise systems with a focus on quality, maintainability, and performance.",
      summary:
        "I am a software engineer focused on backend development, APIs, system integrations, and scalable applications. I work mainly with C#, .NET, relational databases, and software engineering best practices, while also bringing front-end experience with React and Vue.js.",
      shortIntro:
        "My work connects services, data, and business processes through a solid foundation in .NET, software architecture, and system integrations.",
    },
    heroMetrics: [
      { label: "Focus", value: "Backend" },
      { label: "Stack", value: ".NET / C#" },
      { label: "Research", value: "AI" },
    ],
    socialLinks,
    sections: {
      experience: {
        eyebrow: "Experience",
        title: "Systems, APIs, and integrations in production",
        description:
          "Backend development experience across enterprise systems, integrations, scalable services, and production support.",
      },
      projects: {
        eyebrow: "Projects",
        title: "A space prepared for real case studies",
        description:
          "My LinkedIn profile does not list public projects yet, so this section is ready for future case studies, repositories, and selected work without adding fictional information.",
      },
      skills: {
        eyebrow: "Tech stack",
        title: "Technologies I use to build and integrate systems",
        description:
          "A clear view of the languages, frameworks, databases, tools, and practices referenced in my professional profile.",
      },
      education: {
        eyebrow: "Education",
        title: "Academic background and research",
        description:
          "My background connects software engineering with research in efficient AI and knowledge distillation.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's talk about technology, product, and career",
        description:
          "I am open to professional connections, opportunities, and conversations about software development, backend engineering, integrations, and AI applications.",
      },
    },
    experiences: [
      {
        company: "Rehagro",
        role: "Software Engineer",
        period: "Oct 2024 - Present",
        location: "Belo Horizonte, MG · Remote",
        description:
          "I work on the development and evolution of enterprise systems, focusing on backend engineering, APIs, integrations, and scalable services with C# and .NET. My daily work connects data, processes, and different corporate systems while keeping attention on code quality, maintainability, and performance.",
        highlights: [
          "Development of APIs and services with C#/.NET.",
          "Integrations between enterprise systems, queues, and Service Bus.",
          "Work with PostgreSQL, SQL Server, Docker, and software engineering best practices.",
        ],
      },
      {
        company: "Metadados",
        role: "Associate Software Developer",
        period: "Jul 2024 - Sep 2024",
        location: "Caxias do Sul, RS · Remote",
        description:
          "Software development experience in a remote environment, contributing to enterprise systems and solution maintenance. This role strengthened my practice in technical collaboration, demand analysis, and incremental system evolution in a distributed professional context.",
        highlights: [
          "Participation in software development and maintenance routines.",
          "Collaboration with technical teams on enterprise system demands.",
          "Application of version control, analysis, and problem-solving practices.",
        ],
      },
      {
        company: "Rehagro",
        role: "Junior Software Engineer",
        period: "Oct 2023 - Apr 2024",
        location: "Belo Horizonte, MG · Remote",
        description:
          "I worked on APIs, interfaces, and integrations, contributing to internal systems and process improvements. I also supported PHP/Laravel systems, implemented React interfaces, worked with external platform integrations, and helped with production environment demands.",
        highlights: [
          "Development of APIs and services with C#/.NET.",
          "Front-end implementation with React and maintenance of PHP/Laravel systems.",
          "Integrations with Senior ERP, HubSpot CRM, and the Digibee iPaaS platform.",
          "Azure DevOps pipeline configuration and support for production environments.",
        ],
      },
    ],
    projects: [
      {
        title: "Professional projects in progress",
        description:
          "My LinkedIn profile does not list specific public projects yet. This area is prepared for case studies, repositories, and selected work as they become ready for publication.",
        stack: ["C#", ".NET", "React", "APIs", "Integrations"],
      },
    ],
    skillGroups: [
      {
        title: "Backend",
        items: ["C#", ".NET", ".NET Framework", "REST APIs", "PHP", "Laravel"],
      },
      {
        title: "Front-end",
        items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "SQL Server", "Data modeling", "SQL"],
      },
      {
        title: "Integrations",
        items: ["System integrations", "Service Bus", "Senior ERP", "HubSpot", "Digibee"],
      },
      {
        title: "Engineering",
        items: ["Git", "Azure DevOps", "Docker", "SOLID", "Clean Code", "Unit testing"],
      },
      {
        title: "Research",
        items: ["Knowledge distillation", "Computer vision", "Deep Learning", "Python"],
      },
    ],
    education: [
      {
        title: "Master's Degree in Computer Science",
        institution: "Graduate Program in Computer Science (PPGCC)",
        status: "In progress",
        description:
          "Research on knowledge distillation to build more efficient AI models, applied to violence detection in surveillance videos.",
        highlights: [
          "Knowledge distillation (teacher → student models).",
          "Violence detection in surveillance video.",
          "Efficient models with lower computational cost.",
        ],
      },
      {
        title: "Bachelor's Degree in Software Engineering",
        institution: "Academic background",
        status: "Completed",
        description:
          "Education focused on software development, systems architecture, code quality, databases, and engineering practices applied to digital solutions.",
        highlights: [
          "Software development and systems architecture.",
          "Code quality, databases, and engineering practices.",
          "Academic foundation for building digital solutions.",
        ],
      },
    ],
  },
};
