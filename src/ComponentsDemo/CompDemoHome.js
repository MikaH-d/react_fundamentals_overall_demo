import Greeting from "./ExGreeting";
import Footer from "./ExFooter";
import SinglePropMessage from "./SinglePropMessage";
import MultiplePropsWelcome from "./MultiplePropsWelcome";

import { useState } from "react";

function ComponentsDemoHome(){
    const [page, setPage] = useState('comp-demo-home');

    let content;
        switch (page) {
        case 'greeting':
            content = <><Greeting /></>;
            break;
        case 'and-footer':
            content = <>
                        <Greeting />
                        <Footer />
                    </>
            break;
        case 'single-prop-message':
            content = <><SinglePropMessage /></>;
            break;
        case 'multiple-props-message':
            content = <><MultiplePropsWelcome /></>;
            break;
    }

    return(
        <div className="demos-container">
            <h2 className="header-list">components Demo</h2>
            <nav className="available-demos-list">
                <button className="demo-option" onClick={() => setPage('greeting')}>Simple Component Example</button>
                <button className="demo-option" onClick={() => setPage('and-footer')}>Adding another component: Footer</button>
                <button className="demo-option" onClick={() => setPage('single-prop-message')}>Props first example (single)</button>
                <button className="demo-option" onClick={() => setPage('multiple-props-message')}>Props second example (multiple)</button>
            </nav>
            <div className="content-container">
            {content}
            </div>
        </div>
    );
}

export default ComponentsDemoHome;