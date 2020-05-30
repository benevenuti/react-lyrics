import React from 'react';
import './Search.scss';

const Search = props => {
    return (
        <section className='search'>
            <form>
                <input
                    className='-inputsearch'
                    type='search'
                    placeholder='Buscar música...'
                    onChange={props.handleSearch}
                />
            </form>
        </section>
    )
}

export default Search;