import { ctaLinks } from "../pagelinks"

const mortgageCalculator = {
    heading: "Mortgage Calculator",
    id: "mortgagecalculator",
    image: "cta-calc.svg",
    altImage: "Calculator Symbol",
    routerLink: ctaLinks.calculatorLink.routerlink
}

const evaluation = {
    heading: "Free Home Evaluation",
    id: "evaluation",
    image: "cta-eval.svg",
    altImage: "Clipboard Symbol",
    routerLink: ctaLinks.evaluationLink.routerlink
}

const thinkingBuying = {
    heading: "Thinking of Buying?",
    id: "thinkingbuying",
    image: "cta-buying.svg",
    altImage: "House Symbol",
    routerLink: ctaLinks.buyingLink.routerlink
}

const thinkingSelling = {
    heading: "Thinking of Selling?",
    id: "thinkingselling",
    image: "cta-selling.svg",
    altImage: "For Sale Sign Symbol",
    routerLink: ctaLinks.sellingLink.routerlink
}

const ctaData = { mortgageCalculator, evaluation, thinkingBuying, thinkingSelling }

export default ctaData