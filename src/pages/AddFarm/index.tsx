import { FormAddFarm, Icon } from '@/components';

export const AddFarm = () => {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center gap-12 px-4'>
      <Icon type='farm' className='w-3/4 max-w-[448px] h-fit' />

      <div className='flex flex-col gap-2'>
        <h1 className='text-xl md:text-2xl font-medium text-primary-foreground text-center'>
          Você ainda não cadastrou nenhuma fazenda?
        </h1>
        <p className='text-base md:text-xl font-medium text-primary-foreground text-center'>
          Cadastre sua fazenda e facilite sua rotina
        </p>
      </div>

      <FormAddFarm />
    </section>
  );
};
