
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
        case 'cart.add': // thêm 1 product vào cart
            // tìm product trong cart
        const existingProduct = state.cart.find(item => item.product.id === action.payload.product.id);
        let updatedCart;
        if(existingProduct){ // kiểm tra existingProduct có tồn tại hay không
            updatedCart=state.cart.map(item =>item.product.id === existingProduct.product.id
                                ? { ...item, quantity: item.quantity + action.payload.quantity }: item);
        }else{ // 
            updatedCart = [...state.cart,
                 action.payload];
        }
         // Lưu giỏ hàng vào Session Storage
        window.sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
            ...state,
            cart: updatedCart
          };
        case 'cart.set': // cập nhạt lại cart bằng cart mới
            return{
                ...state,
                cart:action.payload
            }
        case 'cart.updateQuantity': // cập nhật lại só lượng của product trong cart
            let updateQuantityCart;
            updateQuantityCart=state.cart.map(item =>item.product.id === action.payload.productId
                ? { ...item, quantity: action.payload.quantity }: item);
             // Lưu giỏ hàng vào Session Storage
        window.sessionStorage.setItem('cart', JSON.stringify(updateQuantityCart));
            return{
                ...state,
                cart:updateQuantityCart
            }
        case 'cart.removeItem': // xóa product trong cart
            let afterCart;
            afterCart=state.cart.filter(item => item.product.id !==action.payload);
             // Lưu giỏ hàng vào Session Storage
        window.sessionStorage.setItem('cart', JSON.stringify(afterCart));
            return{
                ...state,
                cart:afterCart
            }
        default: return state;
    }
}