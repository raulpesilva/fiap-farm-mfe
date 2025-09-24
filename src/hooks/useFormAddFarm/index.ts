import { dispatchHasFarm } from '@/states';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormAddFarm = () => {
  const navigate = useNavigate();
  const [farm, setFarm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateFarm = async () => {
    try {
      setLoading(true);
      if (!farm) return setError('Preencha o campo com o nome da fazenda');
      // const userFarm = await createFarm(auth, farm);
      // if (userFarm) dispatchHasFarm(true);
      dispatchHasFarm(true);
      navigate('/estoques');
    } catch (error: any) {
      console.log('Error creating farm:', error);
      setError('Farm in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (setValue: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setValue(value);
    setError('');
  };

  return {
    farm,
    error,
    loading,
    setFarm,
    handleCreateFarm,
    onChange,
  };
};
