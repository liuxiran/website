import { Box, Circle, Flex, HStack, Text, useColorModeValue, Img } from '@chakra-ui/react'
import * as React from 'react'
import { TFunction } from "next-i18next";
import { NextPage } from "next";
import { withTranslation } from 'i18n';

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
      name: t("home-text36"),
      job: t("home-text37")
    },
    {
      description: t("home-text35"),
      logo: '/static/images/tencent-ieg.png',
      name: t("home-text38"),
      job: ''
    },
    {
      description: t("home-text32"),
      logo: '/static/images/meicai.png',
      name: t("home-text39"),
      job: t("home-text40")
    },
    {
      description: t("home-text33"),
      logo: '/static/images/tencent-cloud.png',
      name: t("home-text41"),
      job: t("home-text42")
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
    }, 10000)
  }, [])

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')} pb="12">
      <Box maxW="4xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Flex direction="column" align="center" textAlign="center">
          {list.map((item, index) => {
            return (
              <Box key={item.logo} hidden={index !== page - 1} display={{ base: '', lg: 'flex' }} alignItems="center">
                <Box mr={{ base: '0', lg: '5' }} mb={{ base: '5', lg: '0' }}>
                  <Img src={item.logo} mx="auto" maxW={48} />
                </Box>
                <Box>
                  <Text fontWeight="extrabold" textAlign="left" mb="3">
                    {item.name}{item.job ? ` - ${item.job}` : ''}
                  </Text>
                  <Text fontWeight="medium" textAlign="left">
                    {item.description}
                  </Text>
                </Box>
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

