import axios from "axios";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => {
        return {
            movies: [],
            movie: {},
            isLoading: false,
            totalResults: 0,
            loadingMessage: "Please wait",
            page: 1,
        };
    },
    actions: {
        async getAllMovies(keyword) {
            this.isLoading = true;
            this.loadingMessage = "Please wait";
            if (!keyword) {
                keyword = "Harry potter";
            }

            try {
                const { data } = await axios.get(`${ import.meta.env.VITE_API_URL }?apikey=${ import.meta.env.VITE_API_KEY }&s=${ keyword }`);
                if (data.Response == "False") {
                    throw new Error(data.Error);
                }
                [this.totalResults, this.movies, this.isLoading, this.page] = [data.totalResults, data.Search, false, 1];
            } catch (err) {
                [this.isLoading, this.loadingMessage] = [true, err.message];
            }
        },
        async getMovieByID(id) {
            this.isLoading = true;
            try {
                const { data, status } = await axios.get(`${ import.meta.env.VITE_API_URL }?apikey=${ import.meta.env.VITE_API_KEY }&i=${ id }`);
                if (status != 200) {
                    throw new Error(data.Error);
                }
                [this.movie, this.isLoading] = [data, false];
            } catch (err) {
                console.log(err.message);
            }
        },
    },
});