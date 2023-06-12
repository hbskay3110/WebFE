import React from "react";
import { FacebookProvider } from 'react-facebook';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export const ShareButton = ({ url, quote }) => {
  const handleShare = () => {
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
    window.open(facebookURL, '_blank');
  };

  return (
    <button onClick={handleShare}>Chia sẻ</button>
  );
};
export default function Sa(){
  const shareURL = 'https://example.com'; // URL của sản phẩm bạn muốn chia sẻ
  const shareQuote = 'Xem sản phẩm này, thật tuyệt vời!'; // Nội dung bạn muốn chia sẻ

  return (
    <div>
      <h1>Chia sẻ qua Facebook</h1>
      <FacebookProvider appId="YOUR_APP_ID">
        <ShareButton url={shareURL} quote={shareQuote} />
      </FacebookProvider>
    </div>
  );
}