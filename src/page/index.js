import React from 'react';
import actions from "./store/actions";
import {connect} from "react-redux";
import UserCard from "./furniture-container/furniture-item";
import FilterBar from "./filter-bar/filter-bar";

function App() {

    return (
        <div className="App">
                <div className="row header m--0 p--0 bc--yellow c--white header">
                    <div className="col-md-12">
                        <div className="col-md-10 offset-1">
                            <div className="row">
                                <div className="col-md-2">
                                    <h3 className="p--20 brand bc--green-dark c--white m--0">Furniture.</h3>
                                </div>
                                <div className="col-md-10">
                                    <FilterBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-md-10 offset-1 box-container">
                <UserCard/>
            </div>
        </div>
    );
}

const mapState = ({}) => ({
})
const mapActions = actions

export default connect(mapState, mapActions)(App);
