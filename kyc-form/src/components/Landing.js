import React, { Component } from 'react';
import { register } from './UserFunctions';


class Landing extends Component {

	 /*  fileObj = [];
    fileArray = [];*/

    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            pan: '',
            aadhar: '',
            phone: '',
            /*file: [null]*/
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      /*  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)*/
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            pan: this.state.pan,
            aadhar: this.state.aadhar,
            phone: this.state.phone
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

   /* uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }  */
  

render () {
        return (
        	<div className="container">
	      		<div className="mt-5">
	                        <h1 className="text-center font-weight-bold" >WELCOME TO THE KYC REGISTRATION CENTRE</h1>
	            </div>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pan">PAN Card </label>
                                <input type="tel"
                                    className="form-control"
                                    name="pan"
                                    placeholder="Enter PAN code"
                                    value={this.state.pan}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="aadhar">Aadhar Card No. </label>
                                <input type="tel"
                                    className="form-control"
                                    name="aadhar"
                                    placeholder="Enter Your Aadhar No."
                                    value={this.state.aadhar}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Mobile No. </label>
                                <input type="tel"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Enter Your Mobile No."
                                    value={this.state.phone}
                                    onChange={this.onChange} />
                            </div>
                            {/*<div className="form-group multi-preview">
                                {(this.fileArray || []).map(url => (
                                    <img src={url} alt="profile" height="150" width="150" hspace="10"/>
                                ))}
                            </div>
                            <div className="form-group">
                                 <label htmlFor="file">Upload Files </label>
                                <input type="file" className="form-control text-wrap" onChange={this.uploadMultipleFiles} multiple />
                            </div> */}
                            <button type="submit" className="btn btn-lg btn-primary btn-block text-wrap" onClick={this.uploadFiles}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;