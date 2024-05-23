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
import Split from 'react-split';
import { Box, Typography } from '@mui/material';
import './App.css'; 
import TableGrid3 from './TableGrid3';


function SplitTest(props){
    return(
        <div style={{ height: '100%' }}>
            <Split
                sizes={[63, 37]} // 패널 크기 비율을 퍼센트로 설정
                minSize={300} // 최소 크기 설정
                expandToMin={false} //최소 크기가 minSize보다 작아지지 않도록 보장하는 역할
                gutterSize={5} // 패널 사이의 드래그 핸들 크기
                gutterAlign="center" // 드래그 핸들이 어디에 위치할지(start, center, end)
                snapOffset={30} // 드래그 핸들이 30픽셀 이하로 이동하면 스냅백
                dragInterval={1} // 드래그 핸들이 이동할 수 있는 간격
                direction="horizontal" // 수평 분할
                cursor="col-resize"
                className="split" 
            >
                <div><TableGrid /></div>
                <div>
                    <TableGrid3 />
                </div>
            </Split>
        </div>
    );
}

export default SplitTest;