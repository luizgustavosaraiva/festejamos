import { ReactNode } from 'react';
import { IconType } from '../../../custom';

type RentCardFacilityProps = {
  description?: string;
  icon?: ReactNode;
};

export function RentCardFacility({ description, icon }: RentCardFacilityProps) {
  return (
    <div className='flex flex-row items-center w-fit h-6 bg-gray-100 gap-2 p-2 rounded-md'>
      <div className='flex justify-center items-center'>{icon}</div>
      {description && <span className='text-xs text-gray-500'>{description}</span>}
    </div>
  );
}
