
import { useMemo } from 'react';
import { getHeoresByPublisher } from '../helpers';
import { HeroesCard } from './HeroesCard';



export const HeroesList = ({ publisher }) => {

  const heroes = useMemo (() => getHeoresByPublisher( publisher ), [publisher]); 

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
          heroes.map( hero => (
            <HeroesCard
              key={ hero.id }
              { ...hero }
            />
          ) )
        }
    </div>
  )
}
