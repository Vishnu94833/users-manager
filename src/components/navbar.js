import React, { Component } from 'react';

import Button from './button'

class navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="navbar-brand" href="#">
                        <img src="" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Manage Users
                    </div>

                    <Button class="btn-light" label='Add New' click={()=>console.log('added new')}></Button>
                </nav>
            </div>
                );
            }
        }
        
export default navbar;