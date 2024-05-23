import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const styles = {
    name: {
        color: '#ffffff',
        letterSpacing: -0.5, 
        fontSize: 15,
        marginRight: 50,
        marginLeft: 50,
    },
}

function searchBox(props){
    return(
        <div>
            <Box>
                <span style={styles.name}>{props.name}</span>
            </Box>
        </div>
    );
}

export default searchBox;