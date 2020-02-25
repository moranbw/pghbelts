import React from 'react';
import OnMapPopover from "../popovers/OnMapPopover";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        iconContainer: {
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            marginTop: 20,
            marginRight: 20,
        },

    }))
;


export default function MapActionButtons(props) {
    const classes = useStyles();
    return (
        <div className={classes.iconContainer} >
            <OnMapPopover type="basemap" MapAPI={props.MapAPI}/>
            <OnMapPopover type="help"/>

        </div>
    );
}