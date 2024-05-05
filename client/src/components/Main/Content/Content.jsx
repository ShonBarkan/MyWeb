import React from 'react';
import MyPic from './MyPic/MyPic';
import MyName from './MyName/MyName';

const MyContent = () => {
    return (
        <div style={{display:'flex'}}>
            <MyPic/>
            <MyName/>
        </div>
    );
}

export default MyContent;
