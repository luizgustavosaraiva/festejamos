import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  isStick?: boolean;
}

export function Header({ children, isStick }: HeaderProps) {
  return (
    <header
      className={`z-50 w-full flex flex-row justify-center items-center ${
        isStick && 'sticky top-0 left-0'
      }`}>
      <div className='flex flex-row justify-between items-center transition p-10'>
        <div>logo</div>
        <div>search</div>
        <div>user</div>
      </div>
    </header>
  );
}
