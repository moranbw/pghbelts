import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";


export default function BaseMapPopoverContent(props) {
    const [baseMap, setBaseMap] = React.useState(props.MapAPI.getCurrentBaseMap());
    const handleChange = (event, newBaseMap) => {
        props.MapAPI.switchBaseMap(newBaseMap);
        setBaseMap(newBaseMap);
        props.popupState.close();
    };
    return (
        <div>
            <ToggleButtonGroup variant="contained" color="secondary" size="small"
                               value={baseMap} exclusive onChange={handleChange} >
                <ToggleButton value="light">Light</ToggleButton>
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="aerial">aerial</ToggleButton>
            </ToggleButtonGroup>
        </div>
        );
}