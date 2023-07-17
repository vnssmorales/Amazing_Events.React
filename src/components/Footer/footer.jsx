import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

library.add(fab);
export const Footer = () => {
   

    return (
        <footer className="footer">
        <div className="container">
           <ul className="list-unstyled">
                <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1" href="https://twitter.com/">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1" href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />

                    </a>
                </li>
            </ul>
           
        </div>
        </footer>
    );

}