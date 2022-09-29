import React, { useEffect, useState } from 'react';
import './Activity.css'
import Work from '../Work/Work';


const Activity = () => {
    const [works, setworks] = useState([])
    const [time,setTimeSet]=useState(0)
    function setTime (e){
        const times=e.target.innerText
        setTimeSet(times)
    }


    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setworks(data))
    }, []);

    const [menits, setmenits] = useState(0)
    const handleAddToProfile = (work) => {
        const total = menits + work.Time
        console.log(total)
        setmenits(total)
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
                        works.map(work => <Work
                            key={work.id}
                            work={work}
                            handleAddToProfile={handleAddToProfile}
                        ></Work>)
                    }
                </div>

            </div>
            <div className=" mt-5 bg-amber-600 p-3">
                <h3>Add A Break</h3>
                <div className='flex mx-3 '>
                    <button className='mx-1 bg-cyan-500 p-2 text-xl'> <span onClick={(e)=>setTime(e)}>10</span>s</button>
                    <button className='mx-1 bg-cyan-500 p-2 text-xl'> <span onClick={(e)=>setTime(e)}>20</span>s</button>
                    <button className='mx-1 bg-cyan-500 p-2 text-xl'> <span onClick={(e)=>setTime(e)}>30</span>s</button>
                    <button className='mx-1 bg-cyan-500 p-2 text-xl'> <span onClick={(e)=>setTime(e)}>40</span>s</button>
                    <button className='mx-1 bg-cyan-500 p-2 text-xl'> <span onClick={(e)=>setTime(e)}>50</span>s</button>
                </div>
                <h3> Exercise Details</h3>
                <div>
                    <h5>Exercise time{time}</h5>
                   
                </div>
                <div>
                    <h5>Break time :{menits}</h5>
                    
                </div>

                <button>Activity Completed</button>
                
            </div>

        </div>



    );
};

export default Activity;