import React from 'react';

const HeroSection = ({ handleSearch }) => {
    return (
        <div className='hero__wrapper'>
            <div className="container">
                <div className="row">
                    <h1 className='hero__title'>I grow by helping people in need.</h1>
                    <div className="input__group">
                        <input type="text" onChange={handleSearch} placeholder='Search...' className='input__text' />
                        <input type="submit" value="Search" className='search__btn' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;