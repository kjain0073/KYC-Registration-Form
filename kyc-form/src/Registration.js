import React, { Component } from 'react';

class RegistrationForm extends React.Component{

    fileObj = [];
    fileArray = [];

  constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }  
  
  
  render(){

    return(
        <div id="formContainer">
          <form id="form" action="#" method="POST" >
            <fieldset>
              <h1>KYC Registration Form</h1>
              <div id="fullName">
                <input type="text" name="fName" id="fName" placeholder="Enter Your First Name" required />
                <input type="text" name="lName" id="lName" placeholder="Enter Your Last Name" required />
              </div>
              <div id="otherInputs">
                <input type="tel" name="PAN" id="PAN" placeholder="PAN Card" required />
                <input type="tel" name="aadhar" id="aadhar" placeholder="Aadhar Card Number" required />
                <input type="address" name="address" id="address" placeholder="Enter Your Address" required />
                <input type="tel" name="phone" id="phone" placeholder="Enter Your Number" required />
                <input type="email" name="email" id="email" placeholder="Email Address" required /> 
                 <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="profile" height="150" width="150" hspace="10"/>
                    ))}
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>            
              </div>
              <input type="submit" name="submit" id="submit" onClick={this.uploadFiles} />
            </fieldset>
          </form>
        </div>
    )
  }
}

export default RegistrationForm;
