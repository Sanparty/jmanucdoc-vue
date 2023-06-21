interface Contact {
    contactId?: Number,
    contactName: String,
    contactTitle: String,
    contactCompany?: String,
    contactNumber: String,
    contactNumberOffice?: String,
    contactEmail: String,
    contactTwitter?: String,
    contactFacebook?: String,
    contactLinkedin?: String,
    contactMessage?: String,
    contactAddress: {
        contactStreet: String,
        contactCity: String,
        contactProvince: String,
        contactPostalCode: String
    }
}

export default Contact