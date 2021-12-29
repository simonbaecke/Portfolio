import React from 'react'

//iframe met google maps
const Maps = () => {
    return(
        <div>
            <iframe 
                src="https://maps.google.com/maps?q=jozef%20platteau%20ugent&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="600" //vaste hoogte dat er niet rechthoekig geschaald wordt
                title="maps"
            >
            </iframe>
        </div>
    );
}

export {Maps}