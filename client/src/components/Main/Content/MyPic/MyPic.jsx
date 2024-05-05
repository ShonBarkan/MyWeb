import React from 'react';

const MyPic = () => {
    return (
        <div className='container' style={{ position: 'relative' }}>
            <img style={{ height: '400px', position: 'absolute', top: 0, left: 0 }} src="/assets/main_blob.svg" alt="SVG Image" />
            <img style={{ height: '250px', position: 'absolute', top: '40px', left: '10px' }} src="/assets/me_no_background.png" alt="SVG Image" />
        </div>
    );
}

export default MyPic;
