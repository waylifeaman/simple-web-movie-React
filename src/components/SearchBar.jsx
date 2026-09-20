export const SearchBar = ({value, onChange, onSearch}) => {
  return (
    <div className="flex p-3 justify-center" style={{ backgroundColor:"black", color:"white", display:"grid", gridTemplateColumns:"1fr 1fr" }}>
        <div style={{ fontWeight: "bold", display:"flex", alignItems:"center" }}>
            <h1>Rekomendasi Film 2026</h1>
        </div>
          <form
            className="flex justify-center gap-2 p-3"
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}>
                <input className="rounded-xl "
                type="text"
                id="form-control"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Cari Judul Film" 
                style={{ border: "1px solid gray", width: "500px" }}
                />
                <div style={{ display:"flex", alignItems:"center" }}>            
                <button id="button-control" style={{ backgroundColor: "black", border:"1px solid gray", padding: "5px", borderRadius: "10px", cursor:"pointer" }}>Cari</button>
                </div>
        </form>
    </div>
  );
};