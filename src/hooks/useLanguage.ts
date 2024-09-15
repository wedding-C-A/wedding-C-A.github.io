import { useEffect, useState } from 'react';
import locales from './locales.json'; // JSON 파일을 임포트

type IWelcome = Record<string, never>;

type IDate = {
  body1: string;
  body2: string;
};

type IGreeting = {
  title: string;
  header: string;
  body: string;
  groom: string;
  bride: string;
};

type IMap = {
  title: string;
  address: {
    title: string;
    info: string;
    tel: string;
  };
  bus: {
    title: string;
    station1: {
      title: string;
      busRoutes: string;
      localRoutes: string;
    };
    station2: {
      title: string;
      busRoutes: string;
      localRoutes: string;
    };
  };
  subway: {
    title: string;
    info: string;
  };
  highway: {
    title: string;
    cont1: string;
    cont2: string;
  };
};

type IAccount = {
  title: string;
  body: {
    cont1: string;
    cont2: string;
    cont3: string;
    cont4: string;
    cont5: string;
  };
  groom: {
    title: string;
    person1: {
      info: string;
      name: string;
      acc: string;
    };
    person2: {
      info: string;
      name: string;
      acc: string;
    };
    person3: {
      info: string;
      name: string;
      acc: string;
    };
  };
};

type IContact = {
  title: string;
  groomHost: {
    title: string;
    father: {
      name: string;
      phone: string;
    };
    mother: {
      name: string;
      phone: string;
    };
  };
  brideHost: {
    title: string;
    father: {
      name: string;
      phone: string;
    };
    mother: {
      name: string;
      phone: string;
    };
  };
};

interface LocaleStrings {
  welcome: IWelcome;
  greeting: IGreeting;
  date: IDate;
  map: IMap;
  account: IAccount;
  contact: IContact;
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
