import { dispatchFarm } from '@/states';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const useFormAddFarm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateFarm = async () => {
    try {
      setLoading(true);
      if (!name) return setError('Preencha o campo com o nome da fazenda');
      const farm = {
        id: 1,
        user_id: 1,
        name,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      dispatchFarm(farm);
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

  return { name, error, loading, setName, handleCreateFarm, onChange };
};

export const FormAddFarm = () => {
  const { name, error, loading, setName, handleCreateFarm, onChange } = useFormAddFarm();

  return (
    <form className='w-full max-w-sm flex flex-col gap-6 px-6'>
      <div className='grid gap-3'>
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
