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
        </Box>

        {/* <List>
          <ListItem>
            <Typography variant="h6">{message.map.bus.title}</Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  - 정류장 [성서우방타운 건너]{' '}
                  <span style={{ color: '#6666FF' }}>
                    간선 405, 503, 527, 564
                  </span>{' '}
                  <span style={{ color: '#FF6666' }}>지선 달서3, 달서5</span>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - 정류장 [성서우체국 건너]{' '}
                  <span style={{ color: '#6666FF' }}>간선 564</span>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - 정류장 [성서산업단지역(1번출구)]{' '}
                  <span style={{ color: '#6666FF' }}>간선 425, 518, 655</span>{' '}
                  <span style={{ color: '#FF6666' }}>
                    지선 달서1, 성서1-1, 성서2
                  </span>
                </Typography>
              </ListItem>
            </List>
          </ListItem>

          <ListItem>
            <Typography variant="h6">지하철로 오시는 길</Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  <span style={{ color: '#6666FF' }}>
                    2호선 성서산업단지역 8번 출구 도보 3분
                  </span>{' '}
                  (동대구역(1호선) 대곡방면 &gt; 반월당역(2호선) 문양방면 환승
                  &gt; 성서산업단지역)
                </Typography>
              </ListItem>
            </List>
          </ListItem>

          <ListItem>
            <Typography variant="h6">고속도로 이용 시</Typography>
            <List>
              <ListItem>
                <Typography variant="body1">
                  <span style={{ color: '#6666FF' }}>서대구 IC</span> - (경부,
                  중앙, 구마) 서대구 IC에서 광주·마산 방면 1km 직진 대구·성주
                  방면 우측 출구로 나오신 후 성주·성서 방면으로 내리시면 됩니다.
                </Typography>
              </ListItem>
            </List>
          </ListItem>
        </List> */}
      </Box>
    </>
  );
};

export default Map;
