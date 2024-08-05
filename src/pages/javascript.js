import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContaint from "../comp/mainContaint";
import {Helmet} from 'react-helmet-async';
const Javascript = () => {
    return (
<>
      <Helmet>
        <title>Javascript Page</title>
        <meta name="description" content="with us you will learn how code with JS"/>
      </Helmet>
  <Header/>
  <MainContaint pageNmae="JAVASCRIPT Page"/>
  <Footer/>
</>
    );
}

export default Javascript;
