import React from "react";
import { Grid } from '@mui/material';
import SearchBox from './searchBox';
import TextField from '@mui/material/TextField';
// variant: 텍스트 필드의 스타일 변형 지정(박스 유형)

const grid_item_style = {
    style: {
        height: '32px',  
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
}

function OrderNo(props){
    return(
        <Grid item xs={6} style={grid_item_style.style}>
            <SearchBox name="작업지시번호" />
            <TextField placeholder="No" variant="outlined" size="small" 
             sx={{
                marginLeft: -3.5,
                borderRadius: '5px',
                background: 'white', 
                '.MuiInputBase-input': {
                    fontSize: '0.9rem', // 폰트 크기 조정
                },
                '.MuiInputBase-root': {
                    width: '323px',
                    height: '30px', // 높이 조정
                },
                '.MuiInputLabel-root': {
                    fontSize: '0.9rem', // 라벨 폰트 크기 조정
                },
            }} />
        </Grid>
    );
}

export default OrderNo;