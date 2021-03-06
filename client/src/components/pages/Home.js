import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from "../utils/ServicesBurung";
import assets from "../assets/h.PNG";

const Wrapper = styled.div`
  max-width: 100%;
  size: 100vh;
  .display {
    text-align: left;
    font-family: "Montserrat";
  }
  .slogan {
    text-align: left;
    font-family: "Montserrat";
  }
  .jumbotron {
    height: 400px;
    /* background-image: url("https://cdn.pixabay.com/photo/2017/01/31/07/06/banner-2023093__340.jpg"); */
    background-image: url("h.PNG");
    display: flex;
    justify-content: center;
    background-size: cover;
  }
  .container {
    margin-top: 35px;
  }
  .jumbotron-heading {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const Container = styled.div`
  margin: 50px;
  .rounded-circle {
    margin: 100px;
  }
`;

export default class Home extends Component {
  state = {
    path: "/img/",
    data: [],
  };
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await api.getAllBirds().then((bird) => {
      console.log(bird);
      this.setState({
        data: bird.data.data,
        isLoading: false,
      });
    });
  };
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    api.getAllBirds().then((bird) => {
      this.setState({
        data: bird.data.data,
      });
    });
  };
  render() {
    const { data } = this.state;
    const stat = ["Terjual", "Stok"];
    return (
      <Wrapper>
        <section className="jumbotron text-center">
          <div className="container">
            <p
              className="jumbotron-heading"
              style={{ fontFamily: "Montserrat", fontSize: 20 }}
            >
              Selamat Datang di Kenari App
            </p>
          </div>
        </section>

        <div class="row" style={{ justifyContent: "space-evenly" }}>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map((dat) => (
                <Container>
                  <div className="text-center">
                    <img
                      className="rounded-circle"
                      src={this.state.path + dat.image1}
                      alt="Generic placeholder image"
                      width="135"
                      height="135"
                    ></img>
                    <h5 className="Title">
                      {dat.name} {dat.jenis} ({stat[dat.status]})
                    </h5>

                    <p>Berkualitas tinggi</p>

                    <p>{dat.jenis_kelamin}</p>
                    <p>Suara Melengking</p>
                    <p>
                      <Link to={"/lihat?" + dat._id} className="card-link">
                        <button type="button" className="btn btn-warning">
                          See More
                        </button>
                      </Link>
                    </p>
                  </div>
                </Container>
              ))}
        </div>
      </Wrapper>
    );
  }
}
