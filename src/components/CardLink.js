import React from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled from 'styled-components'
import Header from '../components/Header'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        boxShadow: 'none',
        border: '3px',
        justifyContent:'center',
        background: 'transparent',
    },
    details: {
        marginTop: 'auto',
        marginBottom: 'auto',
        
    },
    content: {
        
    },
    icon: {
        width: 128,
        height: 128,
    },
    typography: {
        fontFamily: "Syncopate",
        color: theme.palette.text.primary
    }
}));

const CardLink = (props) => {
    const classes = useStyles();

    const theme = useTheme();

    React.useEffect(() => {
        console.log(theme.palette)
    }, [theme])

    return (
        <div className={classes.card} >
            <CardMedia className={classes.icon} image={props.url} title={props.altText}/>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Header title={props.text} subtitle=""/>
                    {/* <Typography className={classes.typography} component="h2" variant="h2">
                        {props.text}
                    </Typography> */}
                </CardContent>
            </div>
        </div>
    )   
}

export default CardLink
