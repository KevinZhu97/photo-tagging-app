// level 1
import Akame from '../assets/characters/akame-ga-kill.png'
import Monokuma from '../assets/characters/monokuma.png'
import Rei from '../assets/characters/rei-miyamoto-highschool-dxd.png'
//level 2
import Mikasa from '../assets/characters/mikasa-attack-on-titan.png'
import Meiko from '../assets/characters/meiko-honma-anohana.png'
import Shinya from '../assets/characters/shinya-kogami-psycho-pass.png'
// level 3
import Faye from '../assets/characters/faye-valentine-cowboy-bebop.png'
import Arita from '../assets/characters/arita-haruyuki-accel-world.png'
import Roy from '../assets/characters/roy-mustang-fma.png'

const Character = (props) => {
    let image = null;
    switch(props.name) {
        case "Akame":
            image = Akame;
            break;
        case "Monokuma":
            image = Monokuma;
            break;
        case "Rei":
            image = Rei;
            break;
        case "Mikasa":
            image = Mikasa;
            break;
        case "Faye":
            image = Faye;
            break;
        case "Shinya":
            image = Shinya;
            break;
        case "Meiko":
            image = Meiko;
            break;
        case "Arita":
            image = Arita;
            break;
        case "Roy":
            image = Roy;
            break;
        default:
            break;
    }
    return(
        <div className="character-container">
            <img className={`character-image ${props.found ? 'faded' : ''}`} src={image} alt={props.name}/>
            <p className='character-name'>{props.name}</p>
        </div>
    )
}

export default Character;