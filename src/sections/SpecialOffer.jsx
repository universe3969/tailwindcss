import {offer} from '../assets/images';
import Button from '../components/Button';
import {arrowRight} from '../assets/icons';

export default function SpecialOffer () {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>

        <h2 className='font-palanquin text-4xl capitalize font-bold lg: max-w-lg '>
          <span className='text-coral-red'> Special
          </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a Shopping Odyssey: Elevate your athletic pursuits with unbeatable deals that span from our premier selection to your ultimate performance. Don't settle for less when you can have unparalleled value—only with us.
        </p>
        <p className='mt-6 lg:max-w-lg info-text '>
          Rediscover the Essence of Sportswear: Immerse yourself in a world where innovation meets savings. From limited-edition releases to everyday essentials, experience incredible value that sets us leagues ahead of the competition.
        </p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button
            label='Shop Now'
            iconUrl={arrowRight}
          />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}