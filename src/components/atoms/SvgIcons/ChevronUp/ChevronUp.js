import React from 'react' 
import PropTypes from "prop-types"

import '../iconStyles.css'

const ChevronUp = ({color, ...props}) => {

    return(
        <svg className="iconRoot" viewBox="0 0 24 24">
            <defs>
            <clipPath xmlns="http://www.w3.org/2000/svg" id="clip-path-49">
                <path id="Path_1" data-name="Path 1" d="M13.567,12.5a.52.52,0,0,0,.763,0,.544.544,0,0,0,0-.777L8.878,6.167a.52.52,0,0,0-.763,0L2.664,11.719a.544.544,0,0,0,0,.777.52.52,0,0,0,.763,0L8.5,7.333l5.07,5.164Z" transform="translate(-2.5 -6)"/>
            </clipPath>
            </defs>
            <g id="icons_arr" data-name="icons/arr" clipPath="url(#clip-path-17)">
                <rect id="back-3" data-name="back" width="24" height="24" fill="none"/>
                <g id="ico-7" data-name="ico" transform="translate(6.003 8.669)" opacity="0.54" clipPath="url(#clip-path-49)">
                <rect id="Rectangle_3" data-name="Rectangle 3" width="14.719" height="9.439" transform="translate(-1.363 -1.388)" fill={color}/>
                </g>
            </g>
        </svg>
    )
}

ChevronUp.propTypes = {
    color: PropTypes.string
}

export default ChevronUp