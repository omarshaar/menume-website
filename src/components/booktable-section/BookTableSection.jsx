import {TextInput} from "../";



function BookTableSection() {
    return(
        <div className="booktable-section-container">
            <div className="booktable-section-body">
                <div className="fcc w-max">
                    <div className="section-head-shape"></div>
                    <h3 className="section-head"> Book Table </h3> 
                </div>


                <div className="book-section">
                    <div className="booksec-fields">
                        <TextInput placeholder="name" />
                        <TextInput placeholder="No. Of. People" />
                    </div>

                    <div className="booksec-fields">
                        <TextInput placeholder="phone" type="number"/>
                        <TextInput placeholder="Email" type="email" />
                    </div>

                    <div className="booksec-fields">
                        <TextInput placeholder="phone" type="number"/>
                        <TextInput placeholder="Email" type="email" />
                    </div>

                    <div>
                        <button className="from-submit-btn bg-secondary"> Book </button>
                    </div>
                    
                </div>

            </div>
        </div>
    )

}


export default BookTableSection;