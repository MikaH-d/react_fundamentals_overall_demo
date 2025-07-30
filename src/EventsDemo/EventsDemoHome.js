import EventDemo1 from './event-demo-1';
import EventDemo2 from './event-demo-2';
import EventDemo3 from './event-demo-3';
import FormDemo from './form-demo';
import { useState } from 'react';

function EventsDemoHome() {
    const [page, setPage] = useState('events-demo-home');
    let content;

    switch (page){
        case 'event-demo-1':
            content = <EventDemo1 />;
            break;
        case 'event-demo-2':
            content = <EventDemo2 />;
            break;
        case 'event-demo-3':
            content = <EventDemo3 />;
            break;
        case 'form-demo':
            content = <FormDemo />;
            break;
        // default:
        //     content = <h2>Welcome to the Event Handling Demo</h2>
    }


    return (
        <div className="demos-container">
            <h2>Event Handling Demo</h2>
            <nav className='available-demos-list'>
                <button className="demo-option" onClick={() => setPage('event-demo-1')}>Event Demo 1</button>
                <button className="demo-option" onClick={() => setPage('event-demo-2')}>Event Demo 2</button>
                <button className="demo-option" onClick={() => setPage('event-demo-3')}>Event Demo 3</button>
                <button className="demo-option" onClick={() => setPage('form-demo')}>Forms Demo</button>
            </nav>
            <div className="content-container">
            {content}
            </div>
        </div>
    );
}

export default EventsDemoHome;