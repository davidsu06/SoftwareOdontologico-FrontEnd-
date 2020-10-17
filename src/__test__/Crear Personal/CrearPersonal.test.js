import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';

import CrearPersonal from './CrearPersonal';
import userEvent from '@testing-library/user-event';
import regex from '../regex';

test('Test creación de personal', () => {
  render(<CrearPersonal/>);

  const btnSubmit = screen.getByTestId('btn-submit');

  // Extrayendo inputs del formulario
  const documento = screen.getByTestId('test-documento');
  const nombre = screen.getByTestId('test-nombre');
  const apellido = screen.getByTestId('test-apellido');
  const fecha_nacimiento = screen.getByTestId('test-fecha');
  const direccion =screen.getByTestId('test-direccion');
  const telefono = screen.getByTestId('test-telefono');
  const cargo = screen.getByTestId('test-cargo');
  const password = screen.getByTestId('test-password');
  const confpassword = screen.getByTestId('test-confpassword');

  // Llenando los campos del formulario
  userEvent.type(documento,'12345678');
  userEvent.type(nombre,'Juan');
  userEvent.type(apellido,'González');
  userEvent.type(fecha_nacimiento,'2020-06-16');
  userEvent.type(direccion,'Calle 12');
  userEvent.type(telefono,'654321');
  userEvent.type(cargo,'Administrador');
  userEvent.type(password,'password123');
  userEvent.type(confpassword,'password123');

  // Validando los valores ingresados
  expect(nombre.value).toMatch(regex.fullText);
  expect(apellido.value).toMatch(regex.fullText);
  expect(telefono.value).toMatch(regex.numbers);

  expect(cargo.value).toBeOneOf(['Administrador', 'Médico', 'Personal']);

  // Creando el personal
  userEvent.click(btnSubmit);

  // Validando que no haya errores
  expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
});
