import React from 'react';
import "../card.css";

/**
 * individual card component. Saves code reuse.
 * A refactor may be considered here, as the component might be considered
 * bloated. However, I would argue against this as it makes more sense (at least
 * to me) to have all card data in the card component. Readability and all that.
 * 
 * The class parameters (xs, mt, ml) basically determine the padding between 
 * individual cards. It automatically places cards either horizontally or vertically,
 * depending on screen size. This enables it to look great no matter the screen size (as far
 * as I'm aware, at least - not sure how to test on mobile)
 * 
 * Sorry about the divs.
 * @param {*} props 
 */

const Card = props => {
    return (
        <div class="col-md-4 col-xs-6 mt-3">
            <div className="card text-left shadow">

                <div className="card-body text-dark">
                    <div className="image-top">
                        <img src={props.image} alt="Image Header" className='card-img-top' />
                        <div className="card-category">
                            {props.category}
                        </div>
                        <div>
                            {props.imageType == 'sale' ?
                                <h6 className="card-img-text" style={{ color: 'black', backgroundColor: 'yellow' }}>
                                    <span>{props.imageText} &nbsp;</span>
                                </h6>
                                :
                                <h6 className="card-img-text" style={{ color: 'white', backgroundColor: 'red' }}>
                                    <span>{props.imageText} &nbsp;</span>
                                </h6>
                            }
                        </div>
                    </div>

                    <div className="card-logo">
                        <img src={props.logo} class="img-fluid"></img>
                    </div>
                    {props.departure.length > 1 ?
                        <p className="card-departure-date">Departing on: {
                            new Intl.DateTimeFormat('en-GB', {
                                month: 'long',
                                day: '2-digit',
                                year: 'numeric'
                            }).format(new Date(props.departure[0]))
                        }</p>
                        :
                        <p className="card-departure-date">Multiple departure dates</p>
                    }
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">{props.description}</p>
                    <div className="card-bottom-row">
                        <p className="card-duration"><span>{props.duration} days from:</span></p>
                        <span className="card-price">{props.currency}{props.price}</span>
                        <span className="card-price_unit">pp</span>
                        <div className="card-bottom-row-right">
                            <a href="#" className="btn btn-lg btn-primary">Explore trip</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;