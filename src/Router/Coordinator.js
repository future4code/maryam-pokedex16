export const goToDetailPage = (history, pokeName) => {
  history.push(`/detail/${pokeName}`);
};

export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};

export const goToHomePage = (history) => {
  history.push("/");
};
