import { Link } from "react-router-dom"

export const DetailMovie = ({movie})=>{

    return(
        <div>
            <style>{`
                h1{
                    font-weight: bold;
                    font-size: 20px;
                    }
            `}</style>
            <div className="Header" style={{  backgroundColor:"black", color: "White", display:"grid", gridTemplateColumns: "1fr 2fr", gap: "10rem", padding:"1rem"}}>
                <Link to="/" style={{ }}>← Kembali</Link>
                <h1>Detail Film {movie.Title}</h1>
            </div>
            <div  style={{ padding:"1rem" }}>
                <div style={{ border:"1px solid gray", borderRadius: "15px", display: "grid", gridTemplateColumns: "0.5fr 1fr", justifyItems:"center", padding:"1rem"}}>
                    <div style={{ width:"100%", justifyItems:"center" }}>
                        
                        {movie.Poster !== "N/A" && <img src={movie.Poster} alt={movie.Title} />}
                    </div>
                    <div style={{ }}>
                        <h1>{movie.Title}</h1>                    
                        <p>{movie.Plot}</p>
                        <p>Terbit: {movie.Year}</p>
                        <p>Rating: {movie.imdbRating}</p>
                    </div>
                
                </div>
            </div>
        </div>
    )
}