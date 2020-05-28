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
  const left = Math.floor((100 / max - 16/100) * sliderValue) + '%';

  const labels = {
    0: '0',
    max: max,
  }

  return (


    <div className={cn('slider-field', { 'slider-field_compact': compact })}>
      <span className={cn('tooltip', {'tooltip_start': !sliderValue })} style={{ 'left': left }}>{sliderValue ? sliderValue : 0}</span>
      <Slider
        min={0} max={max}
        value={sliderValue}
        onChange={onSliderChange}
        tooltip={compact ? false: true}
        labels={compact ? labels : false}
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
