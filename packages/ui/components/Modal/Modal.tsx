import React from 'react';
import styled from 'styled-components';
import { config, useTransition, animated } from 'react-spring';
import CloseIcon from '../../assets/icons/close.svg';

type Props = {
  isOpen?: boolean;
  onClose(): void;
  children?: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: 'translateY(15px)',
      background: 'rgba(0, 0, 0, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
      background: 'rgba(0, 0, 0, 0.15)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(15px)',
      background: 'rgba(0, 0, 0, 0)',
    },
    config: config.stiff,
  });

  return transition((style, isOpen) => {
    return (
      isOpen && (
        <>
          <AnimatedBackdrop style={{ backgroundColor: style.background }} />
          <Root>
            <AnimatedWindow
              style={{
                opacity: style.opacity,
                transform: style.transform,
              }}
            >
              <CloseButton onClick={onClose} width={24} height={24} />
              {children}
            </AnimatedWindow>
          </Root>
        </>
      )
    );
  });
};

const Root = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
`;

const AnimatedBackdrop = animated(Backdrop);

const Window = styled.div`
  position: relative;
  width: 546px;
  background: #ffffff;
  border: 1px solid rgba(61, 61, 61, 0.5);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const AnimatedWindow = animated(Window);

const CloseButton = styled(CloseIcon)`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;

Modal.Header = styled.header`
  padding: 17px 20px;
  font-weight: bold;
`;

Modal.Content = styled.div`
  padding: 5px 20px 17px;
`;

Modal.Footer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 5px;
  padding: 5px 20px 17px;
`;
