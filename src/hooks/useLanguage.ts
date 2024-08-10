import { useEffect, useState } from 'react';
import locales from './locales.json'; // JSON 파일을 임포트

interface GreetingStrings {
  header: string;
  body: string;
  groom: string;
  bride: string;
}

interface WelcomeStrings {
  // welcome 객체가 현재 비어 있으므로 필요 시 추가 속성을 정의할 수 있습니다.
}

interface LocaleStrings {
  welcome: WelcomeStrings;
  greeting: GreetingStrings;
}

interface Locales {
  ko: LocaleStrings;
  jp: LocaleStrings;
}

const useLanguage = () => {
  const [strings, setStrings] = useState<Locales['ko']>(locales['ko']);

  useEffect(() => {
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get('lang') as 'ko' | 'jp';

    if (langParam && locales[langParam]) {
      setStrings(locales[langParam]);
    }
  }, []);

  return strings;
};

export default useLanguage;
