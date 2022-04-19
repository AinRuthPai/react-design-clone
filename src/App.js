import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.png";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img123 from "./img/123.jpg";

function App() {
  return (
    <main>
      <Header />
      <section className='main_section'>
        <article className='business_article'>
          <h1>BUSINESS STRATEGY</h1>
          <p>Leverage agile frameworks to</p>
          <p>
            provide <strong>a robust synopsis</strong> for
          </p>
          <p>high level overviews</p>
          <span>Leverage agile frameworks to provide a robust synopsis for high level overwiews</span>
        </article>
        <article className='services_article'>
          <h1>
            Consulting <strong>Services</strong>
          </h1>
          <p>Our management consulting services focus on our client's most</p>
          <div className='services_wrapper'>
            <div className='wrapper_01'>
              <div>
                <p>1.</p>
                <span>info</span>
              </div>
              <div>
                <p>2.</p>
                <span>info</span>
              </div>
            </div>
            <div className='wrapper_02'>
              <img src={img123} />
              <p>HOW WE WORK</p>
              <span>info</span>
            </div>
            <div className='wrapper_03'>
              <div>
                <p>3.</p>
                <span>info</span>
              </div>
              <div>
                <p>4.</p>
                <span>info</span>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='img_section'>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
      </section>
      <section className='team_section'>
        <h1>Team</h1>
        <div className='team_wrapper'>
          <div>
            <img src='#' />
            <p>1</p>
            <span>1</span>
          </div>
          <div>
            <img src='#' />
            <p>2</p>
            <span>2</span>
          </div>
          <div>
            <img src='#' />
            <p>3</p>
            <span>3</span>
          </div>
          <div>
            <img src='#' />
            <p>4</p>
            <span>4</span>
          </div>
        </div>
      </section>
      <div className='team_text'>
        <p>Leverage agile frameworks to</p>
        <p>provide a robust synopsis for</p>
        <p>high level overviews</p>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overwiews</p>
      </div>
      <Footer />
    </main>
  );
}

export default App;
