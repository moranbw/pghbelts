import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"
import { fade, makeStyles } from '@material-ui/core/styles';
import MatGeocoder from "react-mui-mapbox-geocoder";

import "./TopAppBar.css";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        //display: 'none',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    text: {
        fontFamily: "Gunplay",
        color: theme.palette.secondary.main
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: theme.palette.secondary.main,
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 300,
            },
        },
    },
    space: {
        //maxWidth: '100',
        width: 0,
        [theme.breakpoints.up('sm')]: {
            width: 100
        },
    },
}));
export default function TopAppBar(props) {
    const classes = useStyles();

    const _goToGeocoderResult = (result) => {
        props.MapAPI.zoomTo(result);
    };
    const geocoderOptions = {
        country: 'us',
        proximity: { longitude: -79.995888, latitude: 40.44062 },
        bbox: [-80.44189453125, 40.052847601823984, -79.51629638671875, 40.749337730454826]
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <div className={classes.title}>
                        <Typography className={classes.text} variant="h4" color="inherit">
                            PGH Belts
                        </Typography>
                    </div>
                    <div className={classes.space}>
                    </div>
                    <div className={classes.search}>
                        <MatGeocoder
                            inputClasses={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputPlaceholder="Search..."
                            accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                            onSelect={result => _goToGeocoderResult(result)}
                            showLoader={true}
                            showInputContainer={false}
                            {...geocoderOptions}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}