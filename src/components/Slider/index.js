import React, { useContext, useEffect, useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import "./slider.scss";
import "swiper/swiper-bundle.css";
import api from "../../config/api";
import { FilterContext } from "../../contexts/FilterContext";

SwiperCore.use([Pagination]);

const Slider = () => {
  const { filteredPlace, setFilteredPlace} = useContext(FilterContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      console.log('filteredPlaces: ' + filteredPlace);      

      const result = await api.get(`/places?category_like=${filteredPlace}`);

      console.log(result.data);      

      if (result.status === 200) {
        setPlaces(result.data);
      }
    };

    fetchPlaces();
  }, [filteredPlace]);

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        300: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        },
      }}
    >
      {places.map((place) => {
        return (
          <SwiperSlide>
            <Card key={place.id} place={place} />
          </SwiperSlide>
        );
      })}      
    </Swiper>
  );
};

export default Slider;
