// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import { Button as PaperButton, ButtonProps as PaperButtonProps } from 'react-native-paper';

export type ButtonProps = PaperButtonProps & {
  variant?: 'primary' | 'secondary';
};

const StyledButton = styled(PaperButton)<{ variant?: 'primary' | 'secondary' }>`
  border-radius: 24px;
  margin-vertical: 8px;
  ${(props: { variant?: 'primary' | 'secondary' }) =>
    props.variant === 'primary'
      ? 'background-color: #2d1e2f; color: #fff;'
      : 'background-color: #fff; color: #2d1e2f; border: 1px solid #2d1e2f;'}
`;

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => (
  <StyledButton mode={variant === 'primary' ? 'contained' : 'outlined'} variant={variant} {...props} />
);