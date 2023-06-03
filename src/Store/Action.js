
export const loadProduct = (data)=>{
    return {
      type: 'products.load',
      payload: data
    }
  }
export const addCart = (data, quantity=1)=>{
  return {
    type: 'cart.add',
    payload:{
      product:data,
      quantity
    } 
  }
}


  