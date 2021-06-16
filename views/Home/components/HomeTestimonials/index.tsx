import React from 'react';
import {
  Box, Heading, Flex, Spacer, Text, useColorModeValue as mode
} from '@chakra-ui/react';
import { TFunction } from "next-i18next";
import { NextPage } from "next";
import { withTranslation } from 'i18n';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

type Props = {
  t: TFunction;
};

const HomeTestimonials: NextPage<Props, any> = ({ t }) => {
  // testimonials data
  const list = [
  {
    description: t("home-testimonials-airwallex-desc"),
    logo: '/static/images/airwallex.png',
    name: t("home-testimonials-airwallex-name"),
    job: t("home-testimonials-airwallex-job"),
    label: t("home-testimonials-airwallex-label")
  },
  {
    description: t("home-testimonials-tencent-ieg-desc"),
    logo: '/static/images/tencent-ieg.png',
    name: t("home-testimonials-tencent-ieg-name"),
    job: '',
    label: t("home-testimonials-tencent-ieg-label")
  },
  {
    description: t("home-testimonials-meicai-desc"),
    logo: '/static/images/meicai.png',
    name: t("home-testimonials-meicai-name"),
    job: t("home-testimonials-meicai-job"),
    label: t("home-testimonials-meicai-label")
  },
  {
    description: t("home-testimonials-tencent-cloud-desc"),
    logo: '/static/images/tencent-cloud.png',
    name: t("home-testimonials-tencent-cloud-name"),
    job: t("home-testimonials-tencent-cloud-job"),
    label: t("home-testimonials-tencent-cloud-label")
  }];

  // for swiper config
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}" style="height: 3px; width: auto; border-radius:0">${list[index].label}</span>`;
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Box bg={mode('gray.50', 'inherit')} as="section" py="24">
      <Box maxW={{ base: 'xl', md: '2xl', lg: '7xl' }} mx='auto' px={{ base: '6', md: '8' }}>
        <Box textAlign="center" maxW="md" mx="auto" mb="14">
          <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">{t('home-testimonials')}</Heading>
          <Text mt="4" fontSize="lg" color={mode('gray.600', 'gray.400')}></Text>
        </Box>
        <Swiper {...swiperParams}>
        {
          list.map((item, index) => {
          return (
            <Box>
              <Box maxW="4xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '12', md: '8' }}>
                <Flex pb={{ base: '12', md: '8' }}>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">{item.name}</Text>
                    <Text color="gray.500" mt="2">{item.job}</Text>
                  </Box>
                  <Spacer />
                  <Box maxW="36">
                    <img src={item.logo} ></img>
                  </Box>
                </Flex>
                <Text minH="13rem">{item.description}</Text>
              </Box>
            </Box>
            )
          })
        }
        </Swiper>
      </Box>
    </Box>
  )};
export default withTranslation("home")(HomeTestimonials);
