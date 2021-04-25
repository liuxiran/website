import { Box, BoxProps, Img } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends BoxProps {
  name: string
  jobTitle: string
  imageSrc: string
}

export const Quotee = (props: Props) => {
  const { name, jobTitle, imageSrc, height, ...boxProps } = props
  return (
    <Box {...boxProps}>
      <Img src={imageSrc} mx="auto" h="16" />
    </Box>
  )
}
