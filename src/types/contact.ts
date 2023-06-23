interface Contact {
    contactId?: number,
    contactName: string,
    contactTitle: string,
    contactCompany?: string,
    contactNumber: string,
    contactNumberOffice?: string,
    contactEmail: string,
    contactTwitter?: string,
    contactFacebook?: string,
    contactLinkedin?: string,
    contactMessage?: string,
    contactAddress: {
        contactStreet: string,
        contactCity: string,
        contactProvince: string,
        contactPostalCode: string
    }
}

export default Contact