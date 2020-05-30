import React from 'react'

import './LyricList.scss'

const LyricList = props => {
    return (
        <div className='lyriclist'>
            {props.songList.map( (song, key) => {
                return (
                    <div key={key}>
                        <img src={song.album.cover_medium} width={64} alt="cover"/>
                        <button className='-songname'
                            onClick={ () => props.handleMusicSelected(song)}>
                                {song.artist.name} - {song.title}
                        </button>
                        <audio controls>
                            <source src={song.preview} type="audio/mpeg" />
                            Seu navegador é ruim, muito ruim.
                        </audio>
                    </div>
                    )
            })}
        </div>

    )
}


export default LyricList