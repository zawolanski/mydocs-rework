import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import { SelectOption } from './types';

interface Props {
  selectedItem: SelectOption;
  options: SelectOption[];
  onSelectChange: (option?: SelectOption) => void;
  srLabel?: string;
  customLabel?: React.ReactNode;
  buttonClass?: string;
  optionsClass?: string;
}

const Select = ({
  selectedItem,
  customLabel,
  options,
  onSelectChange,
  buttonClass = '',
  optionsClass = '',
  srLabel,
}: Props) => {
  const [btnLabel, setBtnLabel] = useState(customLabel);

  useEffect(() => {
    if (selectedItem?.label) setBtnLabel(selectedItem.label);
    else if (selectedItem?.name) setBtnLabel(selectedItem.name);
  }, [selectedItem]);

  return (
    <Listbox value={selectedItem} onChange={(value) => onSelectChange(value)} as="div" className="relative">
      <Listbox.Label className="sr-only">{srLabel}</Listbox.Label>
      <Listbox.Button
        className={`bg-slate-400/10 text-slate-500 rounded-full px-3 py-1 flex items-center space-x-2 hover:bg-slate-400/20 dark:text-slate-400 ${buttonClass}`}
      >
        {btnLabel}
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options
          className={`
          absolute z-50 bg-white text-slate-700 text-sm rounded-md py-1 font-semibold tracking-wide ring-1 ring-slate-900/5 shadow-lg dark:bg-slate-800 dark:text-slate-300 dark:ring-0 focus:outline-none 
          ${optionsClass}
        `}
        >
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} disabled={option.unavailable} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`
                    flex items-center px-3 py-1 space-x-2 cursor-pointer 
                    ${selected ? 'text-cyan-500' : ''} ${active ? 'bg-slate-400/20' : ''}
                  `}
                >
                  {option.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Select;
