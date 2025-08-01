import { Route, Routes } from 'react-router';
import { routes } from './routes';

const App = () => {
  return <Routes>
    {routes.map(route => {
      if(route.children) {
        return <Route path={route.path} element={route.element}>
          {route.children.map(subRoute => (
            <Route index={subRoute.index} path={subRoute.path} element={subRoute.element}/>
          ))}
        </Route>
      }
      return <Route path={route.path} element={route.element} />
    })}
  </Routes>
};

export default App;
