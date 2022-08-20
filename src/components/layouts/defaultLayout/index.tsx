import { ReactNode } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';

interface DefaultLayoutProps {
  children?: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='max-w-7xl'>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
