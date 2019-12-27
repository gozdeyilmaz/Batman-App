import React from 'react';
import { Link } from "react-router-dom"


function Batman(props) {
    const { name, genres, rating, image, id } = props.movie;
    return (
        <div className="col-lg-6 col-md-4 mb-4">
            <Link className="goDetails" to={`/${id}`}>
                <div className="card h-100">
                    <img className="card-img-top" src={`${image.medium}`} style={{ height: "292px" }} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <p>{name}</p>
                            <div>
                                <span className="badge badge-primary" style={{ fontSize: "12px" }}>
                                    {genres.map(genre => {
                                        return (
                                            <span
                                                key={Math.random()}
                                                className="movie-card__subtitle"
                                            >{`${genre}`} <br></br>
                                            </span>);
                                    })}
                                </span>
                            </div>
                            <div>
                                <span className="badge badge-primary" style={{ fontSize: "12px" }}>{`${rating.average}`}</span>
                            </div>
                            </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Batman;
