const addItem = product =>{
    return{
        type :"ADD_ITEM",
        payload:product
    }
}
const removeItem = product =>{
    return{
        type :"REMOVE-ITEM",
        payload:product
    }
}
const increase = product =>{
    return{
        type :"INCREASE",
        payload:product
    }
}
const decrease = product =>{
    return{
        type :"DECREASE",
        payload:product
    }
}
const clear = product =>{
    return{
        type :"CLEAR",
        payload:product
    }
}
const ChekOute = product =>{
    return{
        type :"CHEKOUTE",
        payload:product
    }
}

export {addItem , removeItem,decrease, increase, clear ,ChekOute}