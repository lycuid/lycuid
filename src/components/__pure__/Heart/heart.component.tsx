import React from 'react';
import './heart.style.css';


interface HeartProps { beating?: boolean }
 
const Heart: React.SFC<HeartProps> = ({ beating }) => (<>
  <div className='heart-container'>
    <div
      className={`heart${beating != null ? ' beating' : ''}`}
    />
  </div>
</>);
 
export default Heart;
