
export const loadProduct = (data)=>{
    return {
      type: 'products.load',
      payload: data
    }
  }
  // Thêm product vào cart
export const addCart = (data, quantity=1)=>{
  return {
    type: 'cart.add',
    payload:{
      product:data,
      quantity
    } 
  }
}
// cập nhật lại số lượng của product trong cart
export const updateQuantityCart = (productId, quantity)=>{
  return {
    type: 'cart.updateQuantity',
    payload:{
      productId,
      quantity
    } 
  }
}
// cập nhật lại cart
export const setCart = (data)=>{
  return {
    type: 'cart.set',
    payload:data
  }
}
// xóa product ra khỏi cart
export const removeItemCart = (productId)=>{
  return {
    type: 'cart.removeItem',
    payload:productId
  }
}
// thêm sản phẩm vào favotites
export const addFavorite = (data)=>{
  return {
    type: 'favorite.add',
    payload:data
  }
}
// cập nhật lại favorites
export const updatedFavorite = (data)=>{
  return {
    type: 'favorite.update',
    payload:data
  }
}
// cập nhật lại favorites
export const removeFavoriteItem = (productId)=>{
  return {
    type: 'favorite.remove',
    payload:productId
  }
}



  