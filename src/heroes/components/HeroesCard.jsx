import {Link} from 'react-router-dom';

export const HeroesCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImage = `/assets/heroes/${ id }.jpg`;

    const CharactersByHero = ({alter_ego, characters}) => {

        if ( alter_ego === characters ) {
            return (<></>)
        }

        return <p> {characters} </p>

    }
  
    return (
    <div className="col  animate__animated animate__fadeIn">
        
        <div className='card'>
            
            <div className="row no-gutters">
                
                <div className=" col-4">
                   
                    <img src={heroImage} className="card-img" alt={superhero}/>
                
                </div>

                <div className="col-8">

                    <div className="card-body">
                        <div className="card-title">{superhero}</div>
                        <p className="card-text">{alter_ego}</p>

                        <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                        <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p>

                        <Link to={ `/hero/${ id }` }>
                            Más...
                        </Link>

                        
                    </div>

                </div>
            
            </div>
       
        </div>
    
    </div>
  )
}
