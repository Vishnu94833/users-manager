import React, { Component } from 'react';

class employeeManagement extends Component {


    async postData(url = '') {
        const response = await fetch(url, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json'
          },
        });
        return await response.json();
      }

    componentDidMount() {
      this.postData('https://jsonplaceholder.typicode.com/posts/1')
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
      });
    }


    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default employeeManagement;