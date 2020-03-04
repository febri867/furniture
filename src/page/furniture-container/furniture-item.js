import React, {useEffect} from 'react'
import actions from "../store/actions";
import {connect} from "react-redux";

import './_furniture-item.scss'
import Spinner from "../component/spinner";
import {formatCurrency} from "../../utils/formats";

function FurnitureItem(props) {
    useEffect(() => {
        props.getItems()
    }, [])

    return (
        <div className="row">
            {
                props.app.result.map((el, i) =>
                    <div key={i} className="col-md-4">
                        <div className="furniture-container m--20 p--20 bc--cream">
                            <div className="row m__b--20 ">
                                <div className="col-md-6">
                                    <h4 className="c--green-dark ellipsis">{el.name}</h4>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="c--yellow pull__right f--ubuntu__bold ellipsis">Rp. {formatCurrency(el.price)}</h4>
                                </div>
                            </div>
                            <p className="f--ubuntu__light content-item">{el.description}</p>
                            <h6 className="f--ubuntu__bold c--yellow">Furniture Style: <span className=" c--green-dark f__ubuntu__mono-bold">{ el.furniture_style.join(', ') }</span></h6>
                            <h5 className="f--ubuntu__light pull__right c--army m__b--15">Delivery: <span className="c--green-dark f--ubuntu__bold">{ el.delivery_time } Days</span></h5>
                            <br/>
                        </div>
                    </div>
                )
            }

            {
                props.app.isGettingData ?
                    <Spinner /> : ''
            }
        </div>
    )
}

const mapState = ({app}) => ({
    app
})
const mapActions = actions

export default connect(mapState, mapActions)(FurnitureItem);
