const SKILL_CATEGORIES = {
    language: {
        text: "Programming Languages",
        tagCssName: "language-border-color"
    },
    library: {
        text: "Frameworks/Libraries",
        tagCssName: "library-border-color"
    },
    pattern: {
        text: "Architectural Patterns",
        tagCssName: "pattern-border-color"
    },
    tool: {
        text: "Tools",
        tagCssName: "tool-border-color"
    },
    foreign: {
        text: "Foreign Languages"

    }
};

const SKILLS = {
    cSharp: {
        rank: 10,
        name: "C#",
        category: SKILL_CATEGORIES.language,
    },
    tSql: {
        rank: 20,
        name: "T-SQL",
        category: SKILL_CATEGORIES.language,
    },
    js: {
        rank: 30,
        name: "JS",
        category: SKILL_CATEGORIES.language,
    },
    css: {
        rank: 40,
        name: "CSS",
        category: SKILL_CATEGORIES.language,
    },
    html: {
        rank: 50,
        name: "HTML",
        category: SKILL_CATEGORIES.language,
    },
    powerBuilder: {
        rank: 60,
        name: "PowerBuilder",
        category: SKILL_CATEGORIES.language,
    },
    linq: {
        rank: 10,
        name: "LINQ",
        category: SKILL_CATEGORIES.library,
    },
    aspDotNET: {
        rank: 20,
        name: "ASP.NET",
        category: SKILL_CATEGORIES.library,
    },
    jquery: {
        rank: 30,
        name: "jQuery",
        category: SKILL_CATEGORIES.library,
    },
    ef: {
        rank: 40,
        name: "EF",
        category: SKILL_CATEGORIES.library,
    },
    dom: {
        rank: 50,
        name: "DOM",
        category: SKILL_CATEGORIES.library,
    },
    json: {
        rank: 60,
        name: "JSON",
        category: SKILL_CATEGORIES.library,
    },
    xml: {
        rank: 70,
        name: "XML",
        category: SKILL_CATEGORIES.library,
    },
    jest: {
        rank: 80,
        name: "Jest",
        category: SKILL_CATEGORIES.library,
    },
    restfulAPI: {
        rank: 10,
        name: "RESTful API",
        category: SKILL_CATEGORIES.pattern,
    },
    mvc: {
        rank: 20,
        name: "MVC",
        category: SKILL_CATEGORIES.pattern,
    },
    tdd: {
        rank: 30,
        name: "TDD",
        category: SKILL_CATEGORIES.pattern,
    },
    oop: {
        rank: 40,
        name: "OOP",
        category: SKILL_CATEGORIES.pattern,
    },
    solid: {
        rank: 50,
        name: "SOLID",
        category: SKILL_CATEGORIES.pattern,
    },
    boxModel: {
        rank: 60,
        name: "Box Model",
        category: SKILL_CATEGORIES.pattern,
    },
    visualStudio: {
        rank: 10,
        name: "Visual Studio",
        category: SKILL_CATEGORIES.tool,
    },
    msSQLServer: {
        rank: 20,
        name: "Microsoft SQL Server",
        category: SKILL_CATEGORIES.tool,
    },
    gitHub: {
        rank: 30,
        name: "GitHub",
        category: SKILL_CATEGORIES.tool,
    },
    jira: {
        rank: 40,
        name: "Jira",
        category: SKILL_CATEGORIES.tool,
    },
    workflowServer: {
        rank: 50,
        name: "Workflow Server",
        category: SKILL_CATEGORIES.tool,
    },
    intermediateJapanese: {
        rank: 10,
        name: "Intermediate Japanese",
        category: SKILL_CATEGORIES.foreign,
    },
};

const SKILLS_ARRAY = Object.values(SKILLS);