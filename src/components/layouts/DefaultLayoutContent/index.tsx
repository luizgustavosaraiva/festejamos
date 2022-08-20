import { ReactNode } from 'react';

interface DefaultLayoutContectProps {
  children: ReactNode;
}

export function DefaultLayoutContent({ children }: DefaultLayoutContectProps) {
  return (
    <>
      <h1>DefaultLayoutContent</h1>
      {children}
    </>
  );
}
