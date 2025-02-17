export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
export const USER_AVATAR = "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const MOVIE_POSTER = "https://image.tmdb.org/t/p/w500/";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const getMovieSearchUrl = (movie) => `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN
    },
};

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "punjabi", name: "Punjabi" },
    { identifier: "spanish", name: "Spanish" },
];