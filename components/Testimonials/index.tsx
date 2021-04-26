import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { TFunction } from "next-i18next";
import { NextPage } from "next";
import { withTranslation } from 'i18n';

import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'

type Props = {
  t: TFunction;
};

const Testimonials: NextPage<Props, any> = ({ t }) => {
  const pageRef = React.useRef(1)
  const [page, setPage] = React.useState(1)

  const list = [
    {
      description: t("home-text34"),
      logo: '/static/images/airwallex.png',
    },
    {
      description: t("home-text35"),
      logo: '/static/images/tencent-ieg.png',
    },
    {
      description: t("home-text32"),
      logo: '/static/images/meicai.png',
    },
    {
      description: t("home-text33"),
      logo: '/static/images/tencent-cloud.png',
    }
  ]

  React.useEffect(() => {
    setInterval(() => {
      let nextPage = pageRef.current + 1
      if (nextPage > list.length) {
        nextPage = 1
      }
      pageRef.current = nextPage
      setPage(pageRef.current)
    }, 5000)
  }, [])

  return (
    <Box as="section">
      <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue('gray.300', 'gray.600')}
            fontSize={{ base: '3xl', md: '6xl' }}
          />
          {list.map((item, index) => {
            return (
              <Box key={item.logo} hidden={index !== page - 1}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
                  {item.description}
                </Text>
                <Quotee
                  imageSrc={item.logo}
                  mt="8"
                />
              </Box>
            )
          })}
        </Flex>
        <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
          {list.map((_, index) => (
            <Circle w="3" h="3" bg={page - 1 === index ? 'blue.500' : 'currentColor'} key={index} />
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

Testimonials.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(Testimonials)

