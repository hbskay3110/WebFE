
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
        //     const existingProduct = state.cart.find(item => item.product.id === action.payload.product.id);
        //     if(existingProduct!=null){
        //         return{
        //             ...state,
        //             cart:state.cart.map(item =>item.product.id === existingProduct.product.id
        //                 ? { ...item, quantity: item.quantity + action.payload.quantity }: item)
        //         };
        //     }else{
        //         return {
        //             ...state,
        //                cart:[
        //                    ...state.cart,
        //                    action.payload
        //                ]
        //    };
        //     }
        const existingProduct = state.cart.find(item => item.product.id === action.payload.product.id);
        let updatedCart;
        if(existingProduct){
            updatedCart=state.cart.map(item =>item.product.id === existingProduct.product.id
                                ? { ...item, quantity: item.quantity + action.payload.quantity }: item);
        }else{
            updatedCart = [...state.cart,
                 action.payload];
        }
         // Lưu giỏ hàng vào Session Storage
        window.sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
            ...state,
            cart: updatedCart
          };
        case 'cart.set':
            return{
                ...state,
                cart:action.payload
            }
            
        default: return state;
    }
}