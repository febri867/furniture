import initialState from "./state";
import {CHANGE_FILTER, FILTERING_DATA, GET_ITEM, RECEIVED_DATA_ITEMS} from './actions'

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_FILTER: {
            return {...state,
                filterData: {
                ...state.filterData,
                [payload.type]: payload.value
                }
            }
        }

        case GET_ITEM: {
            return {...state,
                isGettingData: true
            }
        }

        case FILTERING_DATA: {
            return {...state,
                result: payload
            }
        }

        case RECEIVED_DATA_ITEMS:
            return {...state,
                data: payload.products,
                result: payload.products,
                furnitureStyle: payload.furniture_styles.map( e => {return {value: e, label: e}}),
                isGettingData: false
            };

        default:
            return state
    }
}