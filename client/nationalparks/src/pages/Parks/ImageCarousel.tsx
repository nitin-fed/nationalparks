/** @format */

import { Box, CardMedia, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const ImageCarousel = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (nextIndex: number) => {
    setFade(false); // fade out
    setTimeout(() => {
      setIndex(nextIndex);
      setFade(true); // fade in
    }, 300);
  };

  const handlePrev = () => {
    const next = index === 0 ? images.length - 1 : index - 1;
    changeImage(next);
  };

  const handleNext = () => {
    const next = index === images.length - 1 ? 0 : index + 1;
    changeImage(next);
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <CardMedia
        component='img'
        height='200'
        image={images[index]?.url}
        alt={alt}
        sx={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.25s ease-in-out",
        }}
      />

      {images.length > 1 && (
        <>
          {/* Prev */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.4)",
              color: "#fff",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Next */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.4)",
              color: "#fff",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
