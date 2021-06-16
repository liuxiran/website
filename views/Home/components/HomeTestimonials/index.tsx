import React from 'react';
import {
  Box, Heading, Flex, Spacer, Stack, Text, useColorModeValue, StackDivider, Image, useColorModeValue as mode
} from '@chakra-ui/react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
  
const HomeTestimonials = () => {
	const params = {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: (index, className) => {
				return '<span class="' + className + '">金融</span>';
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	}
	return (
		<Box bg={mode('gray.50', 'inherit')} as="section" py="24">
			<Box maxW={{ base: 'xl', md: '2xl', lg: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
				<Box textAlign="center" maxW="md" mx="auto">
					<Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
						听用户的声音
					</Heading>
					<Text mt="4" fontSize="lg" color={mode('gray.600', 'gray.400')}></Text>
				</Box>
				<Swiper {...params}>
					<Box>
						<Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '12', md: '20' }} bg='whiteAlpha.900'>
							<Flex>
								<Box p="4" >
									<Text>李样兵</Text>
									<Text>美菜网基础服务平台负责人</Text>
								</Box>
								<Spacer />
								<Box p="4" >
									sadf
								</Box>
							</Flex>
							<Text>美菜网内部一直使用 Nginx 作为内网调用的代理层，Nginx 有很高的性能，但是在修改配置 Reload 时候会出现少量请求失败。另外，在实现特定需求场景的时候会使用 Lua 实现，而原生 Lua 会影响 Nginx 事件处理机制，进一步拖慢响应速度。在此背景下我们调研了 Apache APISIX 这款云原生、高性能、可扩展的微服务 API 网关。它不仅对原生 Nginx 的功能支持友好，并且还继承了 Nginx 高并发、高性能、高可靠性的特点，同时还提供了丰富的插件，例如灰度、限流/限速、授权认证等，可以更好的为业务服务。Apache APISIX 活跃的社区文化也是吸引我们地方，对于网关的选型来说它是一个很不错的选择。</Text>
						</Box>
					</Box>
					<div style={{height:200,background: 'red'}}>Slide #1</div>
					<div style={{height:200,background: 'black'}}>Slide #2</div>
					<div style={{height:200,background: 'green'}}>Slide #3</div>
				</Swiper>
			</Box>
			
		</Box>
	)
};
export default HomeTestimonials;