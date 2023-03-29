import axiosConfig from "../../components/axiosconfig/axiosConfig";


export default function setmovies(page) {





    return (dispatch) => {
        return axiosConfig.get(`/movie/popular?page=${page}`).then((res) => {
            console.log((res.data.results)
            )
            dispatch({ type: "SET_MOVIE", payload: res.data.results })

        })
            .catch((err) => {
                console.log(err);
            })
    }
}