import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 7, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

        // new window.kakao.maps.Map(mapContainer, mapOption);




    },
        [

        ]
    );


    return (<Box as="div" w="full" h="300px" id="map"></Box>);
}