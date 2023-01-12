import React, { useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {
  handler: () => void;
  active: boolean;
}

const Backdrop: React.FC<Props> = ({ handler, active }) => {
  const [startShow, setStartShow] = useState<boolean>(false);

  useEffect(() => {
    if (!active) {
      setStartShow(false);
      return;
    }

    setStartShow(true);
  }, [active]);

  if (!active) return null;

  return <Container active={startShow} onClick={handler} />;
};

export default Backdrop;
