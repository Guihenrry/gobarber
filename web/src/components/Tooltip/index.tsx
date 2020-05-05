import React from 'react';

import { Container } from './styles';

interface TolltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TolltipProps> = ({
  children,
  title,
  className = '',
}) => (
  <Container className={className}>
    {children} <span>{title}</span>
  </Container>
);

export default Tooltip;
