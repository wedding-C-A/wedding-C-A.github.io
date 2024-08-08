import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Map = () => {
  const lat: number = 35.85446381623755;
  const lng: number = 128.50674136923243;

  useEffect(() => {
    const loadKakaoMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${
        import.meta.env.VITE_KAKAO_API_KAY
      }`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
            draggable: false,
            scrollwheel: false,
            disableDoubleClickZoom: false,
          };

          const map = new window.kakao.maps.Map(container, options);

          // start1
          // const imageSrc = `/assets/marker.png`,
          //   imageSize = new window.kakao.maps.Size(64, 69),
          //   imageOption = { offset: new window.kakao.maps.Point(27, 69) };

          // const markerImage = new window.kakao.maps.MarkerImage(
          //     imageSrc,
          //     imageSize,
          //     imageOption,
          //   ),
          //   markerPosition = new window.kakao.maps.LatLng(lat, lng);

          // const marker = new window.kakao.maps.Marker({
          //   position: markerPosition,
          //   image: markerImage, // 마커이미지 설정
          // });
          // marker.setMap(map);
          // end1

          // start2
          // const markerPosition = new window.kakao.maps.LatLng(lat, lng);

          // const marker = new window.kakao.maps.Marker({
          //   position: markerPosition,
          // });

          // // const iwContent =
          // //     '<div style="width:150px;text-align:center;padding:6px 0;">AW 호텔</div>',
          // const iwContent = ` <img src="${/assets/aekmrr.png}" alt="product"/>`,
          //   iwPosition = new window.kakao.maps.LatLng(lat, lng);

          // const infowindow = new window.kakao.maps.InfoWindow({
          //   position: iwPosition,
          //   content: iwContent,
          // });

          // infowindow.open(map, marker);
          // marker.setMap(map);
          // end2

          // start3

          const markerDiv = document.createElement('div');
          markerDiv.className = 'custom-marker';

          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: new window.kakao.maps.LatLng(lat, lng),
            content: markerDiv,
          });

          customOverlay.setMap(map);
          // end3
        });
      };
      document.head.appendChild(script);
    };

    loadKakaoMapScript();
  }, []);

  return (
    <>
      <style>
        {`
      // .custom-marker {
      //   width: 64px;
      //   height: 69px;
      //   background: url('/assets/marker.png') no-repeat center center;
      //   background-size: contain;
      //   }

.custom-marker {
position: absolute;
    top: -30px;
    left: -15px;
    border-radius: 50% 50% 50% 0;
    border: 4px solid green;
    width: 50px;
    height: 50px;
    transform: rotate(-45deg);
    background-color: green;
}

.custom-marker::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    /* top: 50%; */
    /* left: 50%; */
    margin-left: -23px;
    margin-top: 0px;
    background-color: #fff;
    width: 50px;
    height: 50px;
    background: url(/assets/marker.png) no-repeat center center;
    background-size: contain;
    transform: rotate(40deg);
}
    `}
      </style>

      <Box component="section">
        <Typography
          variant="h3"
          sx={{
            fontSize: '0.875rem',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1,
            textAlign: 'center',
            color: '#ba8f58',
            letterSpacing: '0.2em',
          }}
        >
          " 함께 가는 길 "
        </Typography>
        <Box id="map" sx={{ p: 2, height: '300px' }}></Box>
      </Box>
    </>
  );
};

export default Map;
