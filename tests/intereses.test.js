
import { describe, it, expect } from 'vitest';
import { interesSimple } from '../src/intereses.js';

describe('Módulo Intereses', () => {
  it.each([
    [1000, 5, 1, 50],
    [1000, 5, 2, 100],
    [0, 5, 2, 0],
    [1000, 0, 2, 0],
    [1000, 5, 0, 0],
    [500, 10, 1, 50],
    [2000, 2.5, 4, 200],
    [1500, 3, 5, 225],
    [250, 8, 2, 40],
    [300, 4.5, 3, 40.5],
    [100, 10, 10, 100],
    [400, 1.5, 6, 36],
    [750, 6, 1.5, 67.5],
    [1200, 4, 0.5, 24],
    [5000, 7.5, 2, 750],
    [800, 9, 3, 216]
  ])('interesSimple(%f, %f, %f) debe ser %f', (cap, tasa, t, esperado) => {
    expect(interesSimple(cap, tasa, t)).toBe(esperado);
  });

  it('error capital negativo', () =>
    expect(() => interesSimple(-100, 5, 1)).toThrow());

  it('error tasa negativa', () =>
    expect(() => interesSimple(100, -5, 1)).toThrow());

  it('error tiempo negativo', () =>
    expect(() => interesSimple(100, 5, -1)).toThrow());
});
