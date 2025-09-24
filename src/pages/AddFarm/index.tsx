import { FormAddFarm } from '@/components';
import BannerIcon from '../../assets/icons/banner-un-draw.svg';

export const AddFarm = () => {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center gap-12 px-4'>
      <img src={BannerIcon} alt='Banner' className='w-1/2 max-w-[448px]' />

      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-medium text-primary-foreground text-center'>
          Você ainda não cadastrou nenhuma fazenda?
        </h1>
        <p className='text-xl font-medium text-primary-foreground text-center'>
          Cadastre sua fazenda e facilite sua rotina
        </p>
      </div>

      <FormAddFarm />
    </section>
  );
};
