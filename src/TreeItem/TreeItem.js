import React, { Component } from 'react';
import './TreeItem.css';


export default class TreeItem extends Component {

constructor(props){
  super(props);
  this.state = {
    isMenuVisible: false
  }
}

handleClick = (evt) =>{
  if(this.props.list && this.props.list.length>0){
    console.log("in")
    this.setState({isMenuVisible:!this.state.isMenuVisible})
  }

  this.props.handleClick(evt);
}

  render() {


    let list = this.props.list?this.props.list:[];

    let sortIcon= "";
    if(this.state.isMenuVisible){
        sortIcon =  (<i className="fa fa-sort-desc" aria-hidden="true"></i>);;
    }

    let level = this.props.level?this.props.level+1:1;
    let paddingLeft= this.props.paddingLeft ? this.props.paddingLeft : 0;
    paddingLeft += 10*level;


    return (
      <div>
        <div onClick={this.handleClick} className={this.props.classNames.itemName} style={{paddingLeft:paddingLeft}} id={this.props.id}>
          {this.props.name} {sortIcon}
        </div>
        <div className={this.state.isMenuVisible===true ? "visible-menu" : "hidden-menu"}>
        {list.map((item,i) => {
          return <TreeItem 
          key={"tvs"+i} 
          {...item}
          classNames={this.props.classNames}
          level={level} 
          handleClick={this.props.handleClick} /> 
        })}   
        </div>
      </div>

    );
  }
}
