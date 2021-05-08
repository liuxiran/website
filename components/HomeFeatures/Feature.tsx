import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NextPage } from "next";

type FeatureProps = {
  title: string
  children: React.ReactNode
  icon: React.ReactElement
}

const Feature: NextPage<FeatureProps, any> = ({ title, children, icon }) => (
  <Stack spacing={{ base: '3', md: '6' }} direction={{ base: 'column', md: 'row' }}>
    <Box fontSize="6xl">{icon}</Box>
    <Stack spacing="1">
      <Text fontWeight="extrabold" fontSize="lg">
        {title}
      </Text>
      <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
    </Stack>
  </Stack>
)

Feature.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default Feature
