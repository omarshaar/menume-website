import { Button } from "../../../../components";

const Footer = () => {
    return (
        <footer className="tempalte-2-footer">
            <div className="temp2-footer-body fcb ">
                <div className="black-over"></div>

                <div className="temp2-footer-links flex-1 fcc relative">
                    <ul className="fcc flex-col">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Book</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <NewsLetter />

                <div className="temp2-footer-socialmedia flex-1 fcc relative">
                    <ul className="fcc flex-col">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twiter</li>
                        <li>Youtube</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;




function NewsLetter() {
    return(
        <div className="news-letter-container fcc flex-col">
            <div className="logo-container footer-logo"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAYAAADbYdBlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMkZFNDM0NTUzMTExRUQ5MEYyQzI2ODNDOTg5MzkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyMkZFNDM1NTUzMTExRUQ5MEYyQzI2ODNDOTg5MzkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDIyRkU0MzI1NTMxMTFFRDkwRjJDMjY4M0M5ODkzOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDIyRkU0MzM1NTMxMTFFRDkwRjJDMjY4M0M5ODkzOTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4mxydwAAAJ4ElEQVR42uxd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" alt="LOGO" /> </div>

            <div> <p className="title-text title-text-sm text-white"> Get News & Offers </p> </div>
            <div> <p className="text"> subscribe us & Get <b>25% off.</b> </p> </div>

            <div className="subscribe-input-container fcc">
                <input type="email" name="subscribe-email" className="" placeholder="Your email"/>
                <Button className="main-button-fill">
                    <span className="btn-span-1">subscribe</span>
                    <span className="btn-span-2">subscribe</span>
                </Button> 
            </div>

        </div>
    )
}