import React, { useContext } from 'react';
import { Context } from '../GlobalContext';
import { FormStyles } from './Styles';

export default function SearchByLocationComponent() {
    const { state, dispatch, handleCheckbox } = useContext(Context);
    const { fulltime } = state;

    function searchJobsByLocation(e) {
        if (e.target.checked) {
            dispatch({ type: "SET_JOBS", jobsData: [] })
            dispatch({ type: "SET_FULLTIME_VALUE", fulltime: !fulltime })
        } else if (!e.target.checked) {
            dispatch({ type: "SET_FULLTIME_VALUE", fulltime: !fulltime })
            dispatch({ type: "SET_JOBS", jobsData: [] })
        }
    }

    return (
        <FormStyles className="option_form">
            <label htmlFor="fulltime">
                <input onChange={searchJobsByLocation}
                    type="checkbox" id="full-time" />
                    <span>Full time</span>
            </label>
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                onChange={(e) => {
                    dispatch({ type: "SET_LOCATION_INPUT_VALUE", locationValue: `location=${e.target.value}` })
                }}
                placeholder="City, state, zip code or country" />
            <label htmlFor="london">
                <input onChange={handleCheckbox} type="checkbox" id="london" />
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
