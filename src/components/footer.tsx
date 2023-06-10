import React from 'react';

export default function Footer(props: any): React.ReactComponentElement<any> {

    return (
        <div>
            <p>&copy; Michael Stallings {new Date().getFullYear()}</p>
        </div>
    )
}