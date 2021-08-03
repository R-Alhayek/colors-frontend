import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateModal from './UpdateModal';

class FavCard extends React.Component {
constructor(props){
    super(props);

    this.state = ({
        colors:null,
        showModal:false,
    });
}







    render() {
        return (
            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.colors.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.colors.title}</Card.Title>
                        
                        <Button variant="danger">Remove</Button>
                        <Button variant="primary">Update</Button>
                    </Card.Body>
                </Card>

                <UpdateModal show={this.state.showModal} close={this.handleClose}/>

            </div>
        )
    }
}

export default FavCard;
