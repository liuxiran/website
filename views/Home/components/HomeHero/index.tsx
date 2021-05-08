import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Img,
  Button,
} from '@chakra-ui/react'
import { withTranslation } from 'i18n';
import { NextPage } from 'next';
import { TFunction } from 'next-i18next';
import * as React from 'react'
import { I18nContext } from "react-i18next";
import { HiPlay } from 'react-icons/hi'

type Props = {
  t: TFunction;
};

const App: NextPage<Props, any> = ({ t }) => {
  const {
    i18n: { language },
  } = React.useContext(I18nContext);

  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '7' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '580px' }}>
            <Heading
              as="h1"
              size="3xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {t("home-block1-title")}
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              {t("home-block1-desc")}
            </Text>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              {t("home-block5-desc")}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
              <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8" as="a"
                href="/form-api7-trial"
                _hover={{ color: "var(--chakra-colors-white)", background: "var(--chakra-colors-blue-600)", textDecoration: "none" }}
              >
                {t("home-text29")}
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.900"
                _hover={{ bg: 'gray.50' }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
                disabled
              >
                观看视频
            </Button>
            </Stack>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '650px' }} h={{ base: 'auto' }}>
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="https://static.apiseven.com/2020/05/1594881772-Canvas-1.png"
              alt="api7.ai"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

App.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(App);