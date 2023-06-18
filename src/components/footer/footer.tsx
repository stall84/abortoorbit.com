import React from 'react';
import './footer.scss'

export default function Footer(props: any): React.ReactComponentElement<any> {

    return (
        <div className="footer-component">
            <p className='center'>&copy; Michael E Stallings {new Date().getFullYear()}</p>
        </div>
    )
}