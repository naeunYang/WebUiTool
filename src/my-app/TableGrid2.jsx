import React from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import ItemList from './itemList.json'

const columns = [
    {
      field: 'itemCode',
      headerName: '품목 코드',
      width: 180,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
    {
      field: 'itemName',
      headerName: '품목명',
      width: 200,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      align: 'center',
    },
  ];

const rows = ItemList;

  function TableGrid2(props){
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
            hideFooter
            paginationMode="server"
          />
    );
  }

  export default TableGrid2;