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
      { label: "Experiência", href: "#experience" },
      { label: "Projetos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Formação", href: "#education" },
      { label: "Contato", href: "#contact" },
    ],
    profile: {
      name: "Alex Filipe",
      role: "Software Engineer (.NET / C#)",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      headline:
        "Desenvolvo APIs, integrações e sistemas empresariais com foco em qualidade, manutenção e performance.",
      summary:
        "Sou engenheiro de software com foco em desenvolvimento backend, APIs, integrações de sistemas e aplicações escaláveis. Trabalho principalmente com C#, .NET, bancos relacionais e boas práticas de engenharia, mantendo também experiência em front-end com React e Vue.js.",
      shortIntro:
        "Atuo na evolução de sistemas corporativos, conectando serviços, dados e processos com uma base técnica sólida em .NET, arquitetura de software e integrações.",
    },
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
          "Minha formação atual conecta engenharia de software com pesquisa aplicada em Inteligência Artificial.",
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
          "Atuo no desenvolvimento e evolução de sistemas empresariais, com foco em backend, APIs, integrações e serviços escaláveis usando C# e .NET.",
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
          "Experiência em desenvolvimento de software em ambiente remoto, contribuindo para sistemas corporativos e sustentação de soluções.",
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
          "Atuei no desenvolvimento de APIs, interfaces e integrações, contribuindo para a melhoria de sistemas internos e fluxos de processo.",
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
        title: "Bancos de dados",
        items: ["PostgreSQL", "SQL Server", "Modelagem de dados", "SQL"],
      },
      {
        title: "Integrações",
        items: ["System integrations", "Service Bus", "ERP Senior", "HubSpot", "Digibee"],
      },
      {
        title: "Front-end",
        items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Engenharia",
        items: ["Git", "Azure DevOps", "Docker", "SOLID", "Clean Code", "Testes unitários"],
      },
      {
        title: "Pesquisa",
        items: ["Inteligência Artificial", "Sistemas inteligentes", "Python"],
      },
    ],
    education: [
      {
        title: "Mestrado em Ciência da Computação",
        institution: "PPGCC",
        status: "Em andamento",
        description:
          "Pesquisa com foco em Inteligência Artificial, explorando como técnicas de IA podem ser aplicadas na construção de sistemas inteligentes e soluções tecnológicas inovadoras.",
      },
      {
        title: "Graduação em Engenharia de Software",
        institution: "Formação acadêmica",
        status: "Concluído",
        description:
          "Formação voltada para desenvolvimento de software, arquitetura de sistemas, qualidade de código, bancos de dados e práticas de engenharia aplicadas à construção de soluções digitais.",
      },
    ],
  },
  "en-US": {
    language: "en-US",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Alex Filipe",
      role: "Software Engineer (.NET / C#)",
      location: "Belo Horizonte, Minas Gerais, Brazil",
      headline:
        "I build APIs, integrations, and enterprise systems with a focus on quality, maintainability, and performance.",
      summary:
        "I am a software engineer focused on backend development, APIs, system integrations, and scalable applications. I work mainly with C#, .NET, relational databases, and software engineering best practices, while also bringing front-end experience with React and Vue.js.",
      shortIntro:
        "My work connects services, data, and business processes through a solid foundation in .NET, software architecture, and system integrations.",
    },
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
          "My current academic path connects software engineering with applied research in Artificial Intelligence.",
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
          "I work on the development and evolution of enterprise systems, focusing on backend engineering, APIs, integrations, and scalable services with C# and .NET.",
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
          "Software development experience in a remote environment, contributing to enterprise systems and solution maintenance.",
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
          "I worked on APIs, interfaces, and integrations, contributing to internal systems and process improvements.",
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
        title: "Databases",
        items: ["PostgreSQL", "SQL Server", "Data modeling", "SQL"],
      },
      {
        title: "Integrations",
        items: ["System integrations", "Service Bus", "Senior ERP", "HubSpot", "Digibee"],
      },
      {
        title: "Front-end",
        items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Engineering",
        items: ["Git", "Azure DevOps", "Docker", "SOLID", "Clean Code", "Unit testing"],
      },
      {
        title: "Research",
        items: ["Artificial Intelligence", "Intelligent systems", "Python"],
      },
    ],
    education: [
      {
        title: "Master's Degree in Computer Science",
        institution: "PPGCC",
        status: "In progress",
        description:
          "Research focused on Artificial Intelligence, exploring how AI techniques can be applied to build intelligent systems and innovative technology solutions.",
      },
      {
        title: "Bachelor's Degree in Software Engineering",
        institution: "Academic background",
        status: "Completed",
        description:
          "Education focused on software development, systems architecture, code quality, databases, and engineering practices applied to digital solutions.",
      },
    ],
  },
};
