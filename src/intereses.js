
export const interesSimple = (capital, tasa, tiempo) => {
  if (capital < 0 || tasa < 0 || tiempo < 0) {
    throw new Error('Inválido');
  }

  return Number((capital * (tasa / 100) * tiempo).toFixed(2));
};
