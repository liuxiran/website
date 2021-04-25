import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from "react";
import { TFunction } from "next-i18next";
import { NextPage } from "next";
import { withTranslation } from 'i18n';

type Props = {
  t: TFunction;
};

const App: NextPage<Props, any> = ({ t }) => {
  return (
    <Box as="section" py="12" bg={useColorModeValue('gray.50', 'gray.800')} borderBottom="1px solid #dee2e4">
      <Stack
        spacing="6"
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        justify="space-between"
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Box>
          <Text mb="2" fontSize="lg" fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')}>
            {t("home-text25")}
          </Text>
          <Heading size="xl" fontWeight="extrabold" maxW="20ch">
            {t("home-text26")}
            <Box
              as="mark"
              bg="unset"
              color={useColorModeValue('blue.600', 'blue.200')}
              whiteSpace="nowrap"
            >
              {t("home-text27")}
            </Box>
            {t("home-text28")}
          </Heading>
        </Box>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '2', sm: '4' }}>
          <Button
            size="lg"
            colorScheme="blue"
            as="a"
            href="/form-api7-trial"
            _hover={{ color: "var(--chakra-colors-white)", background: "var(--chakra-colors-blue-600)", textDecoration: "none" }}
          >
            {t("home-text29")}
          </Button>
          <Button
            size="lg"
            as="a"
            href="mailto:wenming@api7.ai"
            _hover={{ color: "#1A202C", background: "var(--chakra-colors-gray-200)", textDecoration: "none" }}
          >
            {t("home-text30")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

App.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(App);

