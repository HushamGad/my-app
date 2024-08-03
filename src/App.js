

function App() {
  return (
    <>
  <header className="hide-when-mobile">
    <h1>Css First Project</h1>
    <ul className="flex">
      <li className="main-list">
        <a className="main-link" href="#">
          HTML
        </a>
        <ul className="sub-ul">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn in 1n</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a href="#" className="main-link">
          CSS
        </a>
        <ul className="sub-ul">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Css Example</a>
          </li>
          <li className="mini-projects">
            <a href="#">mini projects&nbsp;+</a>
            <ul className="sub-sub-ul">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a href="#" className="main-link">
          JAVASCRIPT
        </a>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="#">Coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-when-mobile">
    <div className="navbar">
      <h1>Css First Project</h1>
      <label htmlFor="menu">
        <i className="fa-solid fa-bars" />
      </label>
    </div>
    <input type="checkbox" id="menu" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="html" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn in 1n</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="css" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Css Example</a>
          </li>
          <label htmlFor="mini" className="mini-projects">
            mini projects <i className="fa-solid fa-plus" />
          </label>
          <input type="checkbox" id="mini" />
          <ul className="sub-sub-div">
            <li>
              <a href="#">Project 1</a>
            </li>
            <li>
              <a href="#">Project 2</a>
            </li>
            <li>
              <a href="#">Project 3</a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JAVASCRIPT
          <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="js" />
        <ul className="sub-div sub-of-js">
          <li>
            <a href="#">Coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    Responsive Drop-down <br />
    Menu Bar <br />
    HTML &amp; CSS only
  </main>
  <footer>
    Designed and developed by Husham jad<span>🧡</span>
  </footer>
</>

  );
}

export default App;
