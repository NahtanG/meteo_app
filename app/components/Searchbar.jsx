import Link from "next/link";

const Searchbar = () => {
  return (
    <section class="container">
      <div class="row">
        <form class="col" id="search-form">
          <input
            type="text"
            id="search-input"
            aria-describedby="searchCity"
            placeholder="Ville"
            class="search-form"
            autocomplete="off"
          />
          <button type="submit">Rechercher</button>
        </form>
        <h1 class="city-title" id="searched-city">
          San Francisco
          <div class="dropdown">
            <button class="detailsbtn">
              <Link href="/villes/SanFransisco.js">Détails</Link>
            </button>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Searchbar;
