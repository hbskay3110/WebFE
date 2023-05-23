import { child, getDatabase, ref, set,get ,Database ,off,onValue} from 'firebase/database';

export const products= [
  {
    id: 5,
    name: "Cơm sườn", 
    img: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
    des: "Cơm sườn thơm ngon mời bạn ăn nha",
    price: 200000,
  },
  {
    id: 6,
    name: "Cơm sườn", 
    img: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
    des: "Cơm sườn thơm ngon mời bạn ăn nha",
    price: 210000,
  }
  ,{
    id: 7,
    name: "Cơm sườn", 
    img: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
    des: "Cơm sườn thơm ngon mời bạn ăn nha",
    price: 220000,
  }
]
// Lấy dữ liệu từ đường dẫn '/products'
const db = getDatabase();

  // const productsRef = ref(db, 'products');
  // onValue(productsRef, (snapshot) => {
  //   const data = snapshot.val(); // Dữ liệu trong DataSnapshot
  //   for (const key in data) {
  //     products.push({
  //       id: key,
  //       name: data[key].name, 
  //       img: data[key].img,
  //       des: data[key].des,
  //       price: data[key].price,
  //     })
  //    }
  // });




function writeProductData(id, name, img, des,price) {
  set(ref(db, 'products/' + id), {
    name: name,
    img: img,
    des : des,
    price: price
  });
}

