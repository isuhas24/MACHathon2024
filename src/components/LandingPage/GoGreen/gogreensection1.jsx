import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../../client";
import "./gogreensection1.css";

export default function GoGreenSectionOne() {
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
        content_type: "goGreenSectionOne",
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
    <div className="goGreenSectionOne-container">
      {goGreenSlides.map((item) => (
        <div
          key={item.id}
          id={`content-${item.id}`}
          className={`goGreenSectionOne-slideWrap ${item.slideType}`}
        >
          <div className="goGreenSectionOne-contentWrap">
            <div className="goGreenSectionOne-text">
              <h2 className="goGreenSectionOne-title">{item.slideTitle}</h2>
              <p className="goGreenSectionOne-description">
                {item.slideDescription}
              </p>
            </div>
          </div>
          <div
            className="goGreenSectionOne-image"
            style={{ backgroundImage: `url(${item.slideBg})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}
