import React from "react";
import MapAPI from "../../service/MapAPI";
import TopAppBar from '../topappbar/TopAppBar';
import MapActionButtons from "../mapactionbuttons/MapActionButtons";
import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

import "./Map.css";
import "leaflet/dist/leaflet.css";
import ZoomControls from "../zoom/ZoomControls";


const useStyles = makeStyles(theme => ({
    mapParent: {
        // padding: theme.spacing(3),
        marginLeft: 0,
        height: '100%',
        //flexGrow: 1,
        position: 'relative',
        paddingTop: theme.mixins.toolbar.minHeight
    },

    root: {
        //overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        height: '100%',
        //display: 'flex'
    },
    map: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
}));

export default function Map() {
    const classes = useStyles();
    const [state, setState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }), {
        map: null,
        mapAPI: null,
        properties: "",
        showProps: false,
        leftDrawer: false,
    });

    Map.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    const mapParent = React.createRef();

    React.useEffect(() => {
        let map = MapAPI.createMap();
        setState({ map: map, mapAPI: MapAPI });

    }, []);

    return (
        <div className={classes.root}>
            <TopAppBar MapAPI={state.mapAPI}/>
            <div ref={mapParent} className={classes.mapParent}>
                <div>
                    <ZoomControls MapAPI={state.mapAPI} />
                    <MapActionButtons MapAPI={state.mapAPI} leftDrawer={state.leftDrawer} />
                </div>
                <div id="mapId" className={classes.map}>
                </div>
            </div>
        </div>
    );

}