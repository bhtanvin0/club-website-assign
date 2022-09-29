import React from 'react';
import './Work.css'

const Work = (props) => {
    const{picture, name, Time, about} = props.work;
    return (
        <div className='work'>
            <img src={picture} alt="" />
            <div className='work-info'>
            <h4 className='work-name'>{name}</h4>
            <p className='work-about'>{about}</p>
            <h5 className='work-time'>Time required: {Time}s </h5>
            </div>
            <button onClick={() => props.handleAddToProfile(props.work)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Work;