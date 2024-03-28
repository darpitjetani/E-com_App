import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Layout = ({ children, title, description, keywords, author }) => {
  const [auth] = useAuth();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {/* {auth?.user?.role !== 1 ? (
        <>
          <Header />
        </>
      ) : (
        ""
      )} */}
          <Header /> 
          
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;

// import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// // import Layout from './Layout';

// const Layout = ({ children }) => {
//     return (
//         <div>
//             <Header />
//             <main style={{ minHeight: "80vh"}}>{children}</main>
//             <Footer />
//         </div>
//     )
// }

// export default Layout
