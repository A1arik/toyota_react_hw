import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import ToyotaMod from "../mod/toyotaMod";

class ToyotaModelsSmall extends React.Component {

    render() {
        return (
            <li className='col'>
                <h3>{this.props.car.name} <span> ({this.props.car.id}) /{this.props.car.slug}</span></h3>
                <Link to={'models/' +this.props.car.id}>
                    <img src={'https://www.toyota.nikolaev.ua/storage/' + this.props.car.image} />
                </Link>
            </li>
        );
    }
}

export default ToyotaModelsSmall;
