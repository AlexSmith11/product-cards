import React from 'react';
import "./card.css";

/**
 * individual card component. Saves code reuse.
 * Bootstrap is used for almost all early styling - I may have later changed.
 * @param {*} props 
 */

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 3 - Mountain" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.description}</p>
                <a href="#" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    );
}

export default Card;