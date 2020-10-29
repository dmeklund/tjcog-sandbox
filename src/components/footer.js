import React from "react";
import "../css/footer.css";

const Footer = () => (
    <footer className="page-footer">
        <div className="wrapper">
            <div>
                <div className="address">
                    <p>
                        <img src="/footer-logo.png"
                             alt="Triangle J Council of Governments"
                             width="365" height="71"
                        />
                    </p>
                    <p>
                        4307 Emperor Blvd., Suite 110<br/>
                        Durham, NC 27703<br/>
                        Tel: 919.549.0551<br/>
                        Fax: 919.549.9390
                    </p>
                </div>
                <small>© 2020 Triangle J Council of Government (TJCOG)</small>
            </div>
        </div>
    </footer>
)

export default Footer;