import { describe, it, expect } from 'vitest';
import { aplicarDescuento } from '../src/descuentos.js';

describe('Módulo Descuentos', () => {
  it.each([
    [100, 20, 80], [50, 10, 45], [200, 50, 100], [100, 0, 100],
    [100, 100, 0], [99.99, 10, 89.99], [500, 25, 375], [1000, 15, 850],
    [250, 5, 237.5], [10, 100, 0], [300, 33.33, 200.01], [75, 20, 60],
    [150, 30, 105], [80, 50, 40], [1200, 10, 1080], [45.5, 10, 40.95]
  ])('aplicarDescuento(%f, %f) debe ser %f', (precio, desc, esperado) => {
    expect(aplicarDescuento(precio, desc)).toBe(esperado);
  });

  it('error precio negativo', () => expect(() => aplicarDescuento(-10, 10)).toThrow());
  it('error descuento negativo', () => expect(() => aplicarDescuento(100, -10)).toThrow());
  it('error descuento mayor a 100', () => expect(() => aplicarDescuento(100, 150)).toThrow());
});
