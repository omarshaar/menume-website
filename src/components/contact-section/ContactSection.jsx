import { TextInput, TextArea } from "../";



const ContactSection = () => {
    return (
        <section className="contact-section-container">
            <div className="contact-section-body">

                <div className="fcc w-max">
                    <div className="section-head-shape"></div>
                    <h3 className="section-head"> Contact us </h3> 
                </div>

                <div className="contact-sections">

                    <div className="contact-section-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12724.1820263682!2d7.110168825706141!3d50.74224313305803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee1a0d6298141%3A0x8be071356e2bb443!2sDivan%20Restaurant!5e0!3m2!1sar!2sde!4v1683883400469!5m2!1sar!2sde" width="100%" height="450" className="maps-iframe" style={{border: 0}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-section-2 ">
                        <div className="contact-form f fcol">
                            <TextInput placeholder="Name" />
                            <TextInput placeholder="Email" />
                            <TextArea placeholder="Message" className="flex-1" />
                            <button className="from-submit-btn bg-secondary"> Send </button>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

export default ContactSection;



