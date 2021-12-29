import React from 'react'
import { Image } from 'react-bootstrap'
import '../App.css'
import useFetch from '../hooks/useFetch'

const Socialbuttons = () => {
    const {data} = useFetch('http://localhost:5000/simon/mydata/socials.json')
    
    return (
        <div>
            {data.map((social) => ( //sociale media overlopen met custom logo's per site
                <div key={social.id} className = "social" style={{float:'left'}}>
                    <a className = "social" href={social.site} target="_blank"><Image src={social.foto} width="25px" height="25px"></Image></a>
                </div>
            ))}
        </div>
    );
}

export {Socialbuttons}