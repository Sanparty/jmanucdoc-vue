import Link from "@/types/link"

const homeLink: Link = {
    id: "homelink",
    name: "Home",
    routerlink: "Home",
}
const blogLink: Link = {
    id: "bloglink",
    name: "Blog",
    routerlink: "Blog",
}
const contactLink: Link = {
    id: "contactlink",
    name: "Contact",
    routerlink: "Contact",
}
const buyingLink: Link = {
    id: "buyinglink",
    name: "Buying",
    routerlink: "Buying",
}
const sellingLink: Link = {
    id: "sellinglink",
    name: "Selling",
    routerlink: "Selling",
}
const aboutLink: Link = {
    id: "aboutlink",
    name: "About",
    routerlink: "About",
}
const communitiesLink: Link = {
    id: "communitieslink",
    name: "Communities",
    routerlink: "Communities",
}
const evaluationLink: Link = {
    id: "evaluationlink",
    name: "Free Home Evaluation",
    routerlink: "HomeEvaluation",
}
const calculatorLink: Link = {
    id: "calculatorlink",
    name: "Mortgage Calculator",
    routerlink: "MortgageCalculator",
}

const navLinks = { homeLink, blogLink, contactLink, buyingLink, sellingLink, aboutLink, communitiesLink }
const footerLinks = { homeLink, blogLink, contactLink, buyingLink, sellingLink, aboutLink, communitiesLink }
const ctaLinks = { buyingLink, sellingLink, evaluationLink, calculatorLink }
export { contactLink, navLinks, footerLinks, ctaLinks, evaluationLink }
