export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Merve Keskin',
    subtitle: 'Fullstack Developer based in Istanbul',
    description: 'Currently working with Angular v17 and Django',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Profile Picture'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/merrvve'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/merrvvesen'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/kuantogen'
        }
    ],
    hero: {
        title: 'Welcome',
        text: "Since childhood, I've been captivated by coding, and for the past two years, I've been freelancing as a full stack web developer. I've worked on diverse projects, improving my skills in various programming languages and frameworks. Right now, I'm working with <strong>Angular and Django.</strong> Aside from web development, I also have experience in data analysis and web scraping.<br /> Check out <a href='/projects'> my projects </a> to see what I've been up to,<br /> <a href='/about'>Learn more about me, </a><br />Download <a href='devcv-2024.pdf'> my resume</a> or <br /> Visit <a href='https://github.com/merrvve'>my Github.</a>  <br />Feel free to contact me by email: <a href='mailto:mervsen@gmail.com'>mervsen@gmail.com</a></a>",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contact Me',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
