export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
};

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query ?
    `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
    `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers,
    });

    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;

};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzcxYTc2MDZmY2VkYzYyNzI4YWVjMjljOTk0OWM3ZiIsIm5iZiI6MTc1MTg2NTM0Ni40ODQsInN1YiI6IjY4NmI1ODAyN2I3NjJhZWY3MjlhM2YzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVqGGpQj5Jqjy3zfu95_fGqupmEtuCsYUCjnZW-3iJM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));