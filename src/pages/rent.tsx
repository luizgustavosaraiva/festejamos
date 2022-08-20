import { NextPage } from 'next';
import { ReactNode } from 'react';
import { DefaultLayout } from '../components/layouts/defaultLayout';
import { EdiculeCard } from '../components/ediculeCard';
import { Edicule } from '../models/edicule';
import { FacilityType } from '../models/facility';

interface RentProps {
  children?: ReactNode;
}

const edicules: Array<Edicule> = [
  {
    id: 1,
    name: 'Edícula do Zé',
    price: 199,
    facilities: [
      { name: 'Tv a cabo', quantity: 2, type: FacilityType.cableTv },
    ],
    images: [{ src: 'https://enviou.com.br', default: true }],
    address: {
      street: 'Rua dos fulanos',
      number: 346,
      city: 'Bebedouro',
      country: 'Brasil',
      province: 'Jd de Lúcia',
      zipCode: '14711016',
      location: {
        latitude: 123,
        longitude: 123,
      },
    },
  },
];
const Rent: NextPage = ({ children }: RentProps) => {
  return (
    <DefaultLayout pageTitle='Alugar'>
      <main className='flex w-full justify-center items-center'>
        <div className='flex w-full max-w-7xl justify-between items-center'>
          <section className='w-1/6'>
            <div className='bg-amber-100'>filtro</div>
          </section>
          <section className='w-2/6'>
            <div className='flex flex-col gap-4 max-h-screen overflow-y-scroll'>
              {edicules.map((edicule) => (
                <EdiculeCard key={edicule.id} edicule={edicule} />
              ))}
            </div>
          </section>
          <section className='w-3/6'>
            <div className='bg-cyan-200'>localização</div>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Rent;
