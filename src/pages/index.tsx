import type { GetServerSideProps, NextPage } from 'next';

const IndexPage: NextPage = () => <></>;

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'home',
      permanent: true,
    },
  };
};
