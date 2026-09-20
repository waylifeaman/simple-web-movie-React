
import { SearchBar } from "../components/SearchBar";
import { SearchMoviesApi } from "../api";
import { useEffect, useState } from "react";
import { Content } from "../components/Content";

function DashboardPage(){
    const [keyword, setKeyword] = useState('')
    const [defaultKeyword, setDefaultKeyword] = useState("Ninja")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [page, setPage] =useState(1)


    //useEffect untu menampilka data saat halaman pertama dibuka
    useEffect(()=>{
        const loadData = async()=>{
            setLoading(true);
            setError("")
            try{
                const resul = await SearchMoviesApi(defaultKeyword, page)
                setMovies((prev)=>(page === 1 ? resul : [...prev, ...resul]));
            }catch(err){
                if(page === 1) setMovies([]);
                setError(err.message)
            }finally{
                setLoading(false);
            }
        
        }
        loadData();
    },[defaultKeyword, page])
    
    const handleSearch = async()=>{
        if(!keyword.trim()) return;
        setPage(1);
        setDefaultKeyword(keyword)
    }

    return(
        <><style>{`
        
        
        `}</style>
            <div>
                <div style={{ }}>
                   <SearchBar
                        value = {keyword}
                        onChange = {setKeyword}
                        onSearch = {handleSearch}
                   />
                    {loading && <p>Memuat...</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    
                    <Content movies = {movies}/>                
                    
                    {loading && <p>Memuat...</p>}
                    <div style={{ display:'flex', justifyContent: "center", paddingBottom:"3rem"}}>
                        {movies.length > 0 && !loading && (
                        <p
                        onClick={() => setPage((p) => p + 1)}
                        className="mt-6 rounded-xl px-4 py-2 text-black" style={{ cursor: "pointer", textDecoration:"underline"}}
                        >
                        Muat lebih banyak
                        </p>
                    )}
                    </div>
                    
                </div>
            </div>
        </>
    )
} 
export default DashboardPage;