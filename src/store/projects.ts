
export interface ProjectData {
    name: string;
    description: string;
    text: string;
    technologies: string[];
    language: string;
    image: string;
    date: string;
    github?: string;
    blogpost?: string;
    link?: string;
}

export const projects:ProjectData[] = [
    {
        name: "Homepage",
        technologies: ["React", "JavaScript", "HTML", "SCSS", "AWS"],
        description: "This website was created using modern web technologies. The source code is availabble at github.",
        text: "",
        language: "en",
        image: "none",
        date: "2020",
        github: "http://github.com/tristanratz/react-homepage",
    },
    {
        name: "Question Answering System",
        technologies: ["Python", "Tensorflow", "BERT", "NLP", "NLTK", "Machine Learning"],
        description: "Leading the development of a question answering system, which answers a question given only a dataset of texts.",
        text: "",
        language: "en",
        image: "none",
        date: "2019",
    },
    {
        name: "ChatApp",
        technologies: ["Swift", "iOS", "SwiftUI", "Project Catalyst", "Python", "Twisted"],
        description: "Creating a simple chat app for iOS with swiftUI with a simple Python Twisted Server.",
        text: "",
        language: "en",
        image: "none",
        date: "2019",
    },
    {
        name: "Website",
        technologies: ["PHP", "HTML", "CSS", "MySQL", "Python", "Twisted"],
        description: "Creating a dat.",
        text: "",
        language: "en",
        image: "none",
        date: "2015",
        link: "http://uro-gross-gerau.de/",
    },
    {
        name: "CMS",
        technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        description: "A content management system, build using PHP, MySQL, HTML and JavaScript",
        text: "",
        language: "en/de",
        image: "none",
        date: "2014",
},
];