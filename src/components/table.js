import React, { Component } from 'react';

import Modal from './modal'
import Button from '../components/button'
import Input from '../components/input'

class table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerData :{}, 
            header: [], 
            body: [], 
            isShowing: false, 
            modalData: [] 
        };
    }

    openModal = (element) => {
        console.log(element);
        this.setState({
            isShowing: true
        });
        this.setState({
            modalData: element
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    addNewCustomer(){

    }

    render() {

        let header = this.props.header;
        let headerElement = [];
        header.forEach(element => {
            headerElement.push(<th scope="col">{element}</th>)
        });

        let body = this.props.body;
        let tableBody = [];
        body.forEach(element => {
            tableBody.push(
                <tr key={element.id} onClick={() => this.openModal(element)} data-toggle="modal" data-target="#exampleModalScrollable">
                    <td>{element.firstName}</td>
                    <td>{element.lastName}</td>
                    <td>{element.address}</td>
                    <td>{element.city}</td>
                    <td>{element.state}</td>
                    <td>{element.orderTotal}</td>
                </tr>

            )
        });

        let modal;
        if (this.state.isShowing) {
            modal = 
            (
            <Modal
                isShowing={this.state.isShowing}
                close={this.closeModalHandler}
                data={this.state.modalData}>
            </Modal>
            )
        }
        else {
            modal = '';
        }

        return (
            <div>
                <div className="content">
                    <div className="form-group">
                        <label for="filter">Filter</label>
                        <input className="form-control" type="text" value="" id="filter" name="filter" />
                    </div>
                    <div>
                        <Button class="btn-dark" click={() => this.openModal(this.state.modalData)} label="Add New Customer" />
                    </div>
                </div>
                {modal}
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            {headerElement}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default table;