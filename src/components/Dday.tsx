import { Box } from '@mui/material';
import { differenceInSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

const Dday = () => {

    // 目標の日時を設定（年月日時分秒、UTCで設定）
    const targetDateUTC = new Date('2024-10-12T13:00:00Z');

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            // 現在の日時を取得
            const now = new Date();

            // 目標日時までの残り時間（秒単位）を計算
            const diffInSeconds = differenceInSeconds(targetDateUTC, now);

            if (diffInSeconds <= 0) {
                clearInterval(timer); // タイマー停止
                // setCountdown('カウントダウン終了');
            } else {
                // 日数、時間、分、秒を計算
                const days = Math.floor(diffInSeconds / (3600 * 24));
                const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((diffInSeconds % 3600) / 60);
                const seconds = diffInSeconds % 60;

                // カウントダウンを更新
                // setCountdown(`${days}: ${hours} ${minutes} ${seconds}秒`);
                setCountdown({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            }
        }, 1000);

        return () => clearInterval(timer); // コンポーネントがアンマウントされたときにタイマーをクリーンアップ
    }, []); // 空の依存配列を渡すことで、マウント時にのみ実行されるようにする


    return (
        <Box component="section" sx={{ p: 2 }}>
            <p>
                2025/10/12 stu
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexFlow: 'column', margin: '0 15px' }}>
                    <span>{countdown.days}</span>
                    <span>DAYS</span>
                </div>
                <div style={{ display: 'flex', flexFlow: 'column', margin: '0 15px' }}>
                    <span>{countdown.hours}</span>
                    <span>HOURS</span>
                </div>
                <div style={{ display: 'flex', flexFlow: 'column', margin: '0 15px' }}>
                    <span>{countdown.minutes}</span>
                    <span>MINUTES</span>
                </div>
                <div style={{ display: 'flex', flexFlow: 'column', margin: '0 15px' }}>
                    <span>{countdown.seconds}</span>
                    <span>SECONDS</span>
                </div>
            </div>
        </Box>
    );
};

export default Dday;
