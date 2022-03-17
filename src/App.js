import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state./index'

function App() {

  // Returns state inside the 'store'
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const AC = bindActionCreators(actionCreators, dispatch)
  

  return (
    <div className="App">
      react redux
    </div>
  );
}

export default App;
