import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
// import { DefaultLayout } from "./layouts";
import Login from "./pages/Login"

function App() {
  return (
    <Login></Login>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       {publicRoutes.map((route, index) => {
    //         let Layout = DefaultLayout;
    //         if (route.layout) {
    //           Lgit ayout = route.layout;
    //         } else if (route.layout === null) {
    //           Layout = Fragment;
    //         }
    //         const Page = route.component;
    //         return (
    //           <Route
    //             key={index}
    //             path={route.path}
    //             element={
    //               <Layout>
    //                 <Page />
    //               </Layout>
    //             }
    //           />
    //         );
    //       })}
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
