import React from 'react';
import {Drawer} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles/index';
import LeftDrawerMenus from "./content/LeftDrawerMenus";

const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.grey["200"],
        height: '100%'
    },
    toolbar: theme.mixins.toolbar,
}));
export default function LeftDrawer(props) {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar}/>
            <LeftDrawerMenus MapAPI={props.MapAPI}/>
        </Drawer>
    );
}