import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { SearchRepositories } = useActions();
  // const { data, error, loading } = useSelector(
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  // console.log(state);

  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div>{name}</div>)}
    </div>
  );
};
export default RepositoriesList;
