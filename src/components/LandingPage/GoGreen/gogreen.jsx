import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../../client";
import "./gogreen.css";
import About from "../About/about";
import GoGreenSectionOne from "./gogreensection1";
import ContactUs from "../../ContactUs/contactus";

export default function GoGreen() {
  const [isGoGreenLoading, setIsGoGreenLoading] = useState(false);
  const [goGreenSlides, setGoGreenSlides] = useState([]);

  const cleanUpGoGreenSlides = (rawdata) => {
    const cleanSlides = rawdata.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const slideType = fields.type;
      const updatedSlide = {
        id,
        slideTitle,
        slideDescription,
        slideBg,
        slideType,
      };
      return updatedSlide;
    });

    setGoGreenSlides(cleanSlides);
  };

  const getGoGreenSlides = useCallback(async () => {
    setIsGoGreenLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "goGreenBlog",
      });
      const responsedata = response.items;
      if (responsedata) {
        cleanUpGoGreenSlides(responsedata);
      } else {
        setGoGreenSlides([]);
      }
      setIsGoGreenLoading(false);
    } catch (error) {
      console.log(error);
      setIsGoGreenLoading(false);
    }
  }, []);

  useEffect(() => {
    getGoGreenSlides();
  }, []);

  return (
    <div className="goGreen-container">
      <div>
        <GoGreenSectionOne />
      </div>
      {goGreenSlides.map((item) => (
        <div
          key={item.id}
          id={`content-${item.id}`}
          className={`goGreen-slideWrap ${item.slideType}`}
        >
          <div className="goGreen-contentWrap">
            <div className="goGreen-text">
              <h2 className="goGreen-title">{item.slideTitle}</h2>
              <p className="goGreen-description">{item.slideDescription}</p>
            </div>
          </div>
          <img
            src={item.slideBg}
            alt={item.slideTitle}
            className="goGreen-image"
          />
        </div>
      ))}
      {/* <div>
        <About />
      </div> */}
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
