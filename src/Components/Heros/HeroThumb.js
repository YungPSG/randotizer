import { IMAGE_BASE_URL} from '../API/Constants'

// wrapper component to display a hero thumbnail
export default function HeroThumb(props) {
    console.log(props)
    const { hero, isInactive} = props
    console.log(hero.img)


    return (
        <div key={hero.id} className={'home-hero-icon'}> 
            <img id={hero.id} src={IMAGE_BASE_URL + hero.img} title={hero.localized_name} alt={hero.localized_name} className={isInactive}></img>
        </div>    
    )
}