import './App.css';
import { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { Layout } from 'antd';
const HomePage = lazy(() => import('./page/home'));

class App extends Component{

  routes = [

    {
      path: '/',
      exact: true,
      main: () => <HomePage />,
    },

  ]

  render() {
  return(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>

    
            <Layout style={{ minHeight: '100vh', height:'fit-content', maxWidth:'100vw', overflowX:'hidden' }}>
              <>
                <Routes>
                  {this.routes.map((item, index) => (
                    <Route key={index} path={item.path} exact={item.exact} element={<item.main />} />
                  ))}
                </Routes>
         
              </>
            </Layout>
            
          </Suspense>
      </Router>
    );
  }
}
  
export default App;
