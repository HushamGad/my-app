import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContaint from "../comp/mainContaint";
import {Helmet} from 'react-helmet-async';
const Html = () => {
    return (
<>
      <Helmet>
        <title>Html Page</title>
        <meta name="description" content="with us you will learn how code with Html"/>
      </Helmet>
  <Header/>
  <MainContaint pageNmae="HTML Page"/>
  <Footer/>
</>
    );
}

export default Html;
