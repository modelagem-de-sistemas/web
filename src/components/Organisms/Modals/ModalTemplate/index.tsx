import Backdrop from '@/components/Atoms/Structure/Backdrop';
import React from 'react';
import { CgClose } from 'react-icons/cg';

import { CloseButton, Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  title: string;
}

const ModalTemplate: React.FC<Props> = ({ children, open, handleClose, title }) => {
  if (!open) return null;

  return (
      <Container>
        <Backdrop active={open} handler={handleClose} />

        <Content>
          <header>
            <h3>{title}</h3>
            <CloseButton aria-label="Fechar Menu" onClick={handleClose}>
              <CgClose />
            </CloseButton>
          </header>
          <main>{children}</main>
        </Content>
      </Container>
  );
};

export default ModalTemplate;
