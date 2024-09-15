import { Box, Divider, Grid, styled, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useLanguage from '../hooks/useLanguage';

interface CalenderProps {
  targetDate: Date;
}

const StyledCalendarWrapper = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '.react-calendar': {
    width: '100%',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: '4px 2px 10px 0px rgba(0, 0, 0, 0.13)',
    padding: '3% 5%',
    backgroundColor: 'white',
    PointerEvent: 'none',
  },
  '.react-calendar__month-view abbr': {
    color: '#6d6d6d',
  },
  '.react-calendar__navigation': {
    justifyContent: 'center',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  '.react-calendar__navigation button': {
    fontWeight: 800,
    fontSize: '1rem',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  '.react-calendar__navigation button:focus': {
    backgroundColor: 'white',
  },
  '.react-calendar__navigation button:disabled': {
    backgroundColor: 'white',
    color: '#000000',
  },
  '.react-calendar__navigation__label': {
    flexGrow: 0,
  },
  '.react-calendar__month-view__weekdays abbr': {
    textDecoration: 'none',
    fontWeight: 800,
  },
  '.react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"]':
    {
      color: '#ff0000',
    },
  '.react-calendar__month-view__weekdays__weekday--weekend abbr[title="日曜日"]':
    {
      color: '#ff0000',
    },
  '.react-calendar__tile--now abbr': {
    color: '#3f51b5',
  },
  '.react-calendar__year-view__months__month': {
    borderRadius: '0.8rem',
    backgroundColor: '#f5f5f5',
    flex: '0 0 calc(33.3333% - 10px) !important',
    marginInlineStart: '5px !important',
    marginInlineEnd: '5px !important',
    marginBlockEnd: '10px',
    padding: '20px 6.6667px',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#6d6d6d',
  },
  '.react-calendar__tile--hasActive': {
    backgroundColor: '#3f51b5',
    abbr: {
      color: 'white',
    },
  },
  '.react-calendar__tile': {
    padding: '5px 0px 18px',
    position: 'relative',
  },
  '.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus, .react-calendar__tile--active':
    {
      backgroundColor: '#fff',
      borderRadius: '0.3rem',
    },
}));

const StyledCalendar = styled(Calendar)({});

const heartStyle = {
  position: 'absolute',
  top: '5px',
  width: '30px',
  aspectRatio: '1',
  borderImage: `
    radial-gradient(red 69%, transparent 70%) 84.5%/50%
  `,
  clipPath: 'polygon(-41% 0, 50% 91%, 141% 0)',
  borderStyle: 'solid',
  borderWidth: '10px',
  borderColor: 'transparent',
  opacity: '0.5',
};

const tileStyle: React.CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '-26px',
};

const Calender: React.FC<CalenderProps> = ({ targetDate }) => {
  const url = new URL(window.location.href);
  const language = url.searchParams.get('lang') as 'ko' | 'jp';

  const addContent = ({ date }: { date: Date }) => {
    const targetDate = new Date('2024-10-12');

    if (date.toDateString() === targetDate.toDateString()) {
      return (
        <Box sx={tileStyle}>
          <Box sx={heartStyle}></Box>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box component="section" sx={{ py: 1 }}>
      <StyledCalendarWrapper>
        <StyledCalendar
          locale={language === 'jp' ? 'ja-JP' : ''}
          defaultView="month"
          value={targetDate}
          calendarType="gregory"
          showNeighboringMonth={false}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => format(date, 'd')}
          tileContent={addContent}
        />
      </StyledCalendarWrapper>
    </Box>
  );
};

const styles = {
  countContainer: {
    backgroundImage: `url(/assets/countdown.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  },
};

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountDown: React.FC = () => {
  const targetDate = new Date('2024-10-12T13:00:00Z');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
    <Box component="section" sx={{ p: 1 }} style={styles.countContainer}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Box textAlign="center">
            <Typography variant="h2">{timeLeft.days}</Typography>
            <Typography variant="h5">DAYS</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <Grid item>
          <Box textAlign="center">
            <Typography variant="h3">{timeLeft.hours}</Typography>
            <Typography variant="body2">HOUR</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <Typography variant="h3">{timeLeft.minutes}</Typography>
            <Typography variant="body2">MINUTES</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <Typography variant="h3">{timeLeft.seconds}</Typography>
            <Typography variant="body2">SECONDS</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Dday: React.FC = () => {
  const message = useLanguage();

  const targetDate = new Date('2024-10-12T13:00:00Z');

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
          letterSpacing: '0.2em',
          fontFamily: 'Arizonia',
        }}
      >
        Date
      </Typography>

      <Box
        component="section"
        sx={{
          px: 1,
          py: 2,
        }}
      >
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {message.date.body1}
        </Typography>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {message.date.body2}
        </Typography>

        <Divider sx={{ m: 2 }} />

        <Calender targetDate={targetDate} />

        <CountDown />
      </Box>
    </>
  );
};

export default Dday;
