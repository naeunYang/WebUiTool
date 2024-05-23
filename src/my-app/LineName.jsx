import React from "react";
import { Grid } from '@mui/material';
import SearchBox from './searchBox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WorkCenter from './workcenter.json';

const grid_item_style = {
    style: {
        height: '32px',  
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
}

const checkbox_style = {
    style1: {
        width: '170px',
        height: '30px',
        background: 'white',
        fontSize: 14,
    },

    style2: {
        fontSize: 14,
    }
}


function LineName(props){
    return(
        <Grid item xs={6} style={grid_item_style.style}>
            <SearchBox name="라인명" />
            <FormControl>
                <Select
                    defaultValue={'W00'}
                    style={checkbox_style.style1}
                >
                    <MenuItem style={checkbox_style.style2} value={'W00'}>전체</MenuItem>
                    {WorkCenter.map((item) => (
                        <MenuItem style={checkbox_style.style2} value={item.WC_CODE}>{item.WC_NAME}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default LineName;