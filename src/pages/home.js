import React from 'react'
import Header from '../components/Header'
import CardLink from '../components/CardLink'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import '../css/index.css'

const Home = () => {
    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col">
                    <Header title="Welcome to CharGen" subtitle="The best character generators out there" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CardLink title = "WoW"/>
                </div>
                <div className="col">
                    
                </div>
            </div>

            <Icon src="/wow_logo.png"/>
            <Link to='/wowgen'>Wow Gen</Link>
        </div>
    )
}

export default Home
