import React from 'react'
import { Card } from 'reactstrap';
import ApiFetcher from './apifetcher';

import NormalFetch from './apifetcherPrecie';
import BaseComp from './baseComp';
//Go content have been deleted from this
//Creating just react content
//this is the main content page
const Content = () => {
    const raplaus = () => {
    let testi = ['testi', 'Toinen testi'];
    let matikka = Math.floor(Math.random() * 4)
    return testi[matikka];
}

const handleClick = () => (
    console.log("REEEE, you clicked this thingie")
)

    return (
        <main>
            <Card>
                <p>
                    Ree{raplaus()}!
                </p>
                <button onClick={handleClick}>LeButton</button>
            </Card>
            <Card>
                <p>This is api button</p>
                <button onClick={ApiFetcher}>Api and data show</button>
            </Card>
            <Card>
                <p>This is api old button</p>
                <button onClick={NormalFetch}>Only API - axios</button>
            </Card>          

        </main>
    )
}

export default Content
