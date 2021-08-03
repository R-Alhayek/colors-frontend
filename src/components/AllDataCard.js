import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class AllDataCard extends React.Component {
    render() {
        return (
            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.colors.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.colors.title}</Card.Title>
                        
                        <Button variant="primary">Add To Favorite </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AllDataCard
