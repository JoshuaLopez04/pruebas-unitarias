const funciones = require('./app');

test('Dolares a Yuanes', () => {
  expect(funciones.fromDollarToYan(1)).toBe(7.13);
});

test('Euros a Dolares', () => {
  expect(funciones.fromEuroToDollar(1)).toBe(1.10);
});

test('Yan a Libras', () => {
  expect(funciones.fromYanToPound(1)).toBe(0.0055);
});