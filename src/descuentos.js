export const aplicarDescuento = (precio, descuento) => {
  if (precio < 0 || descuento < 0 || descuento > 100) throw new Error('Inválido');
  return Number((precio - (precio * (descuento / 100))).toFixed(2));
};
