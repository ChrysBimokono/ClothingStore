
import { Routes, Route} from 'react-router-dom';
import HomeRoute from './components/routes/home/HomeRoute';
import Navigation from './components/routes/navigation/Navigation';
import Authentication from './components/routes/authentication/authentication';

const Shop = ()=> {
  return <h1> I am the Shop page</h1>
};

const App= () =>{
  return (
    <Routes>
      <Route path='/' element={< Navigation/>}>
        <Route index element={<HomeRoute/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
