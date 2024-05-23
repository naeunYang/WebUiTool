import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import OrderDate from './OrderDate';
import LineName from './LineName';
import MachineName from './MachineName';
import Item from './Item';
import OrderNo from './OrderNo';
import WorkOrder from './work.json';
import TableGrid from './TableGrid';
import SplitPane from 'react-split-pane';
import { Box, Typography } from '@mui/material';
import SplitTest from './SplitTest';


// DatePicker속성
// -sx: 추가 css스타일 적용
// -format: placeholder
// -label: The label content.

const grid_container_style = {
    style: {
        maxWidth: 1100, 
        height: '100%', 
        paddingTop: '17px',
        paddingBottom: '5px',
    },
}

const cnt = WorkOrder.length;

const contents = [
    {
        //rowSpacing: 행 간격
        //columnSpacing: xs(작은화면), sm(중간화면), md(큰화면) -> 화면 크기에 따른 열 간격
        //container 속성: 해당 요소가 그리드 컨테이너임을 나타냄
        //item 속성: 해당 요소가 그리드 아이템임을 나타냄

        detail: (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={grid_container_style.style}>  
                <OrderDate />
                <LineName />
                <Item />
                <MachineName />
                <OrderNo />
            </Grid>
        ),
        style: {
            background: "#465E7F",
            height: 130,
        }
    },
    {
        detail: (
            <div style={{letterSpacing: -1, }}>
                작업지시 현황 <span style={{fontWeight: 'bold'}}>&nbsp;&nbsp;{cnt}건</span>
            </div>
        ),
        style: {
            fontSize: 14,
            background: "#F0F0F0",
            height: 45,
            border: '1px solid black',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
        }
    },
    {
        detail: (
            <SplitTest />
        ),
        style: {
            background: "white",
            height: 744,
            padding: 0,
        }
    }
];

function PanelList(props){
    return(
        <div>
            {contents.map((content, index) => {
                return(
                    <Container maxWidth="" key={index} style={content.style}>
                        {content.detail}
                    </Container>
                );
            })}
        </div>
    );
}

export default PanelList;