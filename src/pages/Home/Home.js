import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import EventCarts from '../Events/EventCarts';
import Footer from '../Footer/Footer';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [matchedEvents, setMatchedEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setMatchedEvents(data);
            });

    }, []);



    const handleSearch = (e) => {

        const searchText = e.target.value;
        const searchedEvents = events.filter(eve => eve.title.toLowerCase().includes(searchText.toLowerCase()));
        setMatchedEvents(searchedEvents);

    }


    return (
        <>
            <Header handleSearch={handleSearch} />
            <EventCarts events={matchedEvents} />
            <Footer />
        </>
    );
};

export default Home;