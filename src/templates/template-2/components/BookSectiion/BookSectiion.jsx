import { Button } from "../../../../components";

const BookSectiion = () => {
    return (
        <div className="book-section-container">
            <div className="book-section-body flex">
                <ReservationSection />
                <ContactSection />
            </div>
        </div>
    );
}

export default BookSectiion;


function ReservationSection() {

    return(
        <div className="reservation-section flex flex-col justify-center items-center">
            <div> <p className="title-text title-text-sm text-white"> Online Reservation </p> </div>

            <div className="reserv-form-container">
                <form className="grid grid-cols-1 gap-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="input"><input type="text" name="name" id="reserv-name-input" placeholder="Your Name"/></div>
                        <div className="input"><input type="number" name="phone number" id="reserv-name-input" placeholder="Phone Number" /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="input">
                            <select name="person" id="">
                                <option value="1" className="option">1 Person</option>
                                <option value="2" className="option">2 Person</option>
                                <option value="3" className="option">3 Person</option>
                                <option value="4" className="option">4 Person</option>
                            </select>
                        </div>
                        <div className="input"> <input type="date" name="date"/> </div>
                        <div className="input"> <input type="time" name="date" /> </div>
                    </div>

                    <div className="input book-message"> <textarea name="message" id="booking message" placeholder="Message"></textarea> </div>

                    <div className="w-full">
                        <Button className="main-button-fill !w-full">
                            <span className="btn-span-1">Book A Table</span>
                            <span className="btn-span-2">Book A Table</span>
                        </Button> 
                    </div>
                </form>
            </div>

        </div>
    )
}


function ContactSection() {
    return(
        <div className="contact-section flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 gap-4">

                <div className="w-full text-center"> <p className="title-text title-text-sm text-white"> Contact </p> </div>

                <div className="fcc flex-col">
                    <p className="title"> Booking Request </p>
                    <p className="phone-number">+88-123-123456</p>
                </div>

                <div className="fcc flex-col">
                    <p className="title"> Location </p>
                    <p className="text"> Stiftsplatz. 100 <br /> Bonn 53111 </p>
                </div>

                <div className="fcc flex-col">
                    <p className="title"> OPEN TIME </p>
                    <p className="text"> Daily, 08:00 am to 10:00 pm </p>
                </div>

            </div>
        </div>
    )
}