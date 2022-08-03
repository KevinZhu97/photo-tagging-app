import { Link } from 'react-router-dom'

const Modal = ({
    showModal,
    seconds,
    username,
    submitScore, 
    updateUsername
}) => {
    // console.log(showModal)

    const gameoverModal = (
        <div className="modal-container">
            <p> You finished in {seconds} seconds!</p>
            <p> Submit your score on the global leaderboard</p>
            <p> Username </p>
            <label for="username"> Type in your username</label>
            <input 
                type="text" 
                id="username"
                value={username}
                onChange={updateUsername} 
            ></input>
            <div className="button-container">
                <button> Cancel </button>
                <Link to='/leaderboard'> <button onClick={submitScore}> Submit score </button> </Link>
            </div>
        </div>
    )
    return showModal ? gameoverModal : null;
}

export default Modal;