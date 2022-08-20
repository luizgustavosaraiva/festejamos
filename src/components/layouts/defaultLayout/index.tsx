import Head from 'next/head';
import { ReactNode } from 'react';
import { DEFAULT_TITLE } from '../../../utils/constants';
import { Footer } from '../../footer';
import { Header } from '../../header';

interface DefaultLayoutProps {
  children?: ReactNode;
  header?: ReactNode;
  pageTitle: string;
}

export function DefaultLayout({
  children,
  header,
  pageTitle,
}: DefaultLayoutProps) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Head>
        <title>
          {DEFAULT_TITLE} | {pageTitle}
        </title>
      </Head>
      {header || <Header />}
      <main>
        <div className='w-full p-8 flex flex-col gap-9 justify-start items-center flex-1'>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
