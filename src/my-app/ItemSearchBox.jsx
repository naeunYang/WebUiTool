import React from 'react';
import Box from '@mui/material/Box';

const styles = {
    name: {
        color: 'black',
        letterSpacing: -0.5, 
        fontSize: 15,
        marginRight: 50,
    },
}

function searchBox(props){
    return(
        <span style={styles.name}>{props.name}</span>
    );
}

export default searchBox;