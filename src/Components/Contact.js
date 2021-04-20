import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1 className='center' style={{marginBottom: '20px'}}>Contact</h1>
            <div className='contact-wrapper'>
                <div className='contact-msg'>
                    <h2 style={{color: 'black'}}>Get In Touch</h2>
                    <input type='text' placeholder='Your Name' className='msg msg-name' />
                    <input type='text' placeholder='Email Address' className='msg' />
                    <input type='text' placeholder='Message' className='msg msg-box' />
                    <button className='msg send-box'>Send Now</button>
                </div>
                <div className='contact-info'>
                    <div className='msg-wrapper'> 
                        <span className='msg-wrapper-items'>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" /> 
                            <p>hi@gmail.com</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                            <p>08092855470</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLocationArrow} size="2x" />
                            <p>Lagos, Nigeria</p>
                        </span>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
