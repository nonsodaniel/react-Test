import React from 'react'
import './styles.scss'

const Header = (props) => {
    return (
        <header className="headerComp" data-test="headerComp">
            <div className="wrap">
                <div className="logo">
                    <img className="imgLogo" data-test="imgLogo"
                        src={`https://res.cloudinary.com/data-infosec-consult-limited/image/upload/v1591353533/Nonso_Daniel_5e7aaf1ba56b930016de0de3.jpg`}
                        alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
