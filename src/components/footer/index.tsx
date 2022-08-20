import { Footer as FlowBiteFooter } from 'flowbite-react';
import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <div className='w-full mx-auto my-0 flex flex-col items-center'>
      <div className='w-full flex flex-1 flex-row justify-center items-center max-w-7xl'>
        <FlowBiteFooter container={true}>
          <div className='w-full'>
            <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
              <div>
                <FlowBiteFooter.Brand
                  href='https://flowbite.com'
                  src='https://flowbite.com/docs/images/logo.svg'
                  alt='Flowbite Logo'
                  name='Flowbite'
                />
              </div>
              <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                  <FlowBiteFooter.Title title='about' />
                  <FlowBiteFooter.LinkGroup col={true}>
                    <FlowBiteFooter.Link href='#'>Flowbite</FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href='#'>
                      Tailwind CSS
                    </FlowBiteFooter.Link>
                  </FlowBiteFooter.LinkGroup>
                </div>
                <div>
                  <FlowBiteFooter.Title title='Follow us' />
                  <FlowBiteFooter.LinkGroup col={true}>
                    <FlowBiteFooter.Link href='#'>Github</FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href='#'>Discord</FlowBiteFooter.Link>
                  </FlowBiteFooter.LinkGroup>
                </div>
                <div>
                  <FlowBiteFooter.Title title='Legal' />
                  <FlowBiteFooter.LinkGroup col={true}>
                    <FlowBiteFooter.Link href='#'>
                      Privacy Policy
                    </FlowBiteFooter.Link>
                    <FlowBiteFooter.Link href='#'>
                      Terms & Conditions
                    </FlowBiteFooter.Link>
                  </FlowBiteFooter.LinkGroup>
                </div>
              </div>
            </div>
            <FlowBiteFooter.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
              <FlowBiteFooter.Copyright href='#' by='Flowbite™' year={2022} />
              <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                {/* <FlowBiteFooter.Icon
          href="#"
          icon={BsFacebook}
        />
        <FlowBiteFooter.Icon
          href="#"
          icon={BsInstagram}
        />
        <FlowBiteFooter.Icon
          href="#"
          icon={BsTwitter}
        />
        <FlowBiteFooter.Icon
          href="#"
          icon={BsGithub}
        />
        <FlowBiteFooter.Icon
          href="#"
          icon={BsDribbble}
        /> */}
              </div>
            </div>
          </div>
        </FlowBiteFooter>
      </div>
    </div>
  );
}
