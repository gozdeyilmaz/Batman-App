  
import React from 'react';
import { Batman } from "../component";
import { getMovie } from "../constant";

class BatmanList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        };
    }

    componentDidMount() {
        console.log("did mount")
        getMovie().then((data) => {
            this.setState({
                movie: data,
            })
        })
    }

    render() {
        const Movie = [<div className="row"> 
            {
                this.state.movie.map((movie) => {
                    return <Batman key={movie.show.id} movie={movie.show} />;
                })
            }
        </div>];
            return Movie
        
    }
}
export default BatmanList;