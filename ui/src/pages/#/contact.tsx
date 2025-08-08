import ContactForm from "@/components/contact_form"

const Contact = () => {
    return ( 
        <div id="contact" className=" flex-col ">
            <div className="page-title">
                <h2>Contact Form</h2>
            </div>
            <div>
                <ContactForm />
            </div>

        </div>
    )
}

export default Contact;