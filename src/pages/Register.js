import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Utilities/logos/logo.png';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const descRef = useRef('');
    const currentDate = new Date().toISOString().slice(0, 10);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const desc = descRef.current.value;

        const volunteer = { name, email, desc, regisDate: currentDate };

        fetch('http://localhost:5000/volunteers', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(volunteer)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                nameRef.current.value = '';
                emailRef.current.value = '';
                descRef.current.value = '';
            });



    }

    return (
        <div className="register__wrapper">
            <div className="container">
                <div className="regis__wrap">
                    <div className="logo__top">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="regis__content">
                        <h2>Register as a Volunteer</h2>
                        <form className='regis__form' action="/" onSubmit={handleRegister} >
                            <input type="text" ref={nameRef} className='name' placeholder='Full Name' required />
                            <input type="email" ref={emailRef} className='email'
                                placeholder='Enter email address' required />
                            <input type="text" ref={descRef} className='desc'
                                placeholder='Description of yours' required />
                            <input type="submit" className='regi__btn' value="Registration" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;