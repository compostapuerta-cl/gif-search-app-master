// IMPORTS
import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    // Manejo de cambios en el input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    // Manejo de envio de la categoria
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <p className="hint-text">Ingrese una palabra para buscar gifs relacionados:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
