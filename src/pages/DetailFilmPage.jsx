import { getDataById } from "../api";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { DetailMovie } from "../components/DetailMovie";

function DetailFilmPage(){
    const {id} = useParams();    
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function load() {
        setLoading(true);
        setError(null);
        try {   
            const data = await getDataById(id);
            if (!ignore) setMovie(data);
        } catch (err) {
            if (!ignore) setError(err.message);
        } finally {
            if (!ignore) setLoading(false);
        }
        }

        load();
        return () => {
        ignore = true;
        };
    }, [id]); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <DetailMovie movie = {movie}/>

        </div>

    );

}

export default DetailFilmPage;