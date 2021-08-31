import React from 'react'


const Footer = () => {
    const datestuff = new Date();
    return (
        <footer>
            <p>Made by Pieruharakka &copy; {datestuff.getFullYear()}</p>
        </footer>
    )
}

export default Footer
