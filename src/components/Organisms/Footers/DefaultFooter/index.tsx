import React from 'react';
import { Section } from '@/components/Atoms/Layouts/Templates/styles';
import { Container, Content } from './styles';

const DefaultFooter: React.FC = () => {
  return (
    <Section background="#000" >
      <Container >
        <Content >
          <p>
            © Todos os direitos reservados Mistérios do Rosário{' '}
            {new Date().getFullYear()} 
            {/* © Charles Lelis Braga */}
          </p>
        </Content>
      </Container>
    </Section>
  );
};

export default DefaultFooter;
