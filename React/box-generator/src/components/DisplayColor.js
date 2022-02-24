import React from 'react';

const DisplayColor = (props) => { 
    const { colors = [] } = props;
    return (
        <div>
            {
            colors.map((colors, index) => (
                <div key={index} style={{backgroundColor: colors, width: 100, height : 100, display : 'inline-block', margin : 20}}>

                </div>
            ))
            }
            {/* {
                colors.map( (item, index) =>
                <div key={index}>{ item }</div>
                )
            } */}
        </div>
    );
};
// style={{ 
//     display: "inline-block",
//     margin: "10px",
//     height: box.size, 
//     width: box.size, 
//     backgroundColor: box.colors
// }}
export default DisplayColor;