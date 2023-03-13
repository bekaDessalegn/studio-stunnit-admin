import { useState } from 'react';

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
            {selectedOption}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.707 6.293a1 1 0 00-1.414 0L6.293 9.293a1 1 0 001.414 1.414L10 8.414l2.293 2.293a1 1 0 001.414-1.414l-3-3z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      </div>
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {options.map((option) => (
            <button key={option} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" onClick={() => handleOptionSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
