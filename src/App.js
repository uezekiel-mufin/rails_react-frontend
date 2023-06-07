import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/slices/greetingsSlice';

function App() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  console.log(greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">{error}</div>;
  }

  return <div className="App">{greeting.greeting}</div>;
}

export default App;
