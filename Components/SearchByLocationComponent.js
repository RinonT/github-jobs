import React, { useContext } from 'react';
import { Context } from '../GlobalContext';
import { FormStyles } from './Styles';

export default function SearchByLocationComponent() {
    const {handleCheckbox} = useContext(Context);
     
    
    return (
        <FormStyles className="option_form">
            <label htmlFor="fulltime">
                <input onChange={handleCheckbox} type="checkbox" id="full-time" />
                <span>Full time</span>
            </label>
            <label htmlFor="location">Location:</label>
            <input type="text" placeholder="City, state, zip code or country"/>
            <label htmlFor="london">
                <input onChange={handleCheckbox} type="checkbox"  id="london" />
                <span>London</span>
            </label>
            <label htmlFor="amsterdam">
                <input onChange={handleCheckbox} type="checkbox" id="amsterdam" />
                <span>Amsterdam</span>
            </label>
            <label htmlFor="new-york">
                <input onChange={handleCheckbox} type="checkbox" id="new-york" />
                <span>New York</span>
            </label>
            <label htmlFor="berlin">
                <input onChange={handleCheckbox} type="checkbox" id="berlin" />
                <span>Berlin</span>
            </label>
        </FormStyles>
    )
}
