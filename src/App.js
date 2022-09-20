
import { Routes, Route} from 'react-router-dom';
import HomeRoute from './components/routes/home/HomeRoute';
import Navigation from './components/routes/navigation/Navigation';
import SignIn from './components/routes/sign-in/SignIn';

const Shop = ()=> {
  return <h1> I am the Shop page</h1>
};

const App= () =>{
  return (
    <Routes>
      <Route path='/' element={< Navigation/>}>
        <Route index element={<HomeRoute/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
