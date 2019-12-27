import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

let name, summary, image, genres, rating, type, premiered
class DetailsPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: "",
      summary: "",
      image: "",
      rating: "",
      genres: "",
      type: "",
      premiered: "",
    }
  };

  componentDidMount(){
    axios.get(`https://api.tvmaze.com/shows/${this.props.match.params.id}`)
      .then(resp => resp.data)
      .then(data => ({name, summary,image, genres, rating, type, premiered } = data))
      .then(data => this.setState({name, summary, image, genres, rating, type,premiered }))
    
    }

    render(){
      return (
        <div className="container text-center">
          <div className="card mx-auto"style={{width: "18rem"}}>
           {/* <img alt={image.medium} className="card-img-top" src={`${image.medium}`}/> */}
            <Link className="goBackButton" to="/">X</Link>
            <div className="card-body">
              <h1 className="card-title">{`${name}`}</h1>
              <div>
                <span className="badge badge-primary" style={{fontSize: "12px"}}>{`${genres}`}</span>
                {/* <span className="badge badge-primary" style={{fontSize: "12px"}}>{`${rating}`}</span> */}
                <p className="card-text">
                            {`${summary}`}
                        </p>   
              </div>
            </div>
          </div>
        </div>
      )
    };
  }

  export default DetailsPage;

  