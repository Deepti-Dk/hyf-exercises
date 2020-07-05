/**Using chaining

Fetch the astronauts
After the astronauts has been fetched, fetch movies using this api
Log out the movies */

async function astroMovies() {
  const astronauts = await fetch('http://api.open-notify.org/astros.json');
  console.log(astronauts);
  const movies = await fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  );

  console.log(movies);
}

astroMovies();
//CHECK PROMISE ALL
