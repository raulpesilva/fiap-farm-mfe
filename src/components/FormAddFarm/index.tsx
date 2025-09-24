import { dispatchHasFarm } from '@/states';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const useFormAddFarm = () => {
  const [farm, setFarm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateFarm = async () => {
    try {
      setLoading(true);
      if (!farm) return setError('Preencha o campo com o nome da fazenda');
      dispatchHasFarm(true);
      window.dispatchEvent(new CustomEvent('goStocks'));
    } catch (error: any) {
      setError('Farm in failed: ' + error.message);
      setLoading(false);
      console.log('Error creating farm:', error);
    }
  };

  const onChange = (setValue: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setValue(value);
    setError('');
  };

  return { farm, error, loading, setFarm, handleCreateFarm, onChange };
};

export const FormAddFarm = () => {
  const { farm, error, loading, setFarm, handleCreateFarm, onChange } = useFormAddFarm();

  return (
    <form className='w-full max-w-sm flex flex-col gap-6 px-6'>
      <div className='grid gap-3'>
        <Label htmlFor='farm'>Nome da fazenda</Label>
        <Input
          id='farm'
          type='farm'
          placeholder='Digite o nome da sua fazenda'
          onChange={(e) => onChange(setFarm, e.target.value)}
          value={farm}
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
