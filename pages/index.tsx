import type { NextPage } from 'next'
import Image from 'next/image'

import About from '../utils/img/about.png'
import Saly from '../utils/img/Saly-3.png'
import Saly5 from '../utils/img/Saly-5.png'
import Saly6 from '../utils/img/Saly-6.png'
import Saly22 from '../utils/img/Saly-22.png'
import { ShoppingBagIcon, ShoppingCartIcon, TicketIcon, ReceiptTaxIcon, NewspaperIcon, LightningBoltIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div className='relative'>
      <section id='hero' className='md:h-[65vh] bg-yellow/50 pb-10 md:pb-0'>
        <div className='container flex flex-col justify-center mx-auto md:flex-row'>
          <div className='flex md:w-1/2'>
            <Image
              src={Saly}
              alt='saly'
              className='object-left-bottom'
            />
          </div>
          <div className='flex flex-col mt-10 space-y-12 justify-center pl-2 max-w-lg md:mt-0 md:w-1/2'>
            <h1 className='text-5xl text-black font-bold text-center md:text-left'>We scratch, build and play together</h1>
            <p className='text-gray text-base text-center md:text-left'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <div className='flex justify-center md:justify-start'>
              <a href='#' className='text-pink py-2 px-4 text-sm border-pink border-2'>Contact us</a>
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <div className='container flex flex-col-reverse py-10 mx-auto md:flex-row'>
          <div className='flex flex-col text-black text-base justify-center p-5 space-y-6 md:p-0 md:w-1/2'>
            <div className='shadow-lg rounded-2xl hover:text-white hover:bg-blue'>
              <p className='px-8 py-5'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p> 
            </div>
            <div className='shadow-lg rounded-2xl hover:text-white hover:bg-blue'>
              <p className='px-8 py-5'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p> 
            </div>
            <div className='shadow-lg rounded-2xl hover:text-white hover:bg-blue'> 
              <p className='px-8 py-5'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p> 
            </div>
          </div>
          <div className='flex justify-center md:w-1/2'>
            <Image
              src={About}
              alt='about'
            />
          </div>
        </div>
      </section>
      <section id='simplify' className='bg-green/50'>
        <div className='container mx-auto flex flex-col items-center text-black text-2xl justify-between py-12 px-10 space-y-10 font-semibold md:text-3xl md:px-0 md:space-y-0 md:flex-row'>
          <h2 className='max-w-sm text-center md:text-left'>
            Simplify your online shipping for free this month!
          </h2>
          <h2 className='max-w-sm text-center md:text-left'>
            Grow your business with better Shipping organizations
          </h2>
        </div>
      </section>
      <section id='feature' className='text-base text-black'>
        <div className='container flex flex-col py-10 mx-auto md:flex-row'>
          <div className='flex flex-col space-y-10 md:space-y-0 md:space-x-5 md:flex-row'>
            <div className='-mt-[200px] md:hidden'>
              <Image
                src={Saly5}
                alt='about'
                className='object-bottom -z-0'
              />
            </div>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <ShoppingBagIcon className='w-6 text-lightPink'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
            <div className='hidden md:block md:w-1/2 md:!-mt-[200px] lg:!-mt-[350px] xl:!-mt-[450px]'>
              <Image
                src={Saly5}
                alt='about'
              />
            </div>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <ShoppingCartIcon className='w-6 text-purple/50'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
          </div>
        </div>
        <div className='container flex flex-col py-10 -mt-14 mx-auto md:flex-row'>
          <div className='flex flex-col space-y-10 md:space-x-5 md:space-y-0 md:flex-row'>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <TicketIcon className='w-6 text-green/50'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <LightningBoltIcon className='w-6 text-pink'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <ReceiptTaxIcon className='w-6 text-lightBlue'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
            <div className='md:w-1/4 space-y-6'>
              <div className='flex justify-center'>
                <NewspaperIcon className='w-6 text-darkPink'/>
              </div>
              <p className='text-center'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
          </div>
        </div>    
      </section>
      <section id='build'>
        <div className='container mx-auto flex flex-col items-center justify-center my-10 md:flex-row'>
          <div className='flex md:w-1/2'>
            <Image
              src={Saly22}
              alt='saly22'
            />
          </div>
          <div className='flex flex-col space-y-6 max-w-md text-center md:text-left md:w-1/2'>
            <h3 className='text-2xl text-black'>We scratch, build and play together</h3>
            <h2 className='text-5xl text-black font-bold'>We scratch, build and play together</h2>
            <p className='text-base text-gray'>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </p>
          </div>
        </div>
      </section>
      <section id='subcribe' className='bg-red/50'>
        <div className='container mx-auto flex flex-col items-center text-center justify-center my-10 md:flex-row'>
          <div className='flex flex-col space-y-10 py-10 mb-[150px] md:mb-0 md:py-10 md:w-1/2 xl:py-0'>
            <h3 className='text-2xl  text-[#4F4F4F] font-semibold  md:text-3xl xl:text-4xl'>
              Grow your bussiness with better shipping organizations
            </h3>
            <div className='space-x-4'>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Write your mail address' 
                className='focus:outline-none rounded-xl py-2 px-4 text-base w-2/5'
              />
              <button 
                className='text-white text-base bg-pink rounded-xl py-2 px-4'>
                  Subscribe
              </button>
            </div>
          </div>
          <div className='flex -mt-[210px] -mb-[150px] md:w-1/2'>
            <Image
              src={Saly6}
              alt='saly22'
            />
          </div>
        </div>
      </section>
      <section id='solution'>
        <div className='container mx-auto flex flex-col items-center justify-start my-14 md:flex-row'>
          <div className='flex flex-col space-y-20 text-black'>
            <h3 className='text-4xl mt-[100px] text-center font-semibold max-w-xl md:text-5xl md:mt-0 md:text-left'>
              The best design for your studio website
            </h3>
            <div className='flex flex-col space-y-10 px-6 md:px-0 md:space-y-0 md:space-x-20 md:flex-row'>
              <div className='shadow-2xl rounded-lg'>
                <div className='px-10 py-10 space-y-10'>
                  <h3 className='text-4xl'>
                    Audit
                  </h3>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                    Ac aliquam ac volutpat, viverra magna risus. 
                  </p>
                </div>
                <div className='bg-[#FFD281] rounded-b-lg px-10 py-5 text-xl'>
                  Experienced team
                </div>
              </div>
              <div className='shadow-2xl rounded-lg'>
                <div className='px-10 py-10 space-y-10'>
                  <h3 className='text-4xl'>
                    Teamwork
                  </h3>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                    Ac aliquam ac volutpat, viverra magna risus. 
                  </p>
                </div>
                <div className='bg-green/50 rounded-b-lg px-10 py-5 text-xl'>
                  Experienced team
                </div>
              </div>
              <div className='shadow-2xl rounded-lg'>
                <div className='px-10 py-10 space-y-10'>
                  <h3 className='text-4xl'>
                    Create
                  </h3>
                  <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                    Ac aliquam ac volutpat, viverra magna risus. 
                  </p>
                </div>
                <div className='bg-[#FFA3AB] rounded-b-lg px-10 py-5 text-xl'>
                  Experienced team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='footer' className='bg-green/50'>
        <div className='container mx-auto flex flex-col py-10 space-y-10 md:space-y-0 md:space-x-6 md:flex-row'>
          <div className='flex flex-col md:w-1/2 space-y-10'>
            <div className='text-purple font-bold text-xl'>
              eGENCY
            </div>
            <p className='text-black max-w-md text-base'>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </p>
          </div>
          <div className='flex flex-col md:w-1/2 md:flex-row'>
            <div className='w-1/3 space-y-10 pb-10 md:pb-0'>
              <div className='text-black text-lg'>
                Pages
              </div>
              <div className='text-black text-base'>
                <p>Template</p>
                <p>Price</p>
                <p>Help</p>
                <p>Contect</p>
              </div>
            </div>
            <div className='w-1/3 space-y-10 pb-10 md:pb-0'>
              <div className='text-black text-lg'>
                Demos
              </div>
              <div className='text-black text-base'>
                <p>Dark theme</p>
                <p>Light theme</p>
                <p>Classic theme</p>
              </div>
            </div>
            <div className='w-1/3 space-y-10 pb-10 md:pb-0'>
              <div className='text-black text-lg'>
                Resources
              </div>
              <div className='text-black text-base'>
                <p>Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home