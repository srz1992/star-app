import React, { Component } from 'react';


class Star extends Component {

    constructor(props){

        // React Components have props, pass them to the parent (Component)
        // parent (component) class - if you don't, things won't work right
        super(props);

        // Setting state with an equal sign is something you only want to do in the constructor
        // The state is everything this component needs to know. All of its properties.
        // Outside of the constructor, always use the setState method.
        // this.state = { star: { name: 'Menkar' , brightness: 5} };
        this.state = { star: { name: 'Menkar' , brightness: 5} };


        // make sure the handle 

        // you only need this if you don't make an arrow function!
        // this.handleChange = this.handleChange.bind(this);
    }

    // by making this an arrow function, 'this' is bound for you! 
    // use arrow functions!
    // handleChangeForName = (event) => {
    // console.log(event.target);
    // // change state using setState not an =
    // this.setState({star: {...this.state.star, name: event.target.value}})
    // }

    // handleChangeForBrightness = (event) => {
    //     console.log(event.target);
    //     // change state using setState not an =
    //     this.setState({star: {...this.state.star, brightness: event.target.value}})
    // }



    // currying
    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        this.setState({star: {...this.state.star, [propertyName]: event.target.value}})
        }

    render() {
      return (
        <div>
            <h2>The Best Star Ever</h2>
            <input onChange={this.handleChangeFor('name')} />
            <input onChange={this.handleChangeFor('brightness')} />
            <p>Name: {this.state.star.name}</p>
            <p>Brightness: {this.state.star.brightness}</p>
        </div>
      );
    }
  }

export default Star