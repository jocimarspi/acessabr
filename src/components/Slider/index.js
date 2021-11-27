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
  const { filteredPlaces, setFilteredPlaces} = useContext(FilterContext);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await api.get(`/places?category=${filteredPlaces}`);

      if (result.status === 200) {
        setPlaces(result.data);
      }
    };

    fetchPlaces();
  }, [filteredPlaces]);

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
