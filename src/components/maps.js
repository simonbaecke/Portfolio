import React from 'react'

const Maps = () => {
    return(
        <div>
            <iframe
                src="https://maps.google.com/maps?q=jozef%20platteau%20ugent&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
            >
            </iframe>
        </div>
    );
}

export {Maps}