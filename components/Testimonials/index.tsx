import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'

const Testimonials = () => {
  const pageRef = React.useRef(1)
  const [page, setPage] = React.useState(1)

  const list = [
    {
      description: 'Apache APISIX 的动态能力，减少了 Nginx 重载配置时请求失败的情况。此外，它拥有高性能、高可靠等特点，且提供了丰富的插件来服务业务，对于网关选型而言，它是一个很不错的选择。',
      logo: '/static/images/meicai.png',
      text1: '美菜网',
      text2: ''
    },
    {
      description: '我们调研过很多 API 网关，最终选择 Apache APISIX 作为新一代网关的核心组件，原因是它的高性能、高可扩展性以及活跃的社区。希望它能对微服务领域产生更深远的影响。',
      logo: '/static/images/tencent-cloud.png',
      text1: '腾讯云',
      text2: ''
    }, {
      description: '我们已经实现了基于 APISIX 的 API 网关，并且已经顺利地向多云和微服务架构过渡，这要归功于 APISIX 高度优化和可扩展的平台，以及开发者社区的支持！',
      logo: '/static/images/airwallex.png',
      text1: 'Airwallex',
      text2: '',
    },
    {
      description: '随着微服务大规模普及，应用规模、节点数量与依赖都在快速增长，一个高效、易用的 API 网关很有必要。腾讯互娱团队在 Apache APISIX 早期阶段便参与其中，共同推动社区进步。',
      logo: '/static/images/tencent-ieg.png',
      text1: '腾讯互娱用户平台',
      text2: ''
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
    }, 3000)
  }, [])

  const item = list[pageRef.current - 1]

  if (!item) {
    return null
  }

  const { description, logo, text1, text2 } = item

  return (
    <Box as="section">
      <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue('gray.300', 'gray.600')}
            fontSize={{ base: '3xl', md: '6xl' }}
          />
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
            {description}
          </Text>
          <Quotee
            name={text1}
            jobTitle={text2}
            imageSrc={logo}
            mt="8"
          />
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

export default Testimonials
