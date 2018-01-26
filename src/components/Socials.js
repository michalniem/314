import React from 'react'

const socials = () => {
    return(
        <div className='toolbar__socials'>
            <a className='toolbar__socials--social' href="https://github.com/michalniem">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
            </a>
            <a className='toolbar__socials--social' href="https://www.linkedin.com/in/michal-niemiec/">
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"/>
            </a>
        </div>
    )
};

export default socials