import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Tour = [
    { text: "인천 투어", image: "https://images.unsplash.com/photo-1683380381470-8bb7e42aa5b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { text: "서울 투어", image: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { text: "대구 투어", image: "https://images.unsplash.com/photo-1684562341173-c460d105069b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { text: "경기 투어", image: "https://plus.unsplash.com/premium_photo-1673002094288-6c4456aa9098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" }
];

const dataTour = [
    { text: "6월 이벤트", image: "https://images.unsplash.com/photo-1566118610174-c40f1a781bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" },
    { text: "7월 이벤트", image: "https://images.unsplash.com/photo-1533420896084-06d2bce5365f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" },
    { text: "8월 이벤트", image: "https://images.unsplash.com/photo-1505009258427-29298f4dc5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
];

export default function Home() {


    return (
        <>
            <Layout>
                <VStack spacing={16} w="inherit" py={"140px"} px={4} alignItems={"flex-start"}>
                    <VStack w="inherit" >

                        {/* 최신상품 컨테이너 */}
                        <Text spacing={0} fontWeight={600} fontSize={24}>
                            최신상품
                        </Text>

                        <Grid gap="2" gridTemplateColumns={"repeat(2, 1fr)"} w={"full"}>
                            {Tour.map((item, index) => (
                                <GridItem
                                    key={index}

                                    h={"200px"}
                                    border={"1px"}
                                    rounded={"md"}
                                    borderColor={"gray.300"}
                                    bgImage={`url(${item.image})`}
                                    backgroundPosition={"center"}
                                    backgroundSize={"cover"}
                                    position="relative"
                                    overflow={"hidden"}
                                >
                                    <Box w='100%' h='200px' bgGradient='linear(to-b,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))' />
                                    <Box posiiton="absolute" top={0} left={0} w="full" h="full" bg="rgba(0, 0, 0, 0.2)">
                                        <Text color="white" position="absolute" w="full" bottom="0" align="center" py={4} fontWeight="600">
                                            {item.text}
                                        </Text>

                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>

                    </VStack>

                    {/* 이벤트 컨테이너 */}
                    <VStack w="full" alignItems={"flex-start"}>
                        <Text fontWeight={600} fontSize={24}>
                            이벤트
                        </Text>
                        <Grid gap="3" w="full">
                            {dataTour.map((item, index) => (
                                <GridItem
                                    key={index}

                                    w="full"
                                    h="120px"
                                    rounded={"md"}
                                    backgroundImage={`url(${item.image})`}
                                    backgroundSize="cover"
                                    backgroundPosition={"center center"}
                                    position={"relative"}

                                >
                                    <Link to="/detail">
                                        <Box
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            w="full"
                                            h="full"
                                            bgGradient={'linear(to-b,rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.7))'}

                                        >
                                            <Text position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform={"translate(-50%, -50%)"}
                                                color="orange"
                                                fontWeight="bold">
                                                {item.text}
                                            </Text>
                                        </Box>
                                    </Link>
                                </GridItem>

                            ))}
                        </Grid>
                    </VStack>

                </VStack>
            </Layout>
        </>
    )
}

