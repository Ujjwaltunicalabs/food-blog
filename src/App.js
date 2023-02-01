import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage';
import BasicLayout from './BasicLayout';
import SingleBlog from './Components/SingleBlog.js';
import About_us from './Components/About_us/About_us';

function App() {
  const routesArray=[{
    path:"/",
    component:<Homepage/>
  },
  {
    path:"/about",
    component:<About_us/>
  },
  {
    path: "/blog/:id",
      component:<SingleBlog/>
  }
];
  return (
   <>
   <Routes>
    {routesArray.map(({path,component},index)=>{
      return(
        <Route
        key={index}
        path={path}
        exact
        element={
          <BasicLayout>
            {component}
          </BasicLayout>
        }
      />
      )
    })}
    {/* <Route exact path='*' element ={<Error/>} /> */}

   </Routes>
    
   </>
  );
}

export default App;
