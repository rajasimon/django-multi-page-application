import {h, Component } from 'preact';
import axios from 'axios';

class CSVUploader extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        filename: "Please upload csv file first"
      }
  }

  handleFile=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
      filename: event.target.files[0].name
    })
  }

  handleUpload = () => {
    const data = new FormData() 
    data.append('csvfile', this.state.selectedFile)

    axios.post("http://localhost:8000/upload/", data)
      .then(res => {
        console.log(res.statusText)
      })
  }

	render({ name }) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">CSV File Uploader</h1>
          <form>
            <div className="field">
              <div className="file has-name">
                <label className="file-label">
                  <input className="file-input" type="file" onChange={this.handleFile} />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span className="file-name">
                    {this.state.filename}
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <button type="button" className="button" onClick={this.handleUpload}>Upload</button> 
            </div>
          </form>
        </div>
      </section>
    )
	}
}

export default CSVUploader;