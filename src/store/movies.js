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

    },
});