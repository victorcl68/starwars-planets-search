async function GetPlanets() {
  const planetsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await planetsFetch.json();
  return planets;
}

export default GetPlanets;
