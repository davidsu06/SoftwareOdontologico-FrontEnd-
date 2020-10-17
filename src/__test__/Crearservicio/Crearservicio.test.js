import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Crearservicio from './Crearservicio';

test('Test creación de servicio', () => {
  render(<Crearservicio />);

  //Obtener btn submit
  const btnSubmit = screen.getByTestId('btn-submit');

  //Llenar campos del formulario
  userEvent.type(screen.getByTestId('test-nombreserv'),'Odontologia');
  userEvent.type(screen.getByTestId('test-precio'),'150200');
  userEvent.type(screen.getByTestId('test-cantidadcitas'),'5');

  //Simular evento de dar click al llenar el formulario
  userEvent.click(btnSubmit);
  
  //La prueba falla al encontrar el mensaje de error por ingresar un campo invalido
  expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();

});

test('Test comprobar campos bien escritos', () => {
  render(<Crearservicio />);

  expect(screen.debug(screen.getAllByText('Nombre del Servicio')));
  expect(screen.debug(screen.getAllByText('Precio Total del Servicio')));
  expect(screen.debug(screen.getAllByText('Cantidad Citas del Servicio')));
});
