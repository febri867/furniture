import React, {useState} from 'react'
import actions from "../store/actions";
import {connect} from "react-redux";
import Select from 'react-select';
import {Button, Form, InputGroup} from 'react-bootstrap';

import './_filter-bar.scss'

function FilterBar (props){

    const initiateState = {
        query: ""
    }

    const [state, setState] = useState(initiateState)


    function handleInput(e) {
        setState({...state, query: e.target.value});
    }

    return (
        <div className='m__t--10'>
            <form onSubmit={(e) => {e.preventDefault(); props.changeFilter({type: "query", value: state.query})}}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        onChange={e => handleInput(e)}
                        className="input-pwd"
                        placeholder="ex: Meja"
                        aria-label="jhon.dhue@example.com"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button
                            className="bc--green-dark"
                            type="submit"
                            variant="secondary"
                            onClick={() => {props.changeFilter({type: "query", value: state.query})}}>
                            Search
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
            <div className='pull__left other-filter c--army'>
                <label className="d-inline-block">
                    Furniture Style :
                </label>
                <Select
                    isMulti
                    value={props.app.filterData.furnitureStyle}
                    options={props.app.furnitureStyle}
                    onChange={opt => props.changeFilter({type: "furnitureStyle", value: opt})}
                    className="d-inline-block m__l--5 m__r--5 option-filter"
                />
                <label className="d-inline-block m__l--20">
                    Delivery Time :
                </label>
                <Select
                    isMulti
                    value={props.app.filterData.deliveryTime}
                    options={props.app.deliveryTime}
                    onChange={opt => props.changeFilter({type: "deliveryTime", value: opt})}
                    className="d-inline-block m__l--5 option-filter"
                />
            </div>
        </div>
    )
}

const mapState = ({app}) => ({
    app
})
const mapActions = actions

export default connect(mapState, mapActions)(FilterBar);
