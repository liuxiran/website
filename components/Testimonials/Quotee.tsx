import { Box, BoxProps, Img } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends BoxProps {
  imageSrc: string
}

export const Quotee = (props: Props) => {
  const { imageSrc, height, ...boxProps } = props
  return (
    <Box {...boxProps}>
      <Img src={imageSrc} mx="auto" h="16" />
    </Box>
  )
}
