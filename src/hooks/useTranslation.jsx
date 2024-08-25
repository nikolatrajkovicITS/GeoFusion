import { useCallback } from 'react';
import en from '@/locales/en';

const translations = { en };

const useTranslation = () => {
  const t = useCallback(key => {
    return translations.en[key] || key;
  }, []);

  return { t };
};

export default useTranslation;
