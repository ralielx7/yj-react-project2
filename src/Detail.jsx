import { Box, VStack, Image, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail() {
    return (
        <Layout canGoBack title="디테일 페이지">
            <VStack py="140px" bg={"gray.900"}>
                <Box>
                    <Image src="https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1360&q=80">
                    </Image>
                </Box>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color={"white"} fontSize={20} fontWeight={700}>
                        벌 새
                    </Text>
                    <Text color={"white"}>벌을 받는 새</Text>
                </VStack>
                <VStack>
                    <Box w="95%" h="2px" bg={"gray.700"} />
                </VStack>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color={"white"} fontWeight={700}>운영시간</Text>
                    <Text color={"white"} fontSize={14}>10:00 ~ 17:00</Text>
                </VStack>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color={"white"} fontWeight={700}>운영시간</Text>
                    <Text color={"white"} fontSize={14}>10:00 ~ 17:00</Text>
                </VStack>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color={"white"} fontWeight={700}>운영시간</Text>
                    <Text color={"white"} fontSize={14}>10:00 ~ 17:00</Text>
                </VStack>
                {/* 카카오 지도 */}
                <KakaoMap />
            </VStack>
        </Layout >
    );
}

