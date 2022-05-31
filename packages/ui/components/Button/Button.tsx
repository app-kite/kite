import React from 'react';
import styled from 'styled-components';

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
}

type ButtonProps = {
  variant: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => <Root {...rest}>{children}</Root>;

const Root = styled.button<ButtonProps>`
  width: fit-content;
  background: ${p => {
    switch (p.variant) {
      case ButtonVariant.DEFAULT:
        return 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)';
      case ButtonVariant.PRIMARY:
        return 'linear-gradient(180deg, #7DB1FF 0%, #4E90F3 100%)';
    }
  }};
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 4px 34px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${p => {
    switch (p.variant) {
      case ButtonVariant.PRIMARY:
        return '#fff';
      case ButtonVariant.DEFAULT:
        return p.theme.textColor;
    }
  }};

  &:hover {
    background: ${p => {
      switch (p.variant) {
        case ButtonVariant.DEFAULT:
          return 'linear-gradient(180deg, #EEEEEE 0%, #E7E7E7 100%)';
        case ButtonVariant.PRIMARY:
          return 'linear-gradient(180deg, #779ED9 0%, #4E7BBE 100%)';
      }
    }};
  }

  &:active {
    background: ${p => {
      switch (p.variant) {
        case ButtonVariant.DEFAULT:
          return '#DFDFDF';
        case ButtonVariant.PRIMARY:
          return 'linear-gradient(180deg, #617DA6 0%, #426BA8 100%)';
      }
    }};
  }

  &:disabled {
    background: ${p => {
      switch (p.variant) {
        case ButtonVariant.DEFAULT:
          return 'linear-gradient(180deg, #BDBDBD 0%, #9F9F9F 100%)';
        case ButtonVariant.PRIMARY:
          return 'linear-gradient(180deg, #7C8A9E 0%, #4B658C 100%)';
      }
    }};
    color: #fff;
  }
`;
