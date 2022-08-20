import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  isStick?: boolean;
}

export function Header({ children, isStick = true }: HeaderProps) {
  return (
    <header
      className={`z-50 w-full flex flex-row justify-center items-center ${
        isStick && 'sticky'
      } top-0 left-0`}>
      <div className='w-full max-w-7xl'>
        <Navbar fluid rounded>
          <Navbar.Brand href='https://flowbite.com/'>
            <Image
              src='https://flowbite.com/docs/images/logo.svg'
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
              width={30}
              height={30}
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              Flowbite
            </span>
          </Navbar.Brand>
          <div className='flex md:order-2'>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt='User settings'
                  rounded={true}
                />
              }>
              <Dropdown.Header>
                <span className='block text-sm'>Bonnie Green</span>
                <span className='block truncate text-sm font-medium'>
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link color='#ff3455' active>Home</Navbar.Link>
            <Navbar.Link>About</Navbar.Link>
            <Navbar.Link>Services</Navbar.Link>
            <Navbar.Link>Pricing</Navbar.Link>
            <Navbar.Link>Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
