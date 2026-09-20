
export const Header = ()=>{
    return(
    <>
    <style>{`
        li{
            cursor: pointer;
        }
        #active{
            border-bottom: 2px solid red;
        }
            .toplevel{
                position: fixed;
                
                }
    `}</style>    
        <div className="toplevel bg-black  w-full bg-black-500" style={{ color:"white" }}>
            <div style={{maxWidth: "1700px"}} className="grid grid-cols-3 p-2 items-center max-w-6xl mx-auto px-4 py-3">
                <div>
                <h1 className="font-bold">RMT</h1>
                <p>Rekomendasi film terbaru 2026</p>
            </div>
            <nav  >
                <ul className="grid grid-cols-3 gap-4 text-center">
                </ul>
            </nav>
            </div>
            
        </div>
    </>

)
}