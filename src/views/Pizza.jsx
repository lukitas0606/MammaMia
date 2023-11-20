import { useParams } from 'react-router-dom';
import CardDetail from '../components/CardDetail';

const Pizza = () => {
  const { id } = useParams();

  return (
    <>
      <CardDetail id={id} />
    </>
  );
};

export default Pizza;
