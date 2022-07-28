const Card = ({
    img,
    clicked,
    alt
}) => {
    return(
        <div className="card-container" onClick={clicked}>
            <img className="leaderboard-card" src={img} alt={alt}/>
            <span className="leaderboard-card-name">{alt}</span>
        </div>
    )
}

export default Card;