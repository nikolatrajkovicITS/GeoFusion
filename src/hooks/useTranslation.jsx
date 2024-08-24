import { useCallback } from 'react';
import en from '@/locales/en';

const translations = { en };

export const useTranslation = () => {
  const t = useCallback(key => {
    return translations.en[key] || key;
  }, []);

  return { t };
};
