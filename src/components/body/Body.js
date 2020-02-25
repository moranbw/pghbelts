import React from "react";
import { makeStyles } from "@material-ui/core";
import MapAPI from "../../service/MapAPI";
import TopAppBar from '../topappbar/TopAppBar';
import PopoverButtons from "../actionbuttons/PopoverButtons";
import ZoomButtons from "../actionbuttons/ZoomButtons";
import "./Body.css";
import "leaflet/dist/leaflet.css";

const useStyles = makeStyles(theme => ({
    mapParent: {
        marginLeft: 0,
        height: '100%',
        position: 'relative',
        paddingTop: theme.mixins.toolbar.minHeight
    },

    root: {
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        height: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
}));

export default function Body() {
    const classes = useStyles();
    const [state, setState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }), {
        mapAPI: null,
    });

    React.useEffect(() => {
        MapAPI.createMap();
        setState({ mapAPI: MapAPI });

    }, []);

    return (
        <div className={classes.root}>
            <TopAppBar MapAPI={state.mapAPI}/>
            <div className={classes.mapParent}>
                <div>
                    <ZoomButtons MapAPI={state.mapAPI} />
                    <PopoverButtons MapAPI={state.mapAPI} />
                </div>
                <div id="map" className={classes.map}>
                </div>
            </div>
        </div>
    );

}