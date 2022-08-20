import { FaTv } from 'react-icons/fa';
import { FacilityType } from '../models/facility';

export function GetFacilityIcon(type: FacilityType) {
  switch (type) {
    case FacilityType.cableTv:
      return <FaTv className='text-gray-500' />;
  }
}
