
import ContactForm from "@/components/contact_form"

const Contact = () => {
    return ( 
        <div id="contact" className="flex flex-col ">
            <div className="page-title">
                <h2>Drop A Line</h2>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;