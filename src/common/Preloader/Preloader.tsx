import React from 'react';
import preloader from '../../assets/images/preloader.svg'

const Preloader: React.FC = () =>{
    return <div>
        <img src={preloader} alt="" />
    </div>
};

export default Preloader;