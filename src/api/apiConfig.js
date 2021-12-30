const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'bf828bf28a95bddeffa13893d9c94e3c',
    language: 'fr',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
