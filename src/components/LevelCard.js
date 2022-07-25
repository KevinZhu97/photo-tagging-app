

const LevelCard = (props) => {
    return(
        <div className="board-container" onClick={props.handleClick}>
            <img className="board-image" src={props.image} alt={props.alt} />
            <span className="board-level">{props.level}</span>
        </div>
    )
}

export default LevelCard;