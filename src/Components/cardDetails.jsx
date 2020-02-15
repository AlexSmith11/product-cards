import React from 'react';
import img3 from '../img/mountain.jpg';

const Card = props => {
    return (
        <div className="card text-cen">
            <div className="overflow">
                <img src={img3} alt="Image 3 - Mountain" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Title of the Card</h4>
                <p className="card-text text-secondary">
                    Hello this is really cool
                </p>
                <a href="#" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    );
}

export default Card;