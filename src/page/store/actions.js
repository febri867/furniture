import {fetchGet} from '../../utils/fetchers'

export const GET_ITEM = 'GET_ITEM'
export const getItems = () => dispatch => {

    dispatch({
        type: GET_ITEM,
    })

    fetchGet()
        .then(response => {
            dispatch(receivedDataItems(response))
        })
}

export const RECEIVED_DATA_ITEMS = 'RECEIVED_DATA_ITEMS'
const receivedDataItems = response => dispatch => {

    if(response) {
        dispatch({
            type: RECEIVED_DATA_ITEMS,
            payload: response
        })
    }

}

export const CHANGE_FILTER = 'CHANGE_FILTER'
export const changeFilter = response => dispatch => {


    dispatch({
        type: CHANGE_FILTER,
        payload: response
    })

    dispatch(sortData())

}

export const FILTERING_DATA = 'FILTERING_DATA'
const sortData = () => (dispatch, getState) => {

    let { data, filterData } = getState().app

    let data_filter_by_query = data.filter( e => {
        return (e.name.toLowerCase()).includes(filterData.query.toLowerCase())
    })

    let filter_delivery_days =  Number((((filterData.deliveryTime || []).map(({value}) => value)).sort()).pop()) || 99

    dispatch({
        type: FILTERING_DATA,
        payload: data_filter_by_query.filter( e => {
            return (
                filterData.furnitureStyle && filterData.furnitureStyle.length !== 0
                    ?
                    ((filterData.furnitureStyle).map(({value}) => value)).some(f => e.furniture_style.includes(f))
                    :
                    true
            ) && filter_delivery_days === 99 ? true : Number(e.delivery_time) <= filter_delivery_days
        })
    })


}

export default {
    getItems,
    changeFilter
}