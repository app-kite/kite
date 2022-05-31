import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { Modal } from './Modal';

type ModalContextValue = {
  open(content: React.ReactNode): void;
  close(): void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef<React.ReactNode>(null);

  const open = useCallback((content: React.ReactNode) => {
    contentRef.current = content;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      close,
      open,
    }),
    [close],
  );

  return (
    <ModalContext.Provider value={value}>
      <Modal onClose={close} isOpen={isOpen}>
        {contentRef.current}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useContext must be used within ModalProvider');
  }

  return context;
};
