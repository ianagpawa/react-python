import React, { Component } from 'react';

class DynamicSearch extends Component {
    constructor(props) {
        super(props);

        this.state = { searchString: " "}
    }

    // getInitialState() {
    //     return { searchString: " "};
    // }

    handleChange(event) {
        this.setState({searchString: event.target.value});

    }


    render() {
        let countries = this.props.items;
        const searchString = this.state.searchString.trim().toLowerCase();

        // filter countries list by value from input box
        if(searchString.length > 0){
          countries = countries.filter(function(country){
            return country.name.toLowerCase().match( searchString );
          });
        }

        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search!" />
                <ul>
                  { countries.map(function(country){ return <li>{country.name} </li> }) }
                </ul>
            </div>
        );
    }
}
//
// const DynamicSearch = React.createClass({
//
//   // sets initial state
//   getInitialState: function(){
//     return { searchString: '' };
//   },
//
//   // sets state, triggers render method
//   handleChange: function(event){
//     // grab value form input box
//     this.setState({searchString:event.target.value});
//     console.log("scope updated!");
//   },
//
//   render: function() {
//
//     var countries = this.props.items;
//     var searchString = this.state.searchString.trim().toLowerCase();
//
//     // filter countries list by value from input box
//     if(searchString.length > 0){
//       countries = countries.filter(function(country){
//         return country.name.toLowerCase().match( searchString );
//       });
//     }
//
//     return (
//       <div>
//         <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search!" />
//         <ul>
//           { countries.map(function(country){ return <li>{country.name} </li> }) }
//         </ul>
//       </div>
//     )
//   }
//
// });
//
//

export default DynamicSearch;
