import React from 'react'
import sx from './searchInputField.module.scss'

const SearchInputField = () => {
    return (

        <div className={sx.wrapper}>
            <div className={sx.icon}>

                <img src='https://cdn.icon-icons.com/icons2/1659/PNG/512/3844432-magnifier-search-zoom_110300.png' alt='logo' style={{
                    //  objectFit: 'cover',
                    width: '100%',
                    maxHeight: '100%'
                }} />
            </div>

            <input placeholder='search' className={sx.input} />

        </div>


    )
}

export default SearchInputField