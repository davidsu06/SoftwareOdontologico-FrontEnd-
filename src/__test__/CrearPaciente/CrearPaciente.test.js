import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import regex from '../regex';

import CrearPaciente from './CrearPaciente';

test('<CrearPaciente /> Creación de un nuevo paciente', () => {
  // Renderizando el componente
  render(<CrearPaciente />);

  // Obteniendo el botón submit
  const btnSubmit = screen.getByTestId('btn-submit');

  // Obteniendo los campos a llenar
  const documento = screen.getByTestId('test-documento');
  const nombres = screen.getByTestId('test-nombres');
  const apellidos = screen.getByTestId('test-apellidos');
  const fecha_nacimiento = screen.getByTestId('test-fecha_nacimiento');
  const direccion = screen.getByTestId('test-direccion');
  const telefono = screen.getByTestId('test-telefono');
  const password = screen.getByTestId('test-password');
  const confpassword = screen.getByTestId('test-confpassword');

  // Llenando los campos del formulario
  userEvent.type(documento, '1010202030');
  userEvent.type(nombres, 'David Andrés');
  userEvent.type(apellidos, 'Soto Uribe');
  userEvent.type(fecha_nacimiento, '2020-06-16');
  userEvent.type(direccion, 'Calle #1');
  userEvent.type(telefono, '5402010');
  userEvent.type(password, 'password123');
  userEvent.type(confpassword, 'password123');

  // Validando valores ingresados
  expect(nombres.value).toMatch(regex.fullText);
  expect(apellidos.value).toMatch(regex.fullText);
  expect(telefono.value).toMatch(regex.numbers);

  // Creando el paciente
  userEvent.click(btnSubmit);

  // Validando el error
  expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
});
