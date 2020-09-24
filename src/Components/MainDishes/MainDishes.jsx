import React, {useState} from 'react';
import './MainDishes.sass'
import ProductContainer from "../UI/ProductContainer/ProductContainer";
import ModalComponent from "../ModalComponent/ModalComponent";

const MainDishes = props => {
    const [openModal, openModalHandler] = useState({status: false, init: null})
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
        <div className='MainContainer'>
        {
                props.data?.productData ?
                    props.data.productData
                        .filter( pr => pr.category === 'Основні страви')
                        .map((item, index) => {
                        return (
                            <ProductContainer
                                key={index}
                                item={item}
                                // index={index}
                                clickDeleteButton={(el) => clickDeleteButton(el)}
                                modalInit={openModal.init}
                                openModalHandler={(value) => openModalHandler(value)}
                            />
                        )
                    })
                    :
                    <div className='nullAlert'>
                        Страв в цій категорії поки що не додано
                    </div>
            }
            {
                openModal.status
                    ?
                    <div className='modalBackground'>
                        <ModalComponent
                            openModalHandler={(value) => openModalHandler(value)}
                            data={openModal.init}
                        />
                    </div>
                    : null
            }
        </div>
    );
};

export default MainDishes;