import React, {useState} from 'react';
import './Home.sass'
import hotEat from "../../IMG/hotEat.png";

const Home = props => {
    const [getInputValue] = useState({})
    const addDesertItemHandler = () => {
        let newValue = getInputValue
        let currentValue = props.data?.productData ? props.data.productData : []
        currentValue.unshift(newValue)
        props.DBSetter('/productData', currentValue)

    }
    console.log(props.data.productData)
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
        // console.log(e.target.files[0])
    }
    return (
        <div>
            <form className="addForm"
                  onSubmit={(e) => submitFormHandler(e)}
            >
                <img className={'mainPhoto'} src={hotEat} alt="hot"/>
                <div className="addImg">
                    <input
                        name={'image'}
                        placeholder={'add img'}
                        onChange={e => getFile(e)}
                        type="file"/>
                </div>
                <div className="addName">
                    <input name={'name'}
                           placeholder={'add name'}
                           onChange={e => change(e)}
                           type="text"/>
                </div>
                <div className="addDescription">
                    <input name={'description'}
                           placeholder={'add description'}
                           onChange={e => change(e)}
                           type="text"/>
                </div>
                <select name="category" id="" onChange={(e) => change(e)}>
                    <option value="default"
                            selected={true}
                    >chose category</option>
                    {
                        props.data?.categories ?
                            props.data.categories.map(cat =>
                                {
                                    return(
                                        <option value={cat} >
                                            {cat}
                                        </option>
                                    )
                                }
                            )
                            : null
                    }
                </select>
                <div className="addButton">
                    <button type={'submit'}>Add</button>
                </div>
            </form>


            <h1>Home</h1>
        </div>
    );
};

export default Home;