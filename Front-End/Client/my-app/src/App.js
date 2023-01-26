import "./App.css";
import mainImg from "./pictures/main.png";
function App() {
  return (
    <main>
      <header>
        <nav>
          <div class="navbar1">
            <a href="" className="logo">
              <img
                src="https://i.pinimg.com/736x/86/b1/e9/86b1e9eb251904fe9126e72e0f0f19eb.jpg"
                alt="logo"
              />
            </a>
            <a href=""> Etat Civil </a>
            <a href=""> Statistique </a>
            <a href=""> Plan Du Site</a>
          </div>
          <div class="navbar2">
            <button class="myButton1"> Connexion </button>
            <button class="myButton2"> S'inscrire </button>
          </div>
        </nav>
      </header>
      <div class="Entries">
        <div class="entry1">
          <h1>
            {" "}
            Ministère de l'Intérieur <br /> des Collectivités <br />
            Locales et de <br />
            l'Aménagement du <br /> Territoire{" "}
          </h1>
          <h2> Service National de l'Etat Civil </h2>
          <button class="myButton2"> Actualités </button>
          <button class="myButton1"> Nous Contacter </button>
        </div>
        <div class="entry2">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Emblem_of_Algeria_%281971-1976%29.svg/2048px-Emblem_of_Algeria_%281971-1976%29.svg.png"
            alt="main"
          />
        </div>
      </div>
      <hr />
      <footer>
        <div class="copyright">
          {" "}
          <ul>
            <li>
              {" "}
              <a href="" className="logo">
                <img
                  src="https://i.pinimg.com/736x/86/b1/e9/86b1e9eb251904fe9126e72e0f0f19eb.jpg"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              {" "}
              <p>
                {" "}
                2023 © Republique <br />
                Algerienne 
                Tous les <br /> droits sont 
                reservés
              </p>{" "}
            </li>
          </ul>
        </div>
        <div class="socials">
          {" "}
          <ul>
            <li>
              {" "}
              <a href="https://www.facebook.com/interieur.dz"> Facebook </a>
            </li>
            <li>
              {" "}
              <a href="https://www.youtube.com/channel/UCPVOlufr0jn4CF1MVLcm-QQ">
                {" "}
                Youtube{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://twitter.com/interieur_dz"> Twitter </a>
            </li>
          </ul>
        </div>
        <div class="links">
          <ul>
            <li>
              {" "}
              <a href=""> Etat Civil</a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Nous Contacter </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Sur Nous </a>{" "}
            </li>
          </ul>
        </div>
        <div class="pc">
          <ul>
            <li>
              {" "}
              <a href=""> Politique De Confidenlité </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Conditions De Service </a>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default App;
