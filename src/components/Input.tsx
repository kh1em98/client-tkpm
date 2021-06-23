import React, { FC } from 'react'
import { Input } from '@chakra-ui/react';


const StyledInput: FC<any> = ({
  mt = "0.25em",
  _focus = { shadow: "0px 4px 10px 3px #0000001C", borderColor: "#1565D8" },
  border = "1px",
  borderColor = "#8692A6",
  height = { base: "2.5em", lg: "4em" },
  padding = "1.5em 1.875em",
  borderRadius = "6px",
  fontWeight = "medium",
  fontSize = { base: "0.75em", lg: "0.875em" },
  lineHeight = "17px",
  color = "#494949",
  ...otherProps
}) => {
  return (
    <Input
      mt={mt}
      _focus={_focus}
      border={border}
      borderColor={borderColor}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      {...otherProps}
    />
  )
}

export default StyledInput
