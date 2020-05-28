import React, { useState } from 'react';
import Icon from '../Icon';
import SliderField from '../Forms/SliderField';
import './SocialPlatform.scss';

const SocialPlatform = ({ id, value, label, compact, handleChange }) => {

  const [sliderValue, setValue] = useState(0);

  const onChange = (e) => {
    setValue(e)
  }

  const Counter = () => {
    return (
      <div className="social-platform__counter">
        <span>{sliderValue}</span> {label} accounts
      </div>
    )
  }

  return (
    <div className="social-platform">
      <Icon content={id} mix="social-platform__icon"/>

      <div className="social-platform__slider">
        <SliderField value={value} compact={compact} name={id} handleChange={handleChange} onChange={onChange}/>
      </div>

      <Counter/>

    </div>
  );
};

export default SocialPlatform;
