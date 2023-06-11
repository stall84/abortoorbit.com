import React from 'react';
import './footer.scss'

export default function Footer(props: any): React.ReactComponentElement<any> {

    return (
        <div className="footer-component">
            <div>
                <p>&copy; Michael Stallings {new Date().getFullYear()}</p>
                <span><h3>TESTING</h3></span>
            </div>
        </div>
    )
}