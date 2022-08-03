import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type?: JSX.IntrinsicElements['button']['type'];
}

const IconButton = ({ children, type = 'button' }: Props) => <button type={type}>{children}</button>;

export default IconButton;
