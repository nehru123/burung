import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
// import { registerusers } from "../utils/Services";
import { registerusers } from "../../actions/authActions";
import styled from "styled-components";

const Container = styled.nav`
  
background-color: #faca09;
transform: translateY(-145px);
 height:99vh;
overflow-y: hidden; // hide vertical
overflow-x: hidden; // hide horizontal
margin:0;
.logo {
  transform: translateY(18px);  
}
.Big {

box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
overflow-y: hidden; // hide vertical
overflow-x: hidden; // hide horizontal
}

  }
  .Kotak {
    margin: auto;
    margin-top: -110px;
    border-radius: 40px;
    box-shadow: 8px 15px 25px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    width: 368px;
    height: 500px;

  }
  .Wrapper {
    margin: 30px;
    padding-top: 100px;
  }
  .ButtonLogin {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .btn {
    border-radius: 15px;
    box-shadow: 5px 10px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #feb200;
  }

`;

class Register extends Component {
  state = {
    name: "",
    email: "",
    alamat: "",
    password: "",
  };

  onSubmit(e) {
    e.preventDefault();
    console.log("====================================");
    console.log("register berhasil");
    console.log("====================================");

    const userData = {
      name: this.state.name,
      alamat: this.state.alamat,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerusers(userData, this.props.history);
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div className="Big">
        <Container style={{ width: "100%", overflowY: "hidden" }}>
          <div className="Wrapper">
            <img
              style={{ margin: "auto", display: "flex" }}
              className="logo"
              src="Foto.png"
              width="150px"
              height="100px"
            ></img>
            <div className="Kotak">
              <form onSubmit={(e) => this.onSubmit(e)}>
                <div className="Wrapper">
                  <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                      <label for="exampleInputEmail1"></label>
                      <input
                        style={{
                          borderRadius: 15,
                          backgroundColor: "#f2eded",
                          fontSize: 13,
                          padding: 13,
                          borderWidth: 0,
                          paddingInlineStart: 15,
                        }}
                        type="text"
                        placeholder="nama lengkap"
                        name="name"
                        onChange={(e) => this.onChange(e)}
                        value={this.state.name}
                        className="form-control"
                        aria-describedby="emailHelp"
                      />

                      <div className="form-group">
                        <label for="exampleInputEmail1"></label>
                        <input
                          style={{
                            borderRadius: 15,
                            backgroundColor: "#f2eded",
                            fontSize: 13,
                            padding: 13,
                            borderWidth: 0,
                            paddingInlineStart: 15,
                          }}
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={(e) => this.onChange(e)}
                          value={this.state.email}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />

                        <div className="form-group">
                          <label for="exampleInputEmail1"></label>
                          <input
                            style={{
                              borderRadius: 15,
                              backgroundColor: "#f2eded",
                              fontSize: 13,
                              padding: 13,
                              borderWidth: 0,
                              paddingInlineStart: 15,
                            }}
                            type="text"
                            name="alamat"
                            placeholder="Alamat"
                            onChange={(e) => this.onChange(e)}
                            value={this.state.alamat}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <div className="form-group">
                            <label for="exampleInputPassword1"></label>
                            <input
                              style={{
                                borderRadius: 15,
                                backgroundColor: "#f2eded",
                                fontSize: 13,
                                padding: 13,
                                borderWidth: 0,
                                paddingInlineStart: 15,
                              }}
                              type="password"
                              name="password"
                              placeholder="password"
                              onChange={(e) => this.onChange(e)}
                              value={this.state.password}
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                            <div
                              style={{ marginTop: 30 }}
                              className="ButtonLogin"
                            >
                              <button
                                style={{
                                  // backgroundColor: "#feb200",
                                  width: 110,
                                  height: 35,
                                  fontSize: 13,
                                  color: "white",
                                }}
                                type="submit"
                                className="btn btnku"
                              >
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(null, { registerusers })(withRouter(Register));
