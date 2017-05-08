This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Add the css styles in the parent component and pass the class names in the classNames prop as shown below.

An example use:
```
import React, { Component } from 'react';
import TreeComponent from './TreeComponent';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data: [{     
        id: 0,
        value:'roles',
        name:'Roles',
        list : [{
          id: 4,
          value: 'prospective',
          name: 'Prospective'
        },
        {
          id: 5,
          value: 'active',
          name: 'Active',
          list: [{
            id: 12,
            value:'urgent',
            name: 'Urgent'
          },
          {
            id: 12,
            value:'other',
            name:'Other'
          }
          ]
        },
        {
          id: 6,
          value: 'withdrawn',
          name: 'Withdrawn'
        },
        {
          id: 7,
          value: 'placed',
          name: 'Placed'
        },
        {
          id: 8,
          value: 'deleted',
          name: 'Deleted'
        }],
        },
        {
          id: 1,
          value:'contacts',
          name:'Contacts',
          list : [{
            id: 9,
            value: 'intern',
            name: 'Interns'
          },
          {
            id: 10,
            value: 'company',
            name: 'Companies'
          },
          {
            id: 11,
            value: 'education',
            name: 'Education'
          }]
        }
      ]
    }
  }

  handleClick = (evt) => {
   
  }
    
  render() {


    let classNames = {
      wrapperName:'tree-wrapper',
      itemName:'tree-item'
    };


    return (
      <div className="App">
       <TreeComponent data={this.state.data} classNames={classNames} handleClick={this.handleClick}/>      
      </div>
      );
  }
}
```
