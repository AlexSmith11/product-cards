import React, { component, Component } from 'react';
import Card from './cardDetails';

/**
 * Import images
 */
import img1 from '../img/mountain.jpg'
import img2 from '../img/lake.jpg'
import img3 from '../img/desert.jpg'

/**
 * Top level comp for the cards. Could control how many, where, etc.
 * We create a grid using bootstrap rows/columns.
 * We also pass in the props unique to each card.
 */
class Cards extends Component {

    componentDidMount() {
        fetch('')
    }

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                        imgsrc={img1}
                        title="Mountain"
                        description="this is a mountain"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                        imgsrc={img2}
                        title="Lake"
                        description="this is a lake"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                        imgsrc={img3}
                        title="Desert"
                        description="this is a desert"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards