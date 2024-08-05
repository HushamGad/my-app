import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContaint from "../comp/mainContaint";
import {Helmet} from 'react-helmet-async';
const Home = () => {
    return (
<>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="with us you will learn how code websites"/>
        <style type="text/css">{`
        main{
            color: red;
        }
    `}</style>
      </Helmet>
  <Header/>
  <MainContaint pageNmae="Home Page"/>
  <Footer/>
</>
    );
}

export default Home;
