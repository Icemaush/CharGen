import React from 'react'
import Header from '../components/Header'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className = "container">
            <Header title="CharGen" subtitle="The best character generators out there" />
            <Icon src="/wow_logo.png"/>
            <Link to='/wowgen'>Wow Gen</Link>
        </div>
    )
}

export default Home
