import * as React from 'react';
import { render } from '@testing-library/react';
import {
  FormGroup,
  FormLabel,
  InputText,
  InputTextarea,
  InputMessage,
  InputCheckboxLabel,
  InputCheckbox,
  InputRadioLabel,
  InputRadio,
} from './components';

describe('components/Form', () => {
  test('renders standard text input correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText data-testid="text-input" placeholder="Type here..." />
      </FormGroup>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders textarea correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea data-testid="text-input" rows={4} placeholder="Type here..." />
      </FormGroup>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    const { getByText } = render(
      <FormGroup>
        <FormLabel>Email Address</FormLabel>
        <InputText errors placeholder="Type here..." />
        <InputMessage data-testid="input-error">Please enter an email address.</InputMessage>
      </FormGroup>
    );

    const input = getByText('Please enter an email address.');

    expect(input).toBeInTheDocument();
  });

  test('renders disabled input correctly', () => {
    const { getByTestId } = render(
      <FormGroup>
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText data-testid="disabled-input" disabled placeholder="Can't touch this" />
      </FormGroup>
    );

    const input = getByTestId('disabled-input');
    expect(input).toHaveAttribute('disabled');
  });

  test('renders checkbox input correctly', () => {
    const { getByTestId } = render(
      <InputCheckboxLabel htmlFor="checkbox">
        <InputCheckbox id="checkbox" data-testid="checkbox-input" name="checkbox" />
        Checkbox
      </InputCheckboxLabel>
    );

    const input = getByTestId('checkbox-input');
    expect(input).toBeInTheDocument();
  });

  test('renders radio input correctly', () => {
    const { getByTestId } = render(
      <InputRadioLabel htmlFor="radio">
        <InputRadio id="radio" data-testid="radio-input" name="radio" />
        Radio
      </InputRadioLabel>
    );

    const input = getByTestId('radio-input');
    expect(input).toBeInTheDocument();
  });
});
