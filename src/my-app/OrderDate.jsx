import React from "react";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import SearchBox from './searchBox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const grid_item_style = {
    style: {
        height: '32px',  
        display: 'flex',
        alignItems: 'center',
        padding: 0,
    },
}

const today = dayjs(); //현재 날짜와 시간을 나타내는 객체 생성
const nextMonth = today.add(1, 'month');

function OrderDate(props){
    return(
        <Grid item xs={6} style={grid_item_style.style }>
            <SearchBox name="지시일자" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{height:'35px', padding: 0, marginTop: 0.5, }}>
                <div style={{ width: '140px', }}>
                    <DatePicker 
                            sx={{
                            borderRadius: '5px',
                            background: 'white', 
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
                        }} 
                        slotProps={{ textField: { size: 'small' } }} 
                        format="YYYY-MM-DD" value={today} 
                    />
                </div>
                <div style={{ color: 'white', marginTop: 4, }}>~</div>
                <div style={{ width: '140px', height: '30px'}}>
                    <DatePicker 
                            sx={{
                            borderRadius: '5px',
                            background: 'white', 
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
                        }} 
                        slotProps={{ textField: { size: 'small' } }} 
                        format="YYYY-MM-DD" value={nextMonth} 
                    />
                </div>
                </DemoContainer>
            </LocalizationProvider>
        </Grid>
    );
}

export default OrderDate;