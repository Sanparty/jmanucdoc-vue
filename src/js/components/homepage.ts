import { ctaLinks, contactLink } from "@/js/components/pagelinks"

const welcomeMessage = {
    heading: "Welcome",
    message: "Whether you’re buying or selling a home (or both), your success hinges upon the expert advice and services provided by your real estate agent."
}

const welcomeMessage2 = {
    heading: "Glad you came to my website",
    message: "What can I do for you!"
}

const pledgesMessage = {
    pledge1: {
        message: "I’m committed to providing my clients with professional services based on my experience, knowledge and skills."
    },
    pledge2: {
        message: "I’ve filled this website with tips and resources to help you quickly understand what you need to know — and how I deliver the services designed to meet your needs."
    },
}

const pledgesMain = {
    pledge1: {
        headingMessage: "If you’re selling...",
        message: "learn more about the process and how to ensure your property sells quickly and for the highest price possible.",
        routerLink: ctaLinks.sellingLink.routerlink
    },
    pledge2: {
       headingMessage: "If you’re buying...", 
        message: "discover how to find your next dream home and get it, without overpaying.",
        routerLink: ctaLinks.buyingLink.routerlink
    },
    pledgeMain: {
        message: "I’m the agent who specializes in this local market – and has the reputation for putting you, the client, first. Any time you want information on the market or are ready to buy or sell a property – ",
        message2: "contact me",
        message3: ". There’s no obligation.",
        mainMessage: "I’m looking forward to learning more about your needs and goals.",
        routerLink: contactLink.routerlink
    }
}



export  { welcomeMessage, welcomeMessage2, pledgesMessage, pledgesMain }