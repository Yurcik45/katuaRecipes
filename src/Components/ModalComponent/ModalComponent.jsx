import React from 'react';
import './ModalComponent.sass'

const ModalComponent = props => {
    const minusSVG = <svg width="25" height="25" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M696 480H328C323.6 480 320 483.6 320 488V536C320 540.4 323.6 544 328 544H696C700.4 544 704 540.4 704 536V488C704 483.6 700.4 480 696 480Z" fill="black"/>
        <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM512 884C306.6 884 140 717.4 140 512C140 306.6 306.6 140 512 140C717.4 140 884 306.6 884 512C884 717.4 717.4 884 512 884Z" fill="black"/>
    </svg>;
    return (
        <div className='modalContainer'>
            <div className="LeftModalContainer">
                <img
                    src={require(`../../IMG/${props.data?.image ? props.data.image : 'default.jpg'}`)}
                    alt="image well be here"
                />
            </div>
            <div className="RightModalContainer">
                <div className='nameAndButtonModal'>
                    <div className="productNameModal">
                        <p>{props.data.name}</p>
                    </div>
                    <div
                        onClick={() => props.openModalHandler({status: false, init: null})}
                        className="moreModalButton">
                        {minusSVG}
                    </div>
                </div>
                <pre className="descriptionModal">
                    <p>{props.data.description}</p>
                </pre>
            </div>
        </div>
    );
};

export default ModalComponent;