import React from 'react'

import './Lyrics.scss'

const Lyrics = props => {
    return (
        <div className='lyrics'>
            <pre>{props.songLyrics}</pre>
            <button className='-btngoback' onClick={props.handleBackButton}>Voltar</button>
        </div>
    )
}

export default Lyrics