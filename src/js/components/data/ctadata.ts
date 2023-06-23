import { ctaLinks } from "../pagelinks"
import Cta from "@/types/cta"

const mortgageCalculator: Cta = {
    heading: "Mortgage Calculator",
    id: "mortgagecalculator",
    image: "cta-calc.svg",
    altImage: "Calculator Symbol",
    routerLink: ctaLinks.calculatorLink.routerlink
}

const evaluation: Cta = {
    heading: "Free Home Evaluation",
    id: "evaluation",
    image: "cta-eval.svg",
    altImage: "Clipboard Symbol",
    routerLink: ctaLinks.evaluationLink.routerlink
}

const thinkingBuying: Cta = {
    heading: "Thinking of Buying?",
    id: "thinkingbuying",
    image: "cta-buying.svg",
    altImage: "House Symbol",
    routerLink: ctaLinks.buyingLink.routerlink
}

const thinkingSelling: Cta = {
    heading: "Thinking of Selling?",
    id: "thinkingselling",
    image: "cta-selling.svg",
    altImage: "For Sale Sign Symbol",
    routerLink: ctaLinks.sellingLink.routerlink
}

const ctaData = { mortgageCalculator, evaluation, thinkingBuying, thinkingSelling }

export default ctaData