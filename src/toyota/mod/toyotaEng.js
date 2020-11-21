import React from 'react';


class ToyotaEng extends React.Component {



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
        fetch("http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear?id="+ this.props.modId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
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
                    <h3>Engines</h3>
                    <ul id='carEng' className='row'>
                        {items.map(item => (
                            <li>{item.eng_name}</li>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}
export default ToyotaEng;
