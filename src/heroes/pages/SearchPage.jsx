import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroesCard } from "../components"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers"


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search )

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);

  const showError = (q.length > 0) && heroes.length === 0;
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
    
  }
  
  return (
    <>
        <>
          <h1>Search</h1>
          <hr/>
 
          <div className="row">

          <div className="col-5">

            <h5>Buscador</h5>
            <hr/>

            <form onSubmit={ onSearchSubmit }>
              <input
                type='text'
                placeholder="Escriba un Héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={onInputChange}
              />

              <button className="btn btn-outline-primary mt-3">
                Buscar
              </button>

            </form>

          </div>

          <div className="col-7">

            <h5>Resultados</h5>
            <hr/>

            <div className="alert alert-primary" style={{ display: showSearch ? '' : "none" }}> 
                Buscando Héroe 
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}> 
                No hay resultados para este héroe: <b>{q}</b> 
            </div>

            {
              heroes.map( hero => (
                <HeroesCard key={hero.id} {...hero} />
              ) )
            }


          </div>
          
        </div>
        </>
    </>
  )
}
