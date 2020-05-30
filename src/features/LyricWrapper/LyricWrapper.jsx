import React from 'react'
import LyricsOvh from 'lyricsovh-lib'

import './LyricWrapper.scss'
import LyricList from './LyricList/LyricList'
import Lyrics from './Lyrics/Lyrics'

class LyricWrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            songList: [],
            songLyrics: ""          
        }
        this.timeoutCons = null
        this.lyricsapi = new LyricsOvh()

        this.handleMusicSelected = this.handleMusicSelected.bind(this)
        this.handleBackButton = this.handleBackButton.bind(this)
    }

    componentDidUpdate(prevProps){

        if (prevProps.searchWord !== this.props.searchWord) {  
            
            this.setState({
                songLyrics: ""
            })

            if (this.props.searchWord !== "") {
                clearTimeout(this.timeoutCons)
                
                this.timeoutCons = setTimeout( () => {
                    this.lyricsapi
                        .getSuggest(this.props.searchWord)
                            .then( (res) => {
                                    this.setState({
                                        songList: res.data
                                    })
                                })
                            .catch( (err) => console.error(err))
                        }, 500)
            } else {
                this.setState({
                    songList: []
                })
            }
        }
    }

    handleMusicSelected (song) {
        console.info(song)
        this.lyricsapi.getLyric(song.artist.name, song.title)
            .then( res => {
                console.info(res)
                this.setState({
                    songLyrics: res.error ? "Letra da música não catalogada" : res.lyrics
                })
            })
            .catch( err => console.error(err))
    }

    handleBackButton () {
        this.setState({
            songLyrics: ""
        })
    }

    render () {
        return (
                <div className='lyricwrapper'>

                    {this.state.songLyrics !== "" ? (
                        <Lyrics songLyrics={this.state.songLyrics} handleBackButton={this.handleBackButton} />
                    ) : (
                        <LyricList songList={this.state.songList} handleMusicSelected={this.handleMusicSelected}/>
                    )
                    }

                </div>
            )
    }

}

export default LyricWrapper