import React from 'react'
import { Image, Col } from 'react-bootstrap'
import '../App.css'
import { useState, useEffect } from 'react'

const Socialbuttons = () => {
    const [socials, setSocials] = useState([])

    useEffect(() => {
        async function fetchData(e) {
            const requestOptions = {
                method: "GET"
            }
            const data = await fetch(`http://localhost:5000/simon/mydata/socials.json`, requestOptions)
            const body = await data.json()
            setSocials(body)
            }
            fetchData()
    }, [])
    
    return (
        <div>
            {socials.map((social) => (
                <div key={social.id} className = "social" style={{float:'left'}}>
                    <a className = "social" href={social.site} target="_blank"><Image src={social.foto} width="25px" height="25px"></Image></a>
                </div>
            ))}
        </div>
    );
}

export {Socialbuttons}