import {
  Box,
  Image,
  SimpleGrid,
  Heading
} from '@chakra-ui/react'
import { withTranslation } from 'i18n';
import { NextPage } from 'next';
import { TFunction } from 'next-i18next';
import * as React from 'react'
import { I18nContext } from "react-i18next";

type Props = {
  t: TFunction;
};

const LogoWall: NextPage<Props, any> = ({ t }) => {
  const {
    i18n: { language },
  } = React.useContext(I18nContext);

  return (
    <Box as="section" maxW={{ base: 'xl', md: '7xl' }} mx="auto" py={{ base: '12', md: '20' }}>
      <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight" textAlign="center">
        {t("home-text43")}
      </Heading>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 6 }}
        color="gray.500"
        mt={14}
        alignItems="center"
        justifyItems="center"
        spacing={{ base: '12', lg: '12' }}
      >
        {
          [
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/airwallex-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/taikang-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/eFactory-3.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/NASA-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/weibo-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/hangxin-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/tencent-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/QING-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/mobile-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/naixue-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/xindongfang-2.png",
            "https://api7-website-1301662268.file.myqcloud.com/20210330/gray/haoweilai-2.png"
          ].map(item => (
            <>
              <Image src={item} key={`phone-${item}`} display={{ base: 'flex', lg: 'none' }} my="3" />
              <Image src={item} key={`pc-${item}`} maxW="230" display={{ base: 'none', lg: 'flex' }} my="3" />
            </>
          ))
        }
      </SimpleGrid>
    </Box>
  )
}

LogoWall.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(LogoWall);
