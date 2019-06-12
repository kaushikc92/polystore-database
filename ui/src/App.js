import React from 'react';
//import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.onUploadClick = this.onUploadClick.bind(this);
    this.handleUploadTable = this.handleUploadTable.bind(this);
    this.getTables = this.getTables.bind(this);
  }
  onUploadClick() {
    this.fileInput.current.click();
  }
  handleUploadTable(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.fileInput.current.files[0]);



    this.fileInput.current.value = "";
  }
  getTables() {
  }
  render() {
    let uploadButton;
    uploadButton = 
      <form className="form-upload" method="post">
        <input type="file" className="file-upload-input" ref={this.fileInput}
          onChange={this.handleUploadTable}/>
        <button type="button" className="btn btn-primary" onClick={this.onUploadClick} >
          Upload Table
        </button>
      </form> ;
    return(
      <div className="app-container">
        <h1>Hello World</h1>
        <button>Upload Table</button>
      </div>
    );
  }
}

export default App;
