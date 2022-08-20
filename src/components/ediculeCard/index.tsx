import Image from 'next/image';
import { RentCardFacility } from '../rentCardFacility';
import { FaPlus, FaSwimmingPool, FaTv, FaWifi } from 'react-icons/fa';
import { Edicule } from '../../models/edicule';
import { GetFacilityIcon } from '../utitlities';

interface EdiculeCardProps {
  edicule: Edicule;
}

export function EdiculeCard({ edicule }: EdiculeCardProps) {
  return (
    <div className='w-full h-40 flex flex-row items-center p-2 bg-white relative gap-4 rounded-md'>
      <Image
        src={
          'https://images.unsplash.com/photo-1629079448105-35ab3e5152d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80'
        }
        width={140}
        height={140}
        alt='house'
        className='rounded-md'
      />

      <div className='h-full flex flex-col justify-around'>
        <h2 className='font-bold text-xl'>{edicule.name}</h2>
        <span>
          {edicule.address.street}, {edicule.address.number}
        </span>
        <div className='flex flex-row flex-wrap gap-2'>
          {edicule.facilities.map((facility) => (
            <RentCardFacility
              key={facility.name}
              icon={GetFacilityIcon(facility.type)}
            />
          ))}
        </div>
        <span className='text-lg font-bold'>
          {edicule.price}
          <span className='text-sm'>/dia</span>
        </span>
      </div>
    </div>
  );
}
