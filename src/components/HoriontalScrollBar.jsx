import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography } from '@mui/material';
import leftArrowIcon from '../assets/icons/left.png'
import rightArrowIcon from '../assets/icons/right.png'

import BodyPart from './BodyPart'
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={leftArrowIcon} alt="navigate-left" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={rightArrowIcon} alt="navigate-right" />
      </Typography>
    );
  };

const HoriontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map(item => <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>)}
        </ScrollMenu>

    )
}

export default HoriontalScrollBar