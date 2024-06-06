import { useState, useEffect } from 'react';
import { Text, Image, Grid, Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const carousel = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/23/SS-Batching-Christmas-Category_Banner-EG1180x450_4-082423.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/03/1207-STDCRE-44662-SS-MH-Beauty-Bag-Amend-1180x450-V1-050203.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg",
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid
        bg="black"
        m="auto"
        textAlign="center"
        mb="2"
        color="white"
        _hover={{
          color: "black",
          bg: "white",
        }}
      >
        <Text p="2" fontSize={20} fontWeight="700">
          25% off with code REPLAY + free Holiday Beauty Bag (worth $170) @
          $150+ | SHOP NOW {">"}
        </Text>
      </Grid>
      <Box position="relative" width="100%" maxWidth="1180px" margin="auto" overflow="hidden">
        <Image src={carousel[currentIndex]} width="100%" />
        <IconButton
          icon={<ChevronLeftIcon />}
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          onClick={prevSlide}
          aria-label="Previous Slide"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          onClick={nextSlide}
          aria-label="Next Slide"
        />
      </Box>
    </>
  );
}
