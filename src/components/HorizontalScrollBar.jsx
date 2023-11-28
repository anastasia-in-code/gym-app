import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box } from '@mui/material';
import leftArrowIcon from '../assets/icons/left.png'
import rightArrowIcon from '../assets/icons/right.png'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      sx={{
        display: {
          lg: 'flex',
          xs: 'none'
        }
      }}
      onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrowIcon} alt="navigate-left" />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box sx={{
      display: {
        lg: 'flex',
        xs: 'none'
      }
    }}
      onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrowIcon} alt="navigate-right" />
    </Box>
  );
};

const HoriontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      { data.map(item => <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">

        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> :
        <ExerciseCard exercise={item}/>}
      </Box>)}
    </ScrollMenu>

  )
}

export default HoriontalScrollBar