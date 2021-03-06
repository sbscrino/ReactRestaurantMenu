import React, {Component} from 'react';

export default class Desserts extends Component {

  render(){
    let key = 0;
    let desserts = this.props.allDesserts.map((dessert)=>{
      key++;
      return (
        <tbody key={key}>
           <tr>
             <td key={dessert._id}>{dessert.dish}</td>
             <td key={dessert._id}>{dessert.description}</td>
             <td key={dessert._id}>{dessert.price}</td>
           </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h4>Desserts</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {desserts}
          </table>
        </div>
      </div>
    );
  }
}
