import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer>
      <span>esse é meu footer</span>
    </footer>
  );
}
