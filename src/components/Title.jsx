import React from 'react'

const Title = ({name}) => {
    return (
        <div class="container mb-4">
            <div class="d-flex justify-content-center align-items-center flex-column ">
                <div class="position-relative">
                    <h2 class="main-title mb-0">{name}</h2>
                    <h2 class="subTitle mb-0">{name}</h2>
                </div>
                <img src="/images/title.png" alt="title" class="img-fluid" />
            </div>
        </div>
    )
}

export default Title