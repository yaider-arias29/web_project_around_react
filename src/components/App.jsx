import Header from '../../Header/header.jsx';
import Main from '../../Content/content.jsx';
import Footer from '../../Footer/footer.jsx';
import '../index.css';


function App() {
  return (
    <div className="page">
       <Header />
      <Main />
      <Footer />
      <template className="elements__container" id="elements__container">
        <div className="elements__cards">
          <img src="../images/trash-icon-remove.svg" className="elements__remove" alt="trash-icon" />
          <img className="elements__image"  alt="" />
          <div className="elements__description">
            <p className="elements__title"></p>
            <div className="elements__icon"></div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
