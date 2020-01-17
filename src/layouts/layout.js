import React, { Component } from 'react';
import './layout.scss'

import Navbar from '../components/navbar'
import Button from '../components/button'
import Input from '../components/input'
import Table from '../components/table'

class layout extends Component {
    render() {
        // let btn = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-light', 'btn-dark'];
        let headerArr = ['First Name', 'Last Name', 'Address', 'City', 'State', 'Order Total']

        let tableBody = [
            {
                id: 1,
                "firstName": "Aastha",
                "lastName": "Gupta",
                "gender": "female",
                "email": "ag@gmail.com",
                "address": "41/A,Sai Darbar Apartment,Opp Varishta Hotel,Sector-20,Koperkhairne,Navi Mumbai,Mumbai-400709",
                "city": "Mumbai",
                "state": "Maharashtra",
                "orderTotal": "9000"
            },
            {
                id: 2,
                "firstName": "Vishnu",
                "lastName": "Kuppan",
                "gender": "male",
                "email": "vk@gmail.com",
                "address": "43,7th Cross,Lakshmi Layout , Pwd Main Rd,Akash Nagar,A narayanapura,Bengaluru-560016",
                "city": "Bengaluru",
                "state": "Karnataka",
                "orderTotal": "70000"
            },
            {
                id: 3,
                "firstName": "Harshita",
                "lastName": "Mata",
                "gender": "female",
                "email": "hm@gmail.com",
                "address": "21 2nd Street",
                "city": "Chandigarh",
                "state": "Punjab",
                "orderTotal": "17000"
            },

            {
                id: 4,
                "firstName": "Vishal",
                "lastName": "Gowda",
                "gender": "male",
                "email": "vg@gmail.com",
                "address": "5th main,3rd Cross,R S Palya,Kamanahalli,Bangalore-560045",
                "city": "Bengaluru",
                "state": "Karnataka",
                "orderTotal": "70000"
            }
        ]

        return (
            <div className="">
                <div className="">
                    <Navbar />
                </div>

                <div className="container my-5">
                    <Table header={headerArr} body={tableBody} click={(e) => console.log(e)} />
                </div>
            </div>
        );
    }
}

export default layout;