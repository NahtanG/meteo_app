import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import RainSvg from "./components/RainSvg";
import ColdSvg from "./components/ColdSvg";

export default function Home() {
  return (
    <body>
      <Searchbar />
      <section class="current-weather">
        <div class="container">
          <div class="row">
            <h1 class="col temp-title temperature" id="current-temperature">
              4°
              <ColdSvg />
            </h1>
            <div class="col todays-info">
              <p id="current-time">11:00</p>
              <h2 id="current-day">Today</h2>
              <p id="weather-type">
                Rain <RainSvg />
              </p>
            </div>
            <div class="col d-flex align-items-center side-info">
              <ul>
                <li>
                  Humidity: 25 %<span id="humidity"></span>
                </li>
                <li>
                  Wind: 17 km/h<span id="wind"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <Footer />
    </body>
  );
}
