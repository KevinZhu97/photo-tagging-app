import LevelCard from '../components/LevelCard'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const Home = ({
    setLevel,
    levelData,
    setInGame,
    setInLeaderboard,
    setInHome,
}) => {

    useEffect(()=>{
        setInHome(true);
        setInLeaderboard(false);
        setInGame(false);
    })

    const boards = Object.keys(levelData).map((index) => {
    
        const board = levelData[index]
        const key = `${board.name}`;

        return(
            <Link to='/game' key={key}>
                <LevelCard 
                    image={board.board}
                    handleClick={()=>{
                        setInGame(true);
                        setLevel(index);
                    }}
                    alt={`${board.level + " " + board.name}`}
                    level={board.name}
                />
            </Link>
        );
    });

    return(
        <div>
            {boards}
        </div>
    )
}

export default Home;