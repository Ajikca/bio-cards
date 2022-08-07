import { Component } from "react";

export default class Cards extends Component {
  render() {
    let { image, name, meta, description } = this.props;
    return (
      <div className="card">
        <div className="image">
          <img
            src={image}
            alt=""
            className="image"
          />
          </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">{meta}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined 2011</span>
          <span>
            <i className="user icon"></i>
            200 friends
          </span>
        </div>
      </div>
    );
  }
}
