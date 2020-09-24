import React from 'react';
import './ProductContainer.sass'

const ProductContainer = props => {
    const deleteSVG = <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
            fill="black"/>
    </svg>;
    const plusSVG = <svg width="25" height="25" viewBox="0 0 1024 1024" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M696 480H544V328C544 323.6 540.4 320 536 320H488C483.6 320 480 323.6 480 328V480H328C323.6 480 320 483.6 320 488V536C320 540.4 323.6 544 328 544H480V696C480 700.4 483.6 704 488 704H536C540.4 704 544 700.4 544 696V544H696C700.4 544 704 540.4 704 536V488C704 483.6 700.4 480 696 480Z"
            fill="black"/>
        <path
            d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM512 884C306.6 884 140 717.4 140 512C140 306.6 306.6 140 512 140C717.4 140 884 306.6 884 512C884 717.4 717.4 884 512 884Z"
            fill="black"/>
    </svg>;
    return (
            <div key={props.index} className='productContainer'>
                <div className="LeftContainer">
                    <img
                        src={require(`../../../IMG/${props.item?.image ? props.item.image : 'default.jpg'}`)}
                        alt="image well be here"
                    />
                </div>
                <div className="RightContainer">
                    <div className="productName">
                        <p>{props.item.name}</p>
                    </div>
                    <pre className="description">
                        <p>{props.item.description}</p>
                    </pre>
                </div>
                <div className="buttonsContainer">
                    <div
                        onClick={() => props.clickDeleteButton(props.item)}
                        className="deleteButton">
                        {deleteSVG}
                    </div>
                    <div
                        onClick={() => props.openModalHandler({status: true, init: props.item})}
                        className="moreButton">
                        {plusSVG}
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default ProductContainer;