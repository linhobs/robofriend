import React from 'react';


const Card=(props)=>{
    return(
    
<div className="bg-light-green dib pa3 ma2 br3 grow bw2 shadow-5 tc">
    <img src={`https://robohash.org/${props.id}`} width="200" height="200" alt="Robot"/>
    <div className="">
        <h2 className="p">{props.name}</h2>
        <p>{props.email}</p>
    </div>
</div>




    );
}

export default Card;
