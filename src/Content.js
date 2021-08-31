import React from 'react'
import { Card } from 'reactstrap';

const Content = () => {
    const raplaus = () => {
    let testi = ['testi', 'Toinen testi'];
    let matikka = Math.floor(Math.random() * 4)
    return testi[matikka];
}
    return (
        <main>
            <Card>
                <p>
                    Ree{raplaus()}!
                </p>
            </Card>
        </main>
    )
}

export default Content
