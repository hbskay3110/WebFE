
// kho lưu trữ redux
const initState = {
    products:[],
    cart:[],
    favorites:[]
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
        case 'favorite.add':
            const product = action.payload;
            // Kiểm tra xem sản phẩm đã tồn tại trong danh sách yêu thích chưa
            const checkProduct = state.favorites.find(item => item.id === product.id);
            if (checkProduct) {
              // Nếu sản phẩm đã tồn tại, không thực hiện thêm vào danh sách yêu thích
              return state;
            } else {
              // Nếu sản phẩm chưa tồn tại, thêm vào danh sách yêu thích
              const updatedFlist = [...state.favorites, product];
        window.localStorage.setItem('favorite', JSON.stringify(updatedFlist));
              return {
                ...state,
                favorites: updatedFlist
              };
            }
        case 'favorite.update':
            return{
                ...state,
                favorites:action.payload
            }
        case 'favorite.remove':
            let afterFList;
            afterFList=state.favorites.filter(item => item.id !==action.payload);
            // Lưu giỏ hàng vào Session Storage
       window.localStorage.setItem('favorite', JSON.stringify(afterFList));
           return{
               ...state,
               favorites:afterFList
           } 
        default: return state;
    }
}