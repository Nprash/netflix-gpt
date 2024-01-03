//  export const userAvatar = "https://avatars.githubusercontent.com/u/38063376?s=400&u=08a066f0dfeeca4bb15b6c683b70b546c8312dfe&v=4"
 export const userAvatar = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

 export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    },
  };
  // console.log(process.env.REACT_APP_TMDB_KEY)
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w342"

  export const SUPPORTD_LANGUAGES = [{identifier:"en", name:"English"},
                                      {identifier:"hindi", name:"Hindi"},
                                      {identifier:"spanish", name:"Spanish"},
                                    ];
                                    
  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;                     