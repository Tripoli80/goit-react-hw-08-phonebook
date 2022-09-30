import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  // абстактные значения клоторые возврааются при каждом вызове данной функции
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(`${key}`)) ?? defaultValue
  );
  // на каждый сгенерированый вызов данной функции мы вешаем эфект записи в локал сторейдж используя ключ с пропсов и только что созданый стейт
  useEffect(() => {
    window.localStorage.setItem(`${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
