import React from 'react'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CardLink from '../components/CardLink'
import { Link } from 'react-router-dom'
import '../css/index.css'
import { classes } from 'istanbul-lib-coverage'

const Home = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <div className="header">
                    <Header title="Welcome to CharGen" subtitle=""/>
                </div>
                <Grid container className={classes.root} spacing={5}>
                    <Grid item sm={5}>
                        <Link to="/wowgen">
                            <CardLink text="WoW" altText="World of Warcraft" url="wow_logo.png"/>
                        </Link>
                    </Grid>
                    <Grid item sm={5}>
                        
                    </Grid>
                </Grid>




            </Container>
        </div>
    )
}

export default Home
