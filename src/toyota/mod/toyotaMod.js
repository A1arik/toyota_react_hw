import React from 'react';
import ToyotaModelsSmall from "../allModel/allModelSmall";
import ToyotaModColor from "./toyotaModColor";
import ToyotaEng from "./toyotaEng";
import ToyotaPrice from "./modPrice";

class ToyotaMod extends React.Component {

    modelId = 0;

    constructor(props) {
        super(props);
        this.modelId = this.props.match.params.id;

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://lara.toyota.nikolaev.ua/ajax/id_mod?id="+ this.modelId)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("then: ");
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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
                <ul id='carList' className='row'>
                    {items.map(item => (
                        <li className='col'>
                            <ToyotaPrice modId={item.mod_id}></ToyotaPrice>
                            <h3>{item.model_name_pivot}</h3>
                            <ToyotaModColor modId={item.mod_id}></ToyotaModColor>
                            <ToyotaEng modId={item.mod_id}></ToyotaEng>
                        </li>
                    ))}
                </ul>
            );
        }

    }
}
export default ToyotaMod;
