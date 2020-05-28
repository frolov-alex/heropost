import React, { useRef, useState } from 'react';
import Slider from 'react-rangeslider';
import cn from 'classnames';
import './SliderField.scss';

const SliderField = ({ note, max = 50, name, compact, value, handleChange, onChange }) => {
  const [sliderValue, setValue] = useState(value);

  const onSliderChange = (v) => {
    setValue(v);
    onChange(v);
    focusTextInput();
  };

  const textInput = useRef();
  const focusTextInput = () => textInput.current.focus();

  return (
    <div className={cn('slider-field', {'slider-field_compact': compact})}>
      <Slider
        min={0} max={max}
        value={sliderValue}
        onChange={onSliderChange}
      />

      <input
        name={name}
        type="text"
        value={sliderValue}
        onChange={handleChange}
        onFocus={handleChange}
        ref={textInput}
      />

      <p className="slider-field__note">{note}</p>
    </div>
  );
};

export default SliderField;
