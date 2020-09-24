import React, {useState} from 'react';
import './Home.sass'
import BTS from "../../IMG/backgraundBtsGroup.jpg";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import '../../firebaseConfig'


const Home = props => {
    const [getInputValue] = useState({})
    const addDesertItemHandler = () => {
        let newValue = getInputValue
        let currentValue = props.data?.productData ? props.data.productData : []
        currentValue.unshift(newValue)
        props.DBSetter('/productData', currentValue)

    }
    const change = e => {
        e.preventDefault();
        getInputValue[e.target.name] = e.target.value;
    };

    const submitFormHandler = e => {
        e.preventDefault();
        addDesertItemHandler()
        e.target.reset();
    }

    const getFile = (e) => {
        console.log('image upload')
    }

    return (
        <form className='homeForm' onSubmit={(e) => submitFormHandler(e)}>
            <img className='mainPhoto' src={BTS} alt="hot"/>
            <div className="homeContainer">
                <div className='select'>
                    <select
                        defaultValue='DEFAULT'
                        name="category"
                        id=""
                        onChange={(e) => change(e)}
                    >
                        <option
                            value="DEFAULT"
                            selected={true}
                        >
                            Вибрати категорію
                        </option>
                        {
                            props.data?.categories ?
                                props.data.categories.map((cat, index) => {
                                        return (
                                            <option key={index} value={cat}>
                                                {cat}
                                            </option>
                                        )
                                    }
                                )
                                : null
                        }
                    </select>
                </div>
                <div>
                    <Input
                        name={'name'}
                        className='defaultInput'
                        placeholder={'Додати назву'}
                        onChange={e => change(e)}
                        type="text"/>
                </div>
                <div className="addDescription">
                <textarea
                    cols="30"
                    rows="10"
                    name={'description'}
                    className='HomePageArea'
                    placeholder={'Додати опис'}
                    onChange={e => change(e)}
                >
                </textarea>
                </div>
                <div className='selectImageContainer'>
                    <Input
                        name={'image'}
                        id="file"
                        placeholder={'add img'}
                        onChange={e => getFile(e)}
                        type="file"
                    />
                    <label className="btn" htmlFor="file">
                        <div className="spanContainer">
                            <span>Завантажити зображення</span>
                            <span>Вибрати</span>
                        </div>
                    </label>
                </div>
                <div>
                    <Button
                        type={'submit'}
                        className='defaultBtn'
                        value={'Додати'}
                    />
                </div>
            </div>
        </form>
    );
};

export default Home;