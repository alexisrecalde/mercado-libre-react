import MultiActionAreaCard from "../cards/MultiActionAreaCard";
import React, { useState, useEffect } from "react";
import { fetchOptions } from "../keys";
import "./style.css";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  let [productosarray, setProductosArray] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const referenciaProductos = collection(db, "productos");
    const q = categoriaId
      ? query(
          referenciaProductos,
          where("metadata.categoria", "==", categoriaId)
        )
      : referenciaProductos;

    getDocs(q).then((resp) => {
      productosarray = resp.docs.map((el) => el.data());
      setProductosArray(productosarray);
      console.log(resp);
    });

    //  Promise.all([
    //    fetch("https://api.stripe.com/v1/products?limit=100", fetchOptions),
    //    fetch("https://api.stripe.com/v1/prices", fetchOptions),
    //  ])
    //    .then((responses) => {
    //      return Promise.all(responses.map((resp) => resp.json()));
    //    })
    //    .then((json) => {
    //      setProductosArray(json[0].data);
    //    });
  }, []);
  console.log(productosarray);

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
