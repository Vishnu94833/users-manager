import React, { Component } from 'react';

import '../assets/styles/card.scss';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class card extends Component {

    componentDidMount() {

    }

    employeeDetails(id){
        
        // fetch('http://dummy.restapiexample.com/api/v1/employee/1')
        //     .then(response => console.log(response)
        //     )
        //     .then(resData => {
        //         console.log(resData);
        //         // this.setState({ person: resData.data }); //this is an asynchronous function
        //     })
        // let path = "/employee/"+id;
        return  <Redirect to="/employee/1"/>;
    }


    render() {
        let data = this.props.cardData;
        data.forEach(element => {
            let add = element.address

            console.log(add);
            
        });
        // console.log(data[0].address);
        return (
            <React.Fragment>
                <div className='card-container'>
                    {
                        data.map((item) => {
                            return (

                                // <Link to={`/employee/${item.id}`}>
                                <div className="card" onClick={()=>this.employeeDetails(item.id)} style={this.props.cardWidth} key={item.id}>
                                    {/* <img src={item.profile_image} alt="Avatar" /> */}
                                    <div className="container">
                                        <h4><b>{item.name}</b></h4>
                                        <h3>{item.username}</h3>
                                        <p>{item.email}</p>
                                        <p>{JSON.stringify(item.address)}</p>
                            {/* <p>{item.address.suite},{item.address.street},{item.address.city}-{item.address.zipcode}</p> */}
                                    </div>
                                </div>
                                // </Link>
                                )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default card;