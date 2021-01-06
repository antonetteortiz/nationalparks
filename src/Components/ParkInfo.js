import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import "./ParkInfo.css";

class ParkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      park: this.props
    };
  }
  // componentDidMount() {
  //   console.log(this.props.parkList);
  //   this.getParkData();
  // }

  // // updated with Noah
  // componentDidUpdate(props) {
  //   if (props.parkList.length === 0) {
  //     this.getParkData();
  //   }
  // }

  // getParkData = () => {
  //   let id = this.props.match.params.id;
  //   for (let i = 0; i < this.props.parkList.length; i++) {
  //     if (id === this.props.parkList[i].parkCode) {
  //       this.setState({ park: this.props.parkList[i] });
  //       break;
  //     }
  //   }
  // };
  render() {
    console.log(this.state.park);
    return <div>
        {this.state.park.parkList.map((park, i) => <div key={i}>
            <div className="imageheader">
              {/* <div{park.images.}></div> */}
              <h1> {park.fullName}</h1>
            </div>

            <div className="parkdescript">
              <p> {park.description}</p>
            </div>

            {/* <p> {park.directionsUrl}</p> */}
            <h4>Address</h4>
            <div>
              {park.addresses.map((address, i) => <div key={i}>
                  <p>Type: {address.type}</p>
                  <p>
                    {" "}
                    {address.line1} {address.city}, {address.stateCode} {address.postalCode}
                  </p>
                </div>)}

              <div>
                <h4>Directions</h4>
                <p> {park.directionsInfo}</p>
              </div>
              <button className="bttn">Read More</button>
            </div>

            <h4>Images</h4>
            <div className="imagegrid">
              {park.images.map((images, i) => <div key={i}>
                  <div className="parkImages">
                    <img src={images.url} />
                  </div>
                </div>)}
            </div>
            <div className="homepageLink">
              <Link to="/">
                <h4> Back to Park List </h4>
              </Link>
            </div>
          </div>)}
      </div>;
  }
}
export default ParkInfo;



