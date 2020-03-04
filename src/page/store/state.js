export default {
    data: [],
    result: [],
    furnitureStyle: [],
    deliveryTime:[
        {
            value: 7,
            label: "1 week"
        },
        {
            value: 14,
            label: "2 weeks"
        },
        {
            value: 30,
            label: "1 month"
        },
        {
            value: 99,
            label: "more"
        }
    ],
    isGettingData: false,
    filterData: {
        deliveryTime: [],
        furnitureStyle: [],
        query: ""
    }
}