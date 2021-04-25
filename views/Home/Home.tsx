import React, { useContext } from "react";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";
import { I18nContext } from "react-i18next";
import { NextPage } from "next";

import Testimonials from '@/components/Testimonials'

import { default as NextGenAPIGateway } from './components/HomeFeature3'
import { default as Resources } from './components/HomeFeature4'
import { default as OSS } from './components/HomeFeature5'
import HomeHero from './components/HomeHero'
import HomeCTA from "./components/HomeCTA";

import { withTranslation } from "../../i18n";

type Props = {
  t: TFunction;
};

const Home: NextPage<Props, any> = ({ t }) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <>
      <NextSeo title={t("common:homepage")} />

      <HomeHero />
      <Testimonials />
      <NextGenAPIGateway />
      <OSS />
      <Resources />
      <HomeCTA />
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(Home);
