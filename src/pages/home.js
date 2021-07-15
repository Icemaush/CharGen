import React from 'react'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CardLink from '../components/CardLink'
import { Link } from 'react-router-dom'
import '../css/index.css'

const Home = () => {
    return (
        <div>
            <Container className="header" maxWidth="lg">
                <Header title="Welcome to CharGen" subtitle=""/>
            </Container>
            <Container className="links" maxWidth="md" mt={80}>
                <Grid container spacing={10} justifyContent={'center'}>
                    <Grid item sm={6}>
                        <Link to="/wowgen">
                            <CardLink text="WoW" altText="World of Warcraft" url="wow_logo.png"/>
                        </Link>
                    </Grid>
                    <Grid item sm={6}>
                        <Link to="/ffxivgen">
                            <CardLink text="FFXIV" altText="Final Fantasy XIV" url="ffxiv_logo.png"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
