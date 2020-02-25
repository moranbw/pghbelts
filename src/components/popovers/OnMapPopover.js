import React from 'react'
import {
    usePopupState,
    bindTrigger,
    bindPopover,
} from 'material-ui-popup-state/hooks'

import {Fab, makeStyles, Popover, Tooltip} from "@material-ui/core";
import MapsIcon from "@material-ui/icons/MapSharp";
import HelpIcon from "@material-ui/icons/HelpSharp";
import BaseMapPopoverContent from "./content/BaseMapPopoverContent";

const useStyles = makeStyles(theme => ({
    typography: {
        margin: theme.spacing(2),
    },
    fab: {
        margin: theme.spacing(1),
    }
}));


export default function OnMapPopover(props) {
    const classes = useStyles();
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoPopover',
    });
    let icon, content, anchorOrigin, transformOrigin = null;
    let label = "";

    if (props.type === "basemap") {
        label = "Base Maps";
        icon = <MapsIcon/>;
        content = <BaseMapPopoverContent MapAPI={props.MapAPI} popupState={popupState} />;
        anchorOrigin = {
            vertical: 'center',
            horizontal: 'left',
        };
        transformOrigin = {
            vertical: 'center',
            horizontal: 'right',
        };
    }
    if (props.type === "help") {
        label = "What is this?";
        icon = <HelpIcon/>;
        anchorOrigin = {
            vertical: 'center',
            horizontal: 'left',
        };
        transformOrigin = {
            vertical: 'center',
            horizontal: 'right',
        };
    }
    return (

        <div className={classes.divStyle}>
            <Tooltip title={label} aria-label={label}>
                <Fab color="secondary" aria-label={label} className={classes.fab} {...bindTrigger(popupState)}>
                    {icon}
                </Fab>
            </Tooltip>
            <Popover
                {...bindPopover(popupState)}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
            >
                {content}
            </Popover>
        </div>
    )
};


