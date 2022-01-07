import React from 'react'
import { Card } from 'reactstrap';

//To do get stuff from Go part
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
        </main>
    )
}

export default Content
