import { NextPage } from 'next';
import { ReactNode } from 'react';
import { DefaultLayout } from '../components/layouts/defaultLayout';

interface HomeProps {
  children?: ReactNode;
}

const Home: NextPage = ({ children }: HomeProps) => {
  return (
    <DefaultLayout>
      <span>oi</span>
    </DefaultLayout>
  );
};

export default Home;
