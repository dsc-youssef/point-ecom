// Dependences
import { useState, FC, ReactNode, ReactElement } from 'react';

// Props Interface
interface SelectDropdownProps {
  toggleLabel?: ReactNode;
  className?: string;
  options: {
    value: string | number;
    position?: string;
    icon?: ReactElement
  }[]
}

const SelectDropdown: FC<SelectDropdownProps> = ({ options, className, toggleLabel }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={`${className} selectDropdown`}>
      <div>
        <button
          type='button'
          className="toggle-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {toggleLabel}
          <span>{selectedOption.value}</span>
          <i className='fal fa-angle-down' />
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} dropdown-menu`}>
        <div>
          {options.map((option) => (
            <button
              type='button'
              key={option.value as number}
              className={`${option.value === selectedOption.value ? 'selected' : ''} dropdown-menu-option`}
              onClick={() => handleOptionClick(option)} >
              {option.icon}
              {option.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
