interface Article {
    heading: string,
    id: string,
    image: string,
    altImage: string,
    imageSize?: string,
    lookingBuy?: Boolean,
    lookingSell?: Boolean,
    calculator?: Boolean,
    title: {
        title1: string,
        title2?: string,
        title3?: string,
        title4?: string
    },
    content: {
        content1: string,
        content2?: string,
        content3?: string,
        content4?: string,
    },
}

export default Article