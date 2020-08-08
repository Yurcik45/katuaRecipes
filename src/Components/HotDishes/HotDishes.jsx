import React from 'react';
import './HotDishes.sass'

const HotDishes = props => {
    const clickDeleteButton = el => {
        let newData = []
        props.data.productData.map(It => {
            if (It.name !== el.name) {
                newData.push(It)
            }
        });
        props.DBSetter('/productData', newData);
    };
    return (
        <div className={'Deserts'}>
            {
                props.data?.productData ?
                    props.data.productData.map((item, index) => {
                        console.log(item.category)
                        return (
                            <div key={index}
                                 className={(item.category === 'Перші страви') ? 'productContainer' : 'noneProductContainer'}
                            >
                                <div className="productName">
                                    <h3>{item.name}</h3>
                                </div>
                                <div
                                    onClick={() => clickDeleteButton(item)}
                                    className="deleteButton">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
                                            fill="black"/>
                                    </svg>
                                </div>
                                <div className="bottomContainer">
                                    <div className="mainImage">
                                        <img src={require(`../../IMG/${item?.image ? item.image : 'default.jpg'}`)}
                                             alt="image well be here"/>
                                    </div>
                                    <div className="description">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className={'nullAlert'}>
                        Страв в цій категорії поки що не додано
                    </div>
            }
        </div>
    );
};

export default HotDishes;