import { describe, it, expect } from 'vitest';
import { calcularIVA, totalConIVA } from '../src/iva.js';

describe ('Módulo IVA', ()=>{
    it.each([
        [100,0.16,16],
        [200,0.16,32],
        [0,0.16,0],
        [50,0.08,4],
        [99.99,0.16,16.00],
        [1,0.16,0.16],
        [10,0.16,1.6],
        [1000,0.16,160],
        [500,0.16,80],
        [250,0.16,40]
    ])
    ('calcularIVA(%f, %f) debe ser %f', (monto, tasa, esperado) => {
        expect(calcularIVA(monto,tasa)).toBe(esperado);
    });

    it.each([
        [100,0.16,116],
        [200,0.16,232],
        [0,0.16,0],
        [50,0.08,54],
        [1000,0.16,1160],
        [500,0.16,580],
        [250,0.16,290]
    ])
    ('totalConIVA(%f, %f) debe ser %f', (monto, tasa, esperado) => {
        expect(totalConIVA(monto,tasa)).toBe(esperado);
    });
    it('lanza error con negativos', ()=> expect(()=> calcularIVA(-1)).toThrow());
    it('lanza error en total con negativos', ()=> expect(()=> totalConIVA(-1)).toThrow());
});
