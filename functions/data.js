export const headerData = [
    "main", "about", "skills",
    "projects", "contact", "game"
];

export const skillsData = [
    {
        skill: "html",
        text: "<span>HTML</span> (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a <span>web page's appearance/presentation</span> (CSS) or <span>functionality/behavior</span> (JavaScript).",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        lineContent: "<p>SKILLS</p>"
    },

    {
        skill: "css",
        text: "<span>Cascading Style Sheets</span> (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        lineContent: "p {color: #04225e};"
    },

    {
        skill: "sass",
        text: "<span>SASS</span> (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into <span>Cascading Style Sheets</span> (CSS). <span>SassScript</span> is the scripting language itself.",
        link: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
        lineContent: "p {color: $defBlue};"
    },

    {
        skill: "bootstrap",
        text: "<span>Bootstrap</span> is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains <span>HTML</span>, <span>CSS</span> and (optionally) <span>JavaScript</span>-based design templates for typography, forms, buttons, navigation, and other interface components. As of August 2021, Bootstrap is the tenth most starred project on GitHub, with over 152,000 stars, behind freeCodeCamp (over 328,000 stars), Vue.js framework, React library, TensorFlow and others.",
        link: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
        lineContent: "<p class='skills'></p>"
    },

    {
        skill: "js",
        text: "<span>JavaScript</span>, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over <span>97%</span> of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.",
        link: "https://en.wikipedia.org/wiki/JavaScript",
        lineContent: "const p = 'SKILLS';"
    },

    {
        skill: "react",
        text: "<span>React</span> (also known as React.js or ReactJS) is a free and open-source front-end <span>JavaScript</span> library for building user interfaces based on UI components. It is maintained by <span>Meta</span> (formerly Facebook) and a community of individual developers and companies.",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
        lineContent: "<Skills />"
    },

    {
        skill: "redux",
        text: "<span>Redux</span> is an open-source <span>JavaScript</span> library for managing and centralizing application state. It is most commonly used with libraries such as <span>React</span> or <span>Angular</span> for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr.",
        link: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)",
        lineContent: "dispatch({type: 'SKILLS'});"
    },

    {
        skill: "firebase",
        text: "<span>Firebase</span> is a platform developed by <span>Google</span> for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
        link: "https://en.wikipedia.org/wiki/Firebase",
        lineContent: "db.collection('SKILLS');"
    }
];

const htmlLogo = "../images/skills-html.svg";
const cssLogo = "../images/skills-css.svg";
const sassLogo = "../images/skills-sass.svg";
const bootstrapLogo = "../images/skills-bootstrap.svg";
const jsLogo = "../images/skills-js.svg";
const reactLogo = "../images/skills-react.svg";
const reduxLogo = "../images/skills-redux.png";
const firebaseLogo = "../images/skills-firebase.png";
const weahterLogo = "../images/skills-weather.png";
const discordLogo = "../images/skills-discord.svg";

export const projectsData = [
    {
        title: "DRB0R1S x React",
        description: "DRB0R1S x React is a project in the form of a website intended to promote the work and previous projects of the Front-end Web Developer drb0r1s. On this site you can find various projects(websites, web applications,custom hooks...), as well as explained projects and their source codes.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react.netlify.app/"
    },

    {
        title: "DRB0R1S Social",
        description: "DRB0R1S Social is a social network created using React, SASS, Bootstrap, JavaScript, Redux and Firebase. This is a big project, the social network has a login and register system, profile system, the ability to send posts and messages... It is still under development and will be available soon.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo, reduxLogo, firebaseLogo],
        link: "#SOON"
    },

    {
        title: "React Playground",
        description: "React Playground is a website created using React (Functional Components), SASS, Bootstrap and JavaScript. This site contains 6 games. List of games: Guess The Number, Dice, Typing Speed Test, Drawing, Dino, Snake.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react-playground.netlify.app/"
    },

    {
        title: "React Calculator",
        description: "React Calculator is a web application made using React (Functional Components), SASS, Bootstrap and JavaScript. The application provides the ability to calculate basic (+, -, *, /), but also complex arithmetic operations and functions (sin, cos, tan, ctg, log...).",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react-calculator.netlify.app/"
    },

    {
        title: "Weather App",
        description: "Weather App is a web application created using React (Functional Components), SASS, JavaScript and OpenWeatherMap API. The application is intended for displaying the weather forecast for any location. The prognosis is divided into 5 days every 3 hours. The application provides the ability to display a direct weather forecast, as long as the use of the user's location is allowed.",
        technologies: [reactLogo, sassLogo, jsLogo, weahterLogo],
        link: "https://drb0r1s-weather-app.netlify.app/"
    },

    {
        title: "useReponsiveObj",
        description: "useResponsiveObj is a custom React hook designed to make it easier to use responsive and determine breakpoints in React using the Responsive object.",
        technologies: [reactLogo, jsLogo],
        link: "https://github.com/drb0r1s/useResponsiveObj"
    },

    {
        title: "Chain",
        description: "Chain is a website made using React (Class Components), CSS and JavaScript. The site consists of one page.",
        technologies: [reactLogo, cssLogo, jsLogo],
        link: "https://drb0r1s-chain-react.netlify.app/"
    },

    {
        title: "Host Cloud",
        description: "Host Cloud is a website created using React (Functional Components), SASS, Bootstrap and JavaScript. It is a site that consists of several pages, each of which has a certain theme.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-host-cloud-react.netlify.app/"
    },

    {
        title: "My Grades",
        description: "My Grades is a web application created using React (Functional Components), CSS and JavaScript. This application is used for recording grades, calculating the average grade as well as writing schedules.",
        technologies: [reactLogo, cssLogo, jsLogo],
        link: "https://drb0r1s-my-grades.netlify.app/"
    },

    {
        title: "discbot-easy",
        description: "discbot-easy is an npm package that can help with communication and easier interaction with discord.js. With this package it is possible to design Discord Bot commands without knowledge of programming and discord.js.",
        technologies: [discordLogo, jsLogo],
        link: "https://github.com/drb0r1s/discbot-easy"
    }
];

export const topProjectsData = [
    {
        title: "DRB0R1S x React",
        description: "DRB0R1S x React is a project in the form of a website intended to promote the work and previous projects of the Front-end Web Developer drb0r1s. On this site you can find various projects(websites, web applications,custom hooks...), as well as explained projects and their source codes.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react.netlify.app/"
    },

    {
        title: "DRB0R1S Social",
        description: "DRB0R1S Social is a social network created using React, SASS, Bootstrap, JavaScript, Redux and Firebase. This is a big project, the social network has a login and register system, profile system, the ability to send posts and messages... It is still under development and will be available soon.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo, reduxLogo, firebaseLogo],
        link: "#SOON"
    },

    {
        title: "React Playground",
        description: "React Playground is a website created using React (Functional Components), SASS, Bootstrap and JavaScript. This site contains 6 games. List of games: Guess The Number, Dice, Typing Speed Test, Drawing, Dino, Snake.",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react-playground.netlify.app/"
    },

    {
        title: "React Calculator",
        description: "React Calculator is a web application made using React (Functional Components), SASS, Bootstrap and JavaScript. The application provides the ability to calculate basic (+, -, *, /), but also complex arithmetic operations and functions (sin, cos, tan, ctg, log...).",
        technologies: [reactLogo, sassLogo, bootstrapLogo, jsLogo],
        link: "https://drb0r1s-react-calculator.netlify.app/"
    },

    {
        title: "useReponsiveObj",
        description: "useResponsiveObj is a custom React hook designed to make it easier to use responsive and determine breakpoints in React using the Responsive object.",
        technologies: [reactLogo, jsLogo],
        link: "https://github.com/drb0r1s/useResponsiveObj"
    },

    {
        title: "discbot-easy",
        description: "discbot-easy is an npm package that can help with communication and easier interaction with discord.js. With this package it is possible to design Discord Bot commands without knowledge of programming and discord.js.",
        technologies: [discordLogo, jsLogo],
        link: "https://github.com/drb0r1s/discbot-easy"
    }
];

export const contactData = [
    {
        title: "contact mail",
        username: "drb0r1sdev@gmail.com",
        icon: "../images/10-b-white-bg-logo.jpg",
        lineIcon: "../images/contact-mail.svg",
        link: "mailto:drb0r1sdev@gmail.com"
    },

    {
        title: "github",
        username: "drb0r1s",
        icon: "../images/10-b-white-bg-logo.jpg",
        lineIcon: "../images/contact-github.svg",
        link: "https://github.com/drb0r1s"
    },

    {
        title: "discord",
        username: "boris#1171",
        icon: "../images/10-b-white-bg-logo.jpg",
        lineIcon: "../images/contact-discord.svg",
        link: "https://discordapp.com/users/598129893397495823"
    },

    {
        title: "npm",
        username: "drb0r1s",
        icon: "../images/10-b-black-bg-logo.jpg",
        lineIcon: "../images/contact-npm.svg",
        link: "https://www.npmjs.com/~drb0r1s"
    },

    {
        title: "twitter",
        username: "drb0r1s",
        icon: "../images/10-b-white-bg-logo.jpg",
        lineIcon: "../images/contact-twitter.svg",
        link: "https://twitter.com/drb0r1s"
    }
];

export const contextMenuData = [
    {
        field: "sections",
        buttons: ["main", "about", "skills", "projects", "contact", "game"]
    },

    {
        field: "page",
        buttons: [
            {
                name: "reload",
                function: () => location.reload()
            },

            {
                name: "page source",
                function: () => window.open("./source.html")
            }
        ]
    }
];

export const otherContextMenuData = [
    {
        field: "page",
        buttons: [
            {
                name: "return home",
                function: () => window.open("./index.html")
            },

            {
                name: "reload",
                function: () => location.reload()
            }
        ]
    }
];