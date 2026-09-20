import { Link } from "react-router-dom"

export const Content = ({movies})=>{
    return(

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {movies.map((m) => (
        <Link key={m.imdbID} to={`/movie/${m.imdbID}`}>
          <div className="card cursor-pointer">
            {m.Poster !== "N/A" && <img src={m.Poster} alt={m.Title} />}
            <h3 className="font-medium">{m.Title}</h3>
            <p className="text-sm text-gray-500">{m.Year}</p>
          </div>
        </Link>
      ))}
    </div>
    )
}