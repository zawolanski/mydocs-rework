import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const FAB = ({ children }: Props) => <div>{children}</div>;

export default FAB;
