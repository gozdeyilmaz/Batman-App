import React from 'react';
import { BatmanList} from "../component";


function HomePage() {    
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-9">
                            <BatmanList
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default HomePage;
