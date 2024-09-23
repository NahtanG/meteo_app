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
        <h1
          class="col d-flex justify-content-center align-items-center city-title"
          id="searched-city"
        >
          Bristol
        </h1>
      </div>
    </section>
  );
};

export default Searchbar;
