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

          const markerPosition = new window.kakao.maps.LatLng(lat, lng);

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);
        });
      };
      document.head.appendChild(script);
    };

    loadKakaoMapScript();
  }, []);

  return (
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
  );
};

export default Map;
