
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
        description: "This website was created using modern web technologies. The source code is available at github.",
        text: "To represent me and my work, I decided to built my own website, while expanding my React and JavaScript" +
            " capabilities even further. The different components were built on " +
            "basis of React and the source code is hosted on github to let other users gain inspiration " +
            "for their work. " +
            "During the process of hosting the site I gained my first experiences with Amazon Web Services and " +
            " set up my Lightsail instance with Apache. This project gave me a strong basis to work on further " +
            "web projects.",
        language: "en",
        image: "none",
        date: "2020",
        github: "http://github.com/tristanratz/react-homepage",
    },
    {
        name: "Question Answering System",
        technologies: ["Python", "Tensorflow", "BERT", "NLP", "NLTK", "Machine Learning"],
        description: "Over the course of about four month I had a the chance to lead the development of a question answering system during a cooperation between TU Darmstadt and Serviceware SE.",
        text: "Question Answering is a common task in natural language processing („NLP“) – a subfield of machine " +
            "learning – in which the system processes a question and retrieves an short answer for the user. Despite being common it is far from being solved.\n" +
            "The idea is that the user does not need to search for his answer in a long text or catalogue of articles („dataset“), as he would with a normal search engine, but rather receives a preferably short answer to his question." +
            "During the project we had to explore NLP, tensorflow, NLTK and other technologies to build a working solution. " +
            "As a result we were able to generate answers to questions on a given database in multiple languages. The results were quite promising but still had room for improvement, while working more accurate than existing solutions (like cdQA by PNB Paribas) and being even faster than existing solutions.",
        language: "en",
        image: "none",
        date: "2019",

    },
    {
        name: "ChatApp",
        technologies: ["Swift", "iOS", "SwiftUI", "Project Catalyst", "Python", "Twisted"],
        description: "To play a bit with sockets and the newly released SwiftUI API I build a simple ChatApp. The " +
            "source code is available at github.",
        text: "After watching Apples WWDC I was especially excited about the simplicity of the newly released SwiftUI API." +
            "So I decided to create a simple ChatApp, which was able to communicate with a Python Server, over Sockets.",
        language: "en",
        image: "none",
        date: "2019",
        github: "https://github.com/tristanratz/chatapp"
    },
    {
        name: "Website",
        technologies: ["PHP", "HTML", "CSS", "MySQL", "Python", "Twisted"],
        description: "Besides creating a website with my own CMS, I also created a corperate identity for the medical office.",
        text: "The website (link below) was build on top of my previous project (CMS) and operates with it until today." +
            "I also created the design for flyers, business cards and signs in the building.",
        language: "en",
        image: "none",
        date: "2016",
        link: "http://uro-gross-gerau.de/",
    },
    {
        name: "Content Management System",
        technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        description: "A content management system, build using PHP, MySQL, HTML and JavaScript. " +
            "Until today it is still in use.",
        text: "During my time at school i wanted to build my own content management system. " +
            "Not only because I disliked existing solutions and found them to difficult to use, but also to gain experience in some web technologies." +
            "I gained experience in PHP, HTML and CSS and build my first object oriented JavaScript-Image Picker using " +
            "the javascript function prototype pattern.",
        language: "en",
        image: "none",
        date: "2015",
    },
    {
        name: "Website",
        technologies: ["PHP", "JavaScript", "MySQL", "HTML", "Wordpress"],
        description: "A website for a medical office build with Wordpress.",
        text: "It was the first project I created using wordpress. I implemented my own wordpress theme " +
            "and setup the website using wordpress. You can look at the resulting website at the link down below.",
        language: "en",
        image: "none",
        date: "2014",
        link: "http://uro-reinheim.de/"
    },
];