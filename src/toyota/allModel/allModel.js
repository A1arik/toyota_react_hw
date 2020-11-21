import React from 'react';
import ToyotaModelsSmall from "./allModelSmall";
import './style.css';

//  http://lara.toyota.nikolaev.ua/ajax/all_model

class ToyotaModels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://lara.toyota.nikolaev.ua/ajax/all_model")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul id='carList' className='row'>
                    {items.map(item => (
                        <ToyotaModelsSmall car={item}></ToyotaModelsSmall>
                    ))}
                </ul>
            );
        }

    }
}

export default ToyotaModels;
