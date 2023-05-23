// kho lưu trữ redux
const initState = {
    products:[],
    cart:[]
}
export const root = (state=initState,action)=>{
    switch(action.type){
        case 'products.load':
            // tạo ra đối tượng mới
            return {
                 ...state,
                 products: action.payload   
        };
        case 'cart.add':
            // tạo ra đối tượng mới
            return {
                 ...state,
                 cart: [
                    ...state,
                    action.payload   
                 ]
        };
        default: return state;
    }
}