import React from 'react';

import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircleSharp";
import RemoveIcon from "@material-ui/icons/RemoveCircleSharp";

const useStyles = makeStyles(theme => ({
    icon: {
        margin: theme.spacing(1),
    },
    container: {
        position: 'absolute',
        zIndex: 1000,
        left: 0,
        marginLeft: 20,
        marginTop: 20
    }
}));



export default function ZoomControls(props) {
    const classes = useStyles();
    
    const zoomIn = () => {
        props.MapAPI.zoomIn();
    }
    const zoomOut = () => {
        props.MapAPI.zoomOut();
    }

    return (
        <div className={classes.container}>
            <div>
                <Fab color="secondary" className={classes.icon} onClick={zoomIn}>
                    <AddIcon />
                </Fab>
            </div>
            <div>
                <Fab color="secondary" className={classes.icon} onClick={zoomOut}>
                    <RemoveIcon />
                </Fab>
            </div>
        </div>
    );
}