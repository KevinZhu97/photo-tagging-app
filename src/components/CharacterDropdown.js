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

const CharacterDropdown = ({
    characters = [],
    show,
    clickLocation,
    clicked,
}) => {

    const getCharacterImage = (character) => {
        switch (character) {
            case "Akame":
            return Akame;
        case "Monokuma":
            return Monokuma;
        case "Rei":
            return Rei;
        case "Mikasa":
            return Mikasa;
        case "Faye":
            return Faye;
        case "Shinya":
            return Shinya;
        case "Meiko":
            return Meiko;
        case "Arita":
            return Arita;
        case "Roy":
            return Roy;
        default:
            break;
        }
    }
    
    const CharacterDropdownField = (props) => {
        return (
          <a
            key={props.title}
            href="#menuitem"
            className="character-dropdown-a"
            onClick={() => props.clicked(props.title)}
            role="menuitem"
          >
            <div className="character-dropdown-div">
              <img
                className="character-dropdown-img"
                src={props.image}
                alt={props.title}
              />
              <div>{props.title}</div>
            </div>
          </a>
        );
      };

    const CharacterDropdownFields = () => {
        return characters.map((character) => {
            return (
                <div>
                    <CharacterDropdownField
                        image={getCharacterImage(character.name)}
                        title={character.name}
                        clicked={clicked}
                        key={character.name}
                    />
                </div>
            )
        })
    }    


    return(
        <div className={`${show ? "absolute" : "hidden" }`} style={clickLocation}>
            <div className="character-dropdown-menu">
                <CharacterDropdownFields/>
            </div>
        </div>
    )

}

export default CharacterDropdown