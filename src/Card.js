import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className='text-center bg-green-200 inline-block rounded-lg p-4 m-2 transform transition ease-out duration-250 hover:scale-105 active:scale-90 border-2 shadow-md'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )

}

export default Card;