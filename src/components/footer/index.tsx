import React from 'react';
import { footerComponent } from './footer.module.scss'

export default function Footer(props: any): React.ReactComponentElement<any> {

    return (
        <div className={footerComponent}>
            <p className='center'>&copy; Michael E Stallings {new Date().getFullYear()}</p>
        </div>
    )
}