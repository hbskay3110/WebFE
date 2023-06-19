import React, { useEffect, useState } from "react";
import { FacebookProvider } from 'react-facebook';
import "../vendor/jquery-nice-select/css/nice-select.css"
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css"
import "../vendor/swiper/css/swiper-bundle.min.css"
import "../css/style.css"
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import Header from "./Header";
import NavMenu from "./NavMenu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Store/Action";
import { useTranslation } from "react-i18next";
import { async } from "q";
import axios from "axios";

export default function ProductDetail(){
    const { t, i18n } = useTranslation();
    const {idProduct} = useParams();
    // lấy danh sách product từ trong store 
    const products = useSelector(state=> state.root.products)
    // tìm ra sản phẩm trong danh sách sản phẩm có id bằng cái mã sản phẩm nhận từ param
    const product = products.find((product) => product.id == idProduct);

    // chuyển đổi số thành giá tiền
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    //luu product vào danh sách dã xem
    useEffect(() => {
        if (product) {
          // Lấy danh sách sản phẩm đã xem từ localStorage
          const viewedProducts = localStorage.getItem('viewedProducts');
          let viewedProductsValue = [];
          if (viewedProducts) {
            viewedProductsValue = JSON.parse(viewedProducts);
          }
    
          // Kiểm tra xem sản phẩm hiện tại có trong danh sách đã xem chưa
          if (!viewedProductsValue.some((p) => p.id == idProduct)) {
            viewedProductsValue.push(product);
            // Lưu lại danh sách sản phẩm đã xem vào localStorage
            localStorage.setItem('viewedProducts', JSON.stringify(viewedProductsValue));
          }
        }
      }, [idProduct, product]);

   
      // số lượng sản phẩm mặc định là 1
      const [value, setValue] = useState(1);
      // thay đổi giá trị số lượng sản phẩm khi bấm vào các dấu lên xuống
      const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (newValue >= 0) {
            setValue(newValue);
          }
      };
      //
    const dispatch = useDispatch();
    // sự kiện click thêm sản phẩm vào cart
	const handleAddCardClick = () => {
        if(value<1){
            dispatch(addCart(product,1));
        }else{
            dispatch(addCart(product,value));
        }
	}
    // nếu sản phẩm chưa được lấy ra thì hiển thị màn hình đang load
    if(!product){
        return(
            <span class="loader"></span>
        )
    }
    return(
        <div> 
               <NavHeader/>
               <Header/>
                <div className={"d-flex"}>
                    <NavMenu/>
                    <div className="content-body">
        <div className="container">
           
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                   
                                    <div className="tab-content" id="nav-tabContent">
                                      <div className="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
                                        <img className="img-fluid rounded" src={product.img} alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                        <img className="img-fluid rounded" src={product.img} alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-third" role="tabpanel" aria-labelledby="nav-third-tab">
                                         <img className="img-fluid rounded" src={product.img} alt=""/>
                                      </div>
                                      <div className="tab-pane fade" id="nav-for" role="tabpanel" aria-labelledby="nav-for-tab">
                                         <img className="img-fluid rounded" src={product.img} alt=""/>
                                      </div>
                                    </div>
                                    <nav>
                                      <div className="product-detail-tab nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-first-tab" data-bs-toggle="tab" data-bs-target="#nav-first" type="button" role="tab" aria-controls="nav-first" aria-selected="true">
                                            <img className="img-fluid" src={product.img} alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-second-tab" data-bs-toggle="tab" data-bs-target="#nav-second" type="button" role="tab" aria-controls="nav-second" aria-selected="false">
                                            <img className="img-fluid" src={product.img} alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-third-tab" data-bs-toggle="tab" data-bs-target="#nav-third" type="button" role="tab" aria-controls="nav-third" aria-selected="false">
                                            <img className="img-fluid" src={product.img} alt="" width="50"/>
                                        </button>
                                        <button className="nav-link" id="nav-for-tab" data-bs-toggle="tab" data-bs-target="#nav-for" type="button" role="tab" aria-controls="nav-for" aria-selected="false">
                                            <img className="img-fluid" src={product.img} alt="" width="50"/>
                                        </button>
                                      </div>
                                    </nav>
                                </div>
                                
                                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                    <div className="product-detail-content">
                                        
                                        <div className="new-arrival-content pr">
                                            <h4>{product.name}</h4>
                                            <div className="comment-review star-rating">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-empty"></i></li>
                                                    <li><i className="fa fa-star-half-empty"></i></li>
                                                </ul>
                                                <span className="review-text">(34 reviews) / </span><a className="product-review" href="#"  data-bs-toggle="modal" data-bs-target="#reviewModal">Write a review?</a>
                                            </div>
                                            <div className="d-table mb-2">
                                                <p className="price float-start d-block">{numberWithCommas(product.price)} đ</p>
                                            </div>
                                            <p>Availability: <span className="item"> In stock <i
                                                        className="fa fa-shopping-basket"></i></span>
                                            </p>
                                            <p>{t('product code')}: <span className="item">{product.id}</span> </p>
                                            <a>Chia sẻ: <span className="item">
                    
                                                            <FacebookProvider appId="YOUR_APP_ID">
                                                                <ShareButton url={`https://6fed-2001-ee0-4f53-4a0-b579-efec-b09-b38c.ngrok-free.app/product/${product.id}`} quote={"#FoodDesk"} />
                                                            </FacebookProvider>
                                                        </span>
                                            </a>
                                            <p>{t('type')}:&nbsp;&nbsp;
                                                <span className="badge badge-success light">{product.type}</span>
                                              
                                            </p>
                                            <p className="text-content">{product.des}.</p>
                                            <div className="d-flex align-items-end flex-wrap mt-4">
                                                
                                                
                                                <div className="filtaring-area me-3">
                                                    <div className="size-filter">
                                                        <h4 className="m-b-15">Select size</h4>
                                                        <div className="d-flex select-size mb-2" role="group" aria-label="Basic radio toggle button group">
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio1">XS</label>

                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio2">SM</label>

                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio3">MD</label>
                                                          
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio4"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio4">LG</label>
                                                          
                                                          <input type="radio" className="btn-check" name="btnradio" id="btnradio5"/>
                                                          <label className="btn btn-outline-primary sharp sharp-lg" for="btnradio5">XL</label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            
                                                <div className="col-2 px-0  mb-2 me-3">
                                                    <input type="number" name="num" className="form-control input-btn input-number"  value={value} onChange={handleInputChange}/>
                                                </div> 
                                                
                                                <div className="shopping-cart  mb-2 me-3" onClick={handleAddCardClick}>
                                                    <p className="btn btn-primary" href=""><i
                                                            className="fa fa-shopping-basket me-2"></i>{t('addCart')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modal fade" id="reviewModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Review</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="text-center mb-4">
                                        <img className="img-fluid rounded" width="78" src="images/avatar/1.jpg" alt="DexignZone"/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="rating-widget mb-4 text-center">
                                            
                                            <div className="rating-stars">
                                                <ul id="stars">
                                                    <li className="star" title="Poor" data-value="1">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Fair" data-value="2">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Good" data-value="3">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="Excellent" data-value="4">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                    <li className="star" title="WOW!!!" data-value="5">
                                                        <i className="fa fa-star fa-fw"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Comment" rows="5"></textarea>
                                    </div>
                                    <button className="btn btn-success btn-block">RATE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <FormComment/>

                    </div>
                   
                </div>
          
            <Footer/>
        </div>
        
    )
}
export const ShareButton = ({ url, quote }) => {
    const handleShare = () => {
      const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
      window.open(facebookURL, '_blank');
    };
  
    return (
        <i class="fa-brands fa-facebook-f" onClick={handleShare}></i> 
      
    );
  };
  const FormComment = () => {
  const { idProduct } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [errorComment, setErrorComment] = useState('');
  const [rating, setRating] = useState(0);
  const [errorRating, setErrorRating] = useState('');

  useEffect(() => {
    const fetchCommentList = async () => {
      try {
        const response = await fetch('http://localhost:3000/comment');
        const commentsData = await response.json();

        // Lọc danh sách comment chỉ lấy comment của sản phẩm cụ thể
        const listCommentOfProduct = commentsData.filter(
          (comment) => comment.productId === idProduct
        );

        setComments(listCommentOfProduct);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommentList();
  }, [idProduct]);

  const navigate = useNavigate();

  const handleComment = (e) => {
    setComment(e.target.value);
    setErrorComment('');
  };

  const handleRating = (value) => {
    setRating(value);
    setErrorRating('');
  };

  const submitComment = async () => {
    if (comment === '') {
      setErrorComment('Vui lòng nhập comment');
      return;
    } else if (rating === 0) {
      setErrorRating('Vui lòng chọn sao đánh giá');
      return;
    } else {
      const userInfoJSON = localStorage.getItem('user-info');
      if (!userInfoJSON) {
        navigate('/login');
      } else {
        const userInfo = JSON.parse(userInfoJSON);
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const date = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        const commentData = {
          email: userInfo.email,
          name: userInfo.name,
          productId: idProduct,
          createAt: date,
          commentContent: comment,
          rating: rating,
          status: 0,
        };

        try {
          const response = await fetch('http://localhost:3000/comment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
          });

          if (response.ok) {
            const updatedCommentsResponse = await fetch(
              'http://localhost:3000/comment'
            );
            const updatedCommentsData = await updatedCommentsResponse.json();

            // Lọc danh sách comment chỉ lấy comment của sản phẩm cụ thể
            const listCommentOfProduct = updatedCommentsData.filter(
              (comment) => comment.productId === idProduct
            );

            setComments(listCommentOfProduct);
            setComment('');
            setRating(0);
          } else {
            console.error(
              'Lỗi khi gửi yêu cầu đăng ký:',
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          console.error('Lỗi khi gửi yêu cầu đăng ký:', error.message);
        }
      }
    }
  };
    return(
        <div>
          <div class="comment-section">
  <h3>Bình luận và đánh giá</h3>
  <div class="comment-list">
    {comments.map((comment)=>(
        <div class="comment">
      <div class="avatar"></div>
      <div class="comment-content">
  
        <div class="comment-header">
          <span class="comment-author">{comment.name}</span>
         <div className="d-flex">
         <div className="rating">
                {[...Array(parseInt(comment.rating))].map((_, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      id={`star-${comment.id}-${index + 1}`}
                      name={`rating-${comment.id}`}
                      checked={true}
                      readOnly
                    />
                    <label htmlFor={`star-${comment.id}-${index + 1}`}  className="star-yellow"></label>
                  </React.Fragment>
                ))}
            </div>
            <span class="comment-date">{comment.createAt}</span>
         </div>
         
        </div>
        <p class="comment-text">{comment.commentContent}.</p>
           
      </div>
    </div>
    ))}
  
  </div>
        <form id="comment-form">
        <div class="rating">
      
      <input type="radio" id="star1" name="rating" value="1" onChange={() => handleRating("5")}/>
      <label for="star1"></label>
      <input type="radio" id="star2" name="rating" value="2" onChange={() => handleRating("4")}/>
      <label for="star2"></label>
      <input type="radio" id="star3" name="rating" value="3" onChange={() => handleRating("3")}/>
      <label for="star3"></label>
      <input type="radio" id="star4" name="rating" value="4" onChange={() => handleRating("2")}/>
      <label for="star4"></label>
      <input type="radio" id="star5" name="rating" value="5" onChange={() => handleRating("1")}/>
      <label for="star5"></label>
    </div>
                <textarea id="comment-text" onChange={handleComment} placeholder="Write a comment..."></textarea>
           
            <button type="button" onClick={submitComment} >Gửi</button>
        </form>
</div>
        </div>
    )
  }