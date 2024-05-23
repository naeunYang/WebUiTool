import React from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import WorkOrder from './work.json'

const columns = [
    { 
      field: 'woNo',  //데이터 접근 시 이름
      headerName: '작업지시번호',  // 테이블에 노출되는 컬럼명
      width: 180,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      number: 'number',
    },
    {
      field: 'itemCode',
      headerName: '품목 코드',
      width: 155,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'itemName',
      headerName: '품목명',
      width: 160,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'lineName',
      headerName: '라인명',
      width: 160,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'machineName',
      headerName: '설비명',
      width: 160,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'orderDate',
      headerName: '지시일자',
      width: 135,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'orderWeight',
      headerName: '지시중량',
      width: 135,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'unit',
      headerName: '단위',
      width: 125,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
  ];

const rows = WorkOrder;

  function CustomToolbar() {
    return (
      <GridToolbarContainer style={{padding: 0, background: '#F0F0F0', borderBottom: '1px solid #E4E4E4' }}>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector
          slotProps={{ tooltip: { title: 'Change density' } }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Export data' },
            button: { variant: 'outlined' },
          }}
          csvOptions={{ 
            utf8WithBom: true, //파일 인코딩 설정
          }}

        />
      </GridToolbarContainer>
    )
  }

  function TableGrid(props){
    return(
        <DataGrid
            rows={rows}
            columns={columns}
            rowHeight={25}
            columnHeaderHeight={30}
            sx={{
              width: '100%',
              '& .super-app-theme--header': {
                backgroundColor: '#F0F0F0',
              },
            }}
            slots={{ 
              toolbar: CustomToolbar
            }}
            hideFooter
            paginationMode="server"
          />
    );
  }

  export default TableGrid;