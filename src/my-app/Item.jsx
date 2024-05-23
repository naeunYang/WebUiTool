import React, { useState} from "react";
import { Grid, Box } from '@mui/material';
import SearchBox from './searchBox';
import TextField from '@mui/material/TextField';
import Popup from './Popup';
// variant: 텍스트 필드의 스타일 변형 지정(박스 유형)

const grid_item_style = {
    style: {
        height: '32px',  
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
}

function Item(props){
    return(
        <Grid item xs={6} style={grid_item_style.style}>
            <SearchBox name="품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목" />
            <TextField placeholder="Code" variant="outlined" size="small" 
             sx={{
                borderRadius: '5px',
                background: 'white', 
                marginRight: 0.5,
                '.MuiInputBase-input': {
                    fontSize: '0.9rem', // 폰트 크기 조정
                },
                '.MuiInputBase-root': {
                    width: '140px',
                    height: '30px', // 높이 조정
                },
                '.MuiInputLabel-root': {
                    fontSize: '0.9rem', // 라벨 폰트 크기 조정
                },
            }} />
            <TextField placeholder="Name" variant="outlined" size="small" 
             sx={{
                borderRadius: '5px',
                background: 'white', 
                marginRight: 0.5, 
                '.MuiInputBase-input': {
                    fontSize: '0.9rem', // 폰트 크기 조정
                },
                '.MuiInputBase-root': {
                    width: '180px',
                    height: '30px', // 높이 조정
                },
                '.MuiInputLabel-root': {
                    fontSize: '0.9rem', // 라벨 폰트 크기 조정
                },
            }} />

            <Popup />

        </Grid>
    );
}

export default Item;