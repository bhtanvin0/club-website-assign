import React, { useEffect, useState } from 'react';
import './Activity.css'
import Work from '../Work/Work';


const Activity = () => {
    const[works, setworks] = useState([])

    useEffect( ()=> {
        fetch ('fakedb.json')
        .then(res=>res.json() )
        .then(data => setworks(data))
    }, []);


    const handleAddToProfile =(work)=>{
        console.log(work)
    }

    return (

            
     <div className='activity-container'>
            
        <div>
            <div>
            <div className='header'>
                <img className='img' src="https://inlikeme.com/wp-content/uploads/2019/05/Messages-Image458805902.jpeg" alt="" />
                <h2>DtRA-Active-club</h2>
            </div>
            <h4>Nowadays Some HardWord</h4>
            </div>
            
            <div className="works-container">
            {
                works.map(work=> <Work 
                    key={work.id}
                    work={work}
                    handleAddToProfile={handleAddToProfile}
                    ></Work>)
            }
            </div>
            
        </div>
        <div className="cart-container">
            <h3>Cart Container</h3>
        </div>
    </div>

        
    );
};

export default Activity;