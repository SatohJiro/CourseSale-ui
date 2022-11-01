import { useState, forwardRef } from "react";
import images from "~/assets/images";
import style from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(({ src, alt, className, fallback: customFallBack =images.noImage, ...prop }, ref) => {
  const [fallback, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      className={classNames(style.wrapper, className)}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...prop}
      onError={handleError}
    ></img>
  );
});

export default Image;
