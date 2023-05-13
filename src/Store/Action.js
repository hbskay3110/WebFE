
export const loadProduct = (data)=>{
    return {
      type: 'products.load',
      payload: data
    }
  }
  export const addCart = (data)=>{
    return {
      type: 'cart.add',
      payload: data
    }
  }
  