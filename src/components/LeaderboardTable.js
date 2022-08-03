import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const LeaderboardTable = ({level}) => {

    console.log(level)

    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(()=>{
        const getLeaderboardData = async () => {
            const leaderArray= [];
            const firestoreData = await firestore.collection('highscores').get();
            firestoreData.forEach((doc)=> {
                leaderArray.push(doc.data())
            })
            setLeaderboardData(leaderArray)
        }
        getLeaderboardData();
    }, []);

    const Values = () => 
        leaderboardData
            .filter((value) => value.level === level)
            .map((value, index) => (
                <tr key={value.name} className="leaderboard-row">
                    <td className="leaderboard-place-cell"> {index + 1}</td>
                    <td className="leaderboard-name-cell">
                        <div className="leaderboard-name-text"> {value.name} </div>
                    </td>
                    <td className="leaderboard-time-cell"> {value.time} </td>
                    <td className="leaderboard-time-cell"> {value.date} </td>
                </tr>
            ))
    









    return(
        <div className='leaderboard-table-container'>
            <table className="leaderboard-table">
                <thead> 
                    <tr>
                        <th 
                            scope="col"
                            className="leaderboard-table-column-header col-header-left"

                        >
                            Place
                        </th>
                        <th
                            scope="col"
                            className="leaderboard-table-column-header col-header-middle"

                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="leaderboard-table-column-header col-header-right"

                        >
                            Time
                        </th>
                        <th
                            scope="col"
                            className="leaderboard-table-column-header col-header-right"
                        >
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody className="leaderboard-table-body">
                    <Values/> 
                    
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardTable;