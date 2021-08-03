import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AllDataCard from './components/AllDataCard';


class AllDataAPI extends Component {
constructor(props){
    super(props);

    this.state = ({
        colors:null,
    });
}

componentDidMount() {
axios.get(`${process.env.REACT_APP_SERVER}/colors`).then((dataResult)=>{
    this.setState({
        colors:dataResult.data.map((color)=>{
            return <AllDataCard color={color}/>
        }),
    });
});
}



    render() {
        return (
            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                {this.state.colors}
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
