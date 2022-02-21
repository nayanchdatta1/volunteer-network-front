import Cart from './Cart';

const EventCarts = (props) => {
    // console.log(props)
    const events = props.events;

    return (
        <section className='events__wrapper'>
            <div className="container">
                <div className='cards__wrap grid'>
                    {
                        events.map(event => <Cart
                            key={event._id}
                            event={event} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default EventCarts;