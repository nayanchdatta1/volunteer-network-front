import useEvents from '../../hooks/useEvents';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import EventCarts from './EventCarts';

const Events = () => {
    const { events } = useEvents();

    return (
        <>
            <div className='container'>
                <NavBar />
                <p className=' my-3'>Events going on...</p>
                <EventCarts events={events} />
            </div>

            <Footer />
        </>
    );
};

export default Events;