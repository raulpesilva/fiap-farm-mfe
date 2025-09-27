import { createFarm } from '@/services';
import { dispatchFarm } from '@/states';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const useFormAddFarm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const isCreateFarm = useMatch('/cadastro-fazenda');

  const handleCreateFarm = async () => {
    try {
      if (!name) return setError('Preencha o campo com o nome da fazenda');
      setLoading(true);
      const farm = await createFarm({ name });
      dispatchFarm(farm);
      if (isCreateFarm) window.dispatchEvent(new CustomEvent('goStocks'));
    } catch (error: any) {
      console.log('Error creating farm:', error);
      setError('Farm in failed: ' + error?.message);
      setLoading(false);
    }
  };

  const onChange = (setValue: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setValue(value);
    setError('');
  };

  return { name, error, loading, setName, handleCreateFarm, onChange };
};

export const FormAddFarm = () => {
  const { name, error, loading, setName, handleCreateFarm, onChange } = useFormAddFarm();

  return (
    <form className='w-full max-w-sm flex flex-col gap-6 px-6'>
      <div className='grid gap-2'>
        <Label htmlFor='farm'>Nome da fazenda</Label>
        <Input
          id='farm'
          type='farm'
          placeholder='Digite o nome da sua fazenda'
          onChange={(e) => onChange(setName, e.target.value)}
          value={name}
        />
      </div>

      {error && <p className='text-sm text-error text-center'>{error}</p>}

      <Button
        type='submit'
        className='w-full cursor-pointer duration-300'
        onClick={(e) => {
          e.preventDefault();
          handleCreateFarm();
        }}
        disabled={loading}
      >
        {loading ? <LoaderCircle className='animate-spin' /> : 'Cadastrar fazenda'}
      </Button>
    </form>
  );
};
