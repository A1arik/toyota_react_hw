import React from 'react';
import ToyotaModelsSmall from "../allModel/allModelSmall";


class ToyotaModColor extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            curImg: '',
            rgb: '#fff'
        };

        console.log("Mod ID: " + props.modId);
    }

    componentDidMount() {
        fetch("http://lara.toyota.nikolaev.ua/ajax/mod_color?id="+ this.props.modId)
            .then(res => res.json())
            .then(
                (result) => {
                    let pr = '';
                    let rgb = '';
                    if (result[0])
                    {
                        if (result[0].preview)
                        {
                            pr = result[0].preview
                        }
                        else if(result[0].rgb)
                        {
                            rgb = result[0].rgb
                        }
                    }
                    this.setState({
                        isLoaded: true,
                        items: result,
                        curImg: pr,
                        rgb: rgb
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
                    <div style={{background: this.state.rgb}}>
                        <img src={'http://lara.toyota.nikolaev.ua/storage/' + this.state.curImg}/>
                    </div>


                    <ul id='carColors' className='row'>
                        {items.map(item => (
                            <li className='col-12' style={{background: item.rgb}}
                                onClick=
                                    {   () =>
                                    {
                                        this.setState({curImg: item.preview, rgb: item.rgb})
                                    }
                                    }
                            >
                                {item.color_name}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}
export default ToyotaModColor;
