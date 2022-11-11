
const initialState = {
    selectedItems: [],
    totalCount: "",
    totalPrice: "",
    checkoute: false,
    totalProfit: "",
    prevPrice :""
    
}
const sumItems = item => {
    const totalCount = item.reduce((result, product) => result + product.quantitiy, 0);
    const totalPrice = item.reduce((result, product) => result + product.price * product.quantitiy, 0);
    const totalProfit = item.reduce((result, product) => result + (product.prevPrice - product.price) * product.quantitiy, 0);
    const prevPrice = item.reduce((result, product) => result + product.prevPrice *product.quantitiy, 0);

    return { totalCount, totalPrice, totalProfit ,prevPrice}
}

const cartReducer = (state=initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantitiy: 1,
                }
                );
                return {
                    ...state,
                    selectedItems: [...state.selectedItems]
                    ,
                    checkoute: false,
                    
                    ...sumItems(state.selectedItems)
                }
            }
        case "REMOVE-ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            
            return {
                ...state,               
                selectedItems: [...newSelectedItems],   
                ...sumItems(state.selectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantitiy++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantitiy--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHEKOUTE":
            return {
                selectedItems: [],
                totalCount: "0",
                totalPrice: "",
                checkoute: true,
                totalProfit: "",
            }
        case "CLEAR":
            return {
                selectedItems: [],
                totalCount: "0",
                totalPrice: "",
                checkoute: false,
                totalProfit: "",
            }
        default: {
            return state
        }
    }
}

export default cartReducer