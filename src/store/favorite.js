import { defineStore } from "pinia";
import axios from "axios";

export const useFavoritStore = defineStore("favorit", {
    state: () => {
        return {
            favMovies: JSON.parse(localStorage.getItem("favMovies")) ?? [],
        };
    },
    actions: {
        addToFavorite(id) {
            axios
                .get(`${ process.env.VUE_APP_API_URL }?apikey=${ process.env.VUE_APP_API_KEY }&i=${ id }`)
                .then(res => {
                    const { data } = res;
                    const movie = {
                        imdbID: data.imdbID,
                        Title: data.Title,
                        Poster: data.Poster,
                        Year: data.Year,
                    };
                    this.favMovies.push(movie);
                    localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
                })
                .catch(err => console.log(err));
        },
        removeFromFavorite(id) {
            this.favMovies = this.favMovies.filter(movie => movie.imdbID != id);
            localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
        },
    },
});
