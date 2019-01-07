import React from 'react';
import Media from './media.js'
import './playlist.css';

// function Playlist(props) {
//     return (
//         <div onClick={props.handleClick}>
//             {}
//         </div>
//     )
// }

// Este componente funcional solo renderiza el UI
function Playlist(props) {
    //const playlist = props.data.categories[0].playlist
    console.log(props.data)
    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return <Media handleClick={props.handleOpenModal}{...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;