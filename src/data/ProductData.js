

let data = []; // Mảng dữ liệu từ API

export const fetchData = async () => {
  try {
    const requestUrl = "http://localhost:3000/products";
			// gửi một yêu cầu HTTP GET đến url
			const reponse  =  await fetch(requestUrl);
			//chuyển đổi phản hồi thành đối tượng JSON
			const reponseJson = await reponse.json();
      data = reponseJson;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getData = () => {
  return data; // Trả về mảng dữ liệu
};

