import React from 'react';


class ToyotaPrice extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };

        console.log("Mod ID: " + props.modId);
    }

    componentDidMount() {
        fetch("http://lara.toyota.nikolaev.ua/ajax/id_mod_price?id="+ this.props.modId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: Object.values(result),
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
        console.log("render Items: ");
        console.log (items);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Price</h3>
                    <ul id='prices' className='row'>
                        {items.map(item => (
                            <li className='col-12'>
                                {item} UAH
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}
export default ToyotaPrice;
