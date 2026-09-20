const api_key = import.meta.env.VITE_API_KEY
const URL = "http://www.omdbapi.com"

function buildParams(obj) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, value);
    }
  }
  return params;
}

export async function SearchMoviesApi(query, page = 1, year){
    const params = buildParams({ apikey: api_key, s: query, page, y: year });
        
    const res = await fetch(`${URL}?${params}`)
    if(!res.ok) throw new Error(`HTTP error ${res.status}`);

    const data = await res.json()
    // const p = data.Search
    // p.map((e)=>{
    //     console.log(e.Title)
    // })

    if(data.Response === "False") throw new Error(data.Error);

    return data.Search; //kembalikan data bentuk json 
}

export async function getDataById(id) {
  if (!id || id === "undefined") {
    throw new Error("ID film tidak valid");
  }

  const params = buildParams({ apikey: api_key, i: id });

  const res = await fetch(`${URL}?${params}`);
  if (!res.ok) throw new Error(`HTTP error ${res.status}`);

  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data;
}
