import React, { Component } from 'react';
import renderEditData from '../actions/personal';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.renderData = this.renderData.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdit = this.handleDelete.bind(this);
  }

  handleEdit(index, item) {
    this.props.dispatch(renderEditData(item));
  }

  handleDelete(index, itemID) {
    console.log(index);
    console.log(itemID);
  }
   
  renderData() {
    let dataRecord;
    if(Array.isArray(this.props.value.data) && this.props.value.data.length > 0) {
      dataRecord = this.props.value.data.map((item,index) => {
      return (<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.source}</td>
            <td>
              <button className="btn btn-success" onClick={(event) => this.handleEdit(index,item)}>Edit</button>
              <button className="btn btn-warning" onClick={(event) => this.handleDelete(index,item.id)}>Delete</button>
            </td>
        </tr>)
    })
  }
    return dataRecord;
  }

  render() {
    return (
      <div className="App">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Source</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>  
            {this.renderData()}      
          </tbody>
        </table> 
      </div>
    );
  }
}

export default AppComponent;
