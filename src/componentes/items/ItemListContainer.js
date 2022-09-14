import MultiActionAreaCard from "../cards/MultiActionAreaCard";
import React, { useState, useEffect } from "react";
import { fetchOptions } from "../keys";
import style from "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ItemListContainer = () => {
  let [productosarray, setProductosArray] = useState([]);
  let [preciosarray, setPreciosArray] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://api.stripe.com/v1/products?limit=100", fetchOptions),
      fetch("https://api.stripe.com/v1/prices", fetchOptions),
    ])
      .then((responses) => {
        return Promise.all(responses.map((resp) => resp.json()));
      })
      .then((json) => {
        setProductosArray(json[0].data);
        setPreciosArray(json[1].data);
      });
  }, []);
  console.log(productosarray, preciosarray);

  return (
    <div className="productos-card-container">
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {productosarray.map((producto) => {
          return (
            <SwiperSlide key={producto.id}>
              <MultiActionAreaCard producto={producto} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

//   return (
//     productosarray && (
//       <div className="productos-card-container">
//         {productosarray.map((producto) => {
//           return <MultiActionAreaCard producto={producto} key={producto.id} />;
//         })}
//       </div>
//     )
//   );

export default ItemListContainer;
