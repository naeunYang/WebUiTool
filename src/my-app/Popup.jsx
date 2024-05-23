import React, { useState} from "react";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import img from './magnifier2.png';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ItemSearchBox from './ItemSearchBox';
import TableGrid2 from './TableGrid2';
import ItemList from './itemList.json'

const img_style = {
    style: {
        width: '24px',
        height: '24px',
    }
}

// 모달 스타일 정의
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 565,
    bgcolor: 'background.paper',
    border: '1px solid #F0F0F0',
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
  };

  const popupStyle = {
    search: {
        width: '100%',
        height: 90,
        paddingTop: 15,
        position: 'relative',
    },

    grid: {
        width: '100%',
        height: 400,
        padding: 0,
    },

    confirm: {
        width: '100%',
        height: 40,
        marginTop: 5, 
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
  }


function Confirm(){
    alert('ekerl');
}
  

const cnt = ItemList.length;

function confirm(){
    
}

function Popup(){
    // 모달의 열림/닫힘 상태를 관리하는 상태 변수
 const [open, setOpen] = useState(false);

 // 모달을 여는 함수
 const handleOpen = () => setOpen(true);

 // 모달을 닫는 함수
 const handleClose = () => setOpen(false);

 return (
   <div>
     <Button variant="contained" size="small" sx={{ width: '5%', minWidth: '35px', height: '90%', midHeight: '40px',}} onClick={handleOpen}>
       <img src={img} alt="Search" style={img_style.style}/>
     </Button>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-title"
       aria-describedby="modal-description"
     >
       <Box sx={modalStyle}>
         <Typography id="modal-title" variant="h6" component="h2" align="center" fontWeight={'bold'}>
           품목검색
         </Typography>
         <Typography id="modal-description" sx={{ mt: 2 }}>
            <Container style={popupStyle.search}> 
                <div style={{marginBottom:5, display: 'flex', alignItems: 'center'}}>
                    <ItemSearchBox name="품목코드" />
                    <TextField placeholder="Code" variant="outlined" size="small" 
                        sx={{
                            borderRadius: '5px',
                            background: 'white', 
                            marginRight: 0.5,
                            '.MuiInputBase-input': {
                                fontSize: '0.9rem', // 폰트 크기 조정
                            },
                            '.MuiInputBase-root': {
                                width: '200px',
                                height: '30px', // 높이 조정
                            },
                            '.MuiInputLabel-root': {
                                fontSize: '0.9rem', // 라벨 폰트 크기 조정
                            },
                        }} />
                </div>
                <div style={{marginBottom:5, display: 'flex', alignItems: 'center'}}>
                    <ItemSearchBox name="&nbsp;&nbsp;품목명" />
                    <TextField placeholder="Code" variant="outlined" size="small" 
                        sx={{
                            borderRadius: '5px',
                            background: 'white', 
                            marginLeft: 0.9,
                            marginRight: 0.5,
                            '.MuiInputBase-input': {
                                fontSize: '0.9rem', // 폰트 크기 조정
                            },
                            '.MuiInputBase-root': {
                                width: '200px',
                                height: '30px', // 높이 조정
                            },
                            '.MuiInputLabel-root': {
                                fontSize: '0.9rem', // 라벨 폰트 크기 조정
                            },
                        }} />
                </div>
                <Button variant="contained" size="small" sx={{ width: '35px', minWidth: '35px', height: '35px', midHeight: '35px',}} style={{position: 'absolute', top: 30, right: 10, }} >
                    <img src={img} style={img_style.style}/>
                </Button>
            </Container>

            <Container style={popupStyle.grid}> 
                <TableGrid2 />
            </Container>

            <Container style={popupStyle.confirm}> 
                <span style={{letterSpacing: -0.5, fontSize: 14, color: '#1976D2', fontWeight: 550, marginLeft: 5, }}>{cnt}건</span>
                <div>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#1976D2', marginRight: 1, }} onClick={() => {
                        handleClose();
                        confirm();
                    }}>확인</Button>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#1976D2'}} onClick={handleClose}>취소</Button>
                </div>
            </Container>
         </Typography>
       </Box>
     </Modal>
   </div>
 );
}

export default Popup;