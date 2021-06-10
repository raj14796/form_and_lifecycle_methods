import React, { Component } from 'react'
//import Axios from 'axios';
//import SuccessLogin from './SuccessLogin';
import {InputText} from 'primereact/inputtext';


class App extends Component {
  state = {
    form: {
      name: '',
      emailId: '',
      contactNo: '',
      password: ''
    },
    formValid: {
      name: false,
      emailId: false,
      contactNo: false,
      password: false, button: false
    },
    formError: {
      name: '',
      emailId: '',
      contactNo: '',
      password: ''
    },
    successMessage: '',
    successlogin: false    
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }
  handleInputChange = (e) => {
    const formobj = this.state.form
    const name = e.target.name;
    const value = e.target.value;
    formobj[name] = value;
    this.setState({ form: formobj })
    this.validateField(name, value);
  }
 
  validateField = (fieldName, value) => {
    const { formValid, formError } = this.state;
    switch (fieldName) {
      case 'name':
        if (value === "") {
          formError.name = "field required";
          formValid.name = false;
        } else if (!value.match(/^[A-Za-z ]{4,}$/)) {
          formError.name = "Name should have atleast 4 characters";
          formValid.name = false;
        } else {
          formError.name = "";
          formValid.name = true;
        }
        break;
      case 'emailId':
        if (value === "") {
          formError.emailId = "field required";
          formValid.emailId = false;
        } else if (!value.match(/^[A-Za-z0-9]{4,}@[A-z]{1,}.com$/)) {
          formError.emailId = "Email Id should have atleast 4 characters and should end with @example.com";
          formValid.emailId = false;
        } else {
          formError.emailId = "";
          formValid.emailId = true;
        }
        break;
      case 'contactNo':
        if (value === "") {
          formError.contactNo = "field required";
          formValid.contactNo = false;
        } else if (!value.match(/^[0-9]{10}$/)) {
          formError.contactNo = "Contact number should have 10 digits";
          formValid.contactNo = false;
        } else {
          formError.contactNo = "";
          formValid.contactNo = true;
        }
        break;
      case 'password':
        if (value === "") {
          formError.password = "field required";
          formValid.password = false;
        } else if (!value.match(/^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!@#%&*^])\S{8,20}$/)) {
          formError.password = "Password must contain atleast 1 lowercase,1 uppercase,1 numeric,one special character and minimum 8 character length";
          formValid.password = false;
        } else {
          formError.password = "";
          formValid.password = true;
        }
        break;
      default:
        break
    }
    this.setState({formValid:formValid, formError:formError});
  }
    // submitRegister = (e) => {
    //     e.preventDefault();
    //     const obj = { name: this.state.form.name, emailId: this.state.form.emailId, contactNo: this.state.form.contactNo, password: this.state.form.password };
    //     Axios.post('http://localhost:4000/user/register/', obj)
    //         .then(success => {
    //             this.setState({ successmessage: success.data.message,successlogin:true, errorMessage: '' })
    //         })
    //         .catch(err => {
    //           if(err.response){
    //             this.setState({ errorMessage: err.response.data.message, successmessage: '' })
    //           }else{
    //             this.setState({errorMessage:"Server Error" ,successMessage:""})
    //           }
    //         })
    // }

  render() {
    const { form, formValid, formError, successlogin } = this.state;
    formValid.button = formValid.name && formValid.contactNo && formValid.emailId && formValid.password
    // if (successlogin) {
    //   return <SuccessLogin />
    // }
    return (
      <header className="masthead book-page">
      <section id="registerPage" className="registerSection">
        <div className="row">
          <div className="col-md-4 offset-4 ">
            <div className="card bg-dark text-light">
              <div className="card-body text-left">
                <h3 className=" text-light ">Join Us</h3>
                <form className="form" onSubmit={(e) => this.submitRegister(e)}>
                  <div className="form-group">
                    <label className="text-light"  htmlFor="name">Name<span className="text-danger">*</span></label>
                    <InputText
                      type="text"
                      value={form.name}
                      onChange={this.handleInputChange}
                      id="name"
                      name="name"
                      className="form-control"
                      tooltip="Enter your Name"
                      placeholder="e.g.---Steffen"
                    />
                  </div>
                  <span className="text-danger">
                    {formError.name}
                  </span>
                  <div className="form-group">
                    <label className="text-light" htmlFor="emailId">Email Id<span className="text-danger">*</span></label>
                    <InputText
                      type="email"
                      value={form.emailId}
                      onChange={this.handleInputChange}
                      id="emailId"
                      name="emailId"
                      className="form-control"
                      tooltip="Enter your Email Id"
                      placeholder="elina@gmail.com"
                    />
                  </div>
                  <span className="text-danger">
                    {formError.emailId}
                  </span>
                  <div className="form-group">
                    <label className="text-light"  htmlFor="contactNo">Contact Number<span className="text-danger">*</span></label>
                    <InputText
                      type="number"
                      ref={form.contactNo}
                      onChange={this.handleInputChange}
                      id="contactNo"
                      name="contactNo"
                      className="form-control"
                      tooltip="Enter Your Contact Number"
                      placeholder="1234567890"
                    />
                  </div>
                  <span className="text-danger">
                    {formError.contactNo}
                  </span>
                  <div className="form-group">
                    <label className="text-light"  htmlFor="password">Password<span className="text-danger">*</span></label>
                    <InputText
                      type="password"
                      value={form.password}
                      onChange={this.handleInputChange}
                      id="password"
                      name="password"
                      className="form-control"
                      tooltip="Enter the password"
                      placeholder="Aqw12@hi"
                    />
                  </div>
                  <span className="text-danger">
                    {formError.password}
                  </span>
                  <br />
                  <span><span className="text-danger">*</span> marked fields are mandatory</span>
                  <br />
                  <button type="submit" disabled={!formValid.button} className="btn btn-primary btn-block">
                    Register</button>
                  <span className='text-success'>{this.state.successmessage}</span>
                  {this.state.errorMessage && <span className='text-danger'>{this.state.errorMessage}</span>}
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      </header>
    )
  }
}

export default App;