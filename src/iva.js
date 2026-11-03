export const calcularIVA = (monto, tasa = 0.16) => {
    if (monto < 0) {
        throw new Error ('Monto inválido');
    }
    return Number ((monto*tasa).toFixed(2));
};

export const totalConIVA = (monto, tasa = 0.16) => {
    if (monto < 0) {
        throw new Error ('Monto inválido');
    }
    return Number ((monto * (1 + tasa)).toFixed(2));
};
