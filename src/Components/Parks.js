import React, { Component } from "react";
import parks from "../data/parks.json";
import "./Parks.css";
import Link from "react"

class Parks extends Component {
  render() {
    console.log(this.props.parkList);
  
    return (
      <div className="parkContainer">
        {this.props.parkList.map((park, i) => (
          <div className="container" key={i}>
            {park.images.length > 0 ? (
              <div
                className="names"
                style={{ backgroundImage: `url(${park.images[0].url})` }}
              >
                <a href={'/parks/' + park.id}>
                  <span className="parkName">{park.name} </span>
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    )
  }
}

export default Parks;

{
  /* div[i]style.background = `url(${parks.images[0].url})` */
}

// style={{backgroundImage: {(park.images.length > 0) ? `url("${park.images[0].url}")` : null}}}

// {park.images.length > 0 ? (
//               <img className="img" src={`${park.images[0].url}`} />
//             ) : null}
//             <h1 className="names">{park.name}</h1>
//             {/* <span className="names">{park.name}</span> */}
