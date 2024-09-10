import { Box, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import useLanguage from '../hooks/useLanguage';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const WeddingHallInfo: React.FC = () => {
  const message = useLanguage();

  return (
    <Box my={2}>
      <Typography className="tit" variant="h6" gutterBottom>
        {message.map.address.title}
      </Typography>
      <Box>
        <Typography variant="body1"> {message.map.address.info}</Typography>
        <Typography variant="body1"> {message.map.address.tel}</Typography>
      </Box>
    </Box>
  );
};

const Map: React.FC = () => {
  const message = useLanguage();

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
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          background: '#f8f3ec',
          color: '#ba8f58',
          fontSize: '1.750rem',
          fontWeight: 400,
          lineHeight: '2.5rem',
          marginBottom: '1rem',
          letterSpacing: '0.2em',
          fontFamily: 'Arizonia',
        }}
      >
        {message.map.title}
      </Typography>

      <Box component="section">
        <WeddingHallInfo />

        <Box id="map" sx={{ p: 2, height: '300px' }}></Box>

        <Divider />

        <Box sx={{ p: 2 }} textAlign={'left'}>
          <Box sx={{ mb: 2 }} component="dl">
            <Typography variant="h6" component="dt">
              {message.map.subway.title}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.subway.info}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ mb: 2 }} component="dl">
            <Typography variant="h6" component="dt">
              {message.map.bus.title}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.bus.station1.title}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.bus.station1.busRoutes}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.bus.station1.localRoutes}
            </Typography>
            <br />
            <Typography variant="body1" component="dd">
              {message.map.bus.station2.title}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.bus.station2.busRoutes}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.bus.station2.localRoutes}
            </Typography>
          </Box>

          <Divider />

          <Box component="dl">
            <Typography variant="h6" component="dt">
              {message.map.highway.title}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.highway.cont1}
            </Typography>
            <Typography variant="body1" component="dd">
              {message.map.highway.cont2}
            </Typography>
          </Box>

          <Divider />

          <Box component="dl">
            <Typography variant="h6" component="dt">
              주차안내
            </Typography>

            <Box
              component="img"
              src="/assets/parking.png"
              alt=""
              sx={{
                maxWidth: '100%',
                verticalAlign: 'top',
                fontSize: 0,
                border: 'none',
                objectFit: 'cover',
              }}
            />

            <Box component="dl">
              <Typography variant="body1" component="dd">
                - AW호텔
              </Typography>
              <Typography variant="body1" component="dd">
                - 환승주차장 [무료이용]
              </Typography>
              <Typography variant="body1" component="dd">
                - 차량등록사업소 [무료이용]
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Map;
