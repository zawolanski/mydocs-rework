import { Listbox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { PanelTransition } from '../Transition';
import { SelectOption } from './types';

interface Props {
  selectedItem: SelectOption;
  options: SelectOption[];
  onSelectChange: (option?: SelectOption) => void;
  srLabel?: string;
  customLabel?: React.ReactNode;
  buttonClass?: string;
  optionsClass?: string;
  optionClass?: string;
}

const Select = ({
  selectedItem,
  customLabel,
  options,
  onSelectChange,
  buttonClass = '',
  optionsClass = '',
  optionClass = '',
  srLabel,
}: Props) => {
  const [btnLabel, setBtnLabel] = useState(customLabel);

  useEffect(() => {
    if (selectedItem?.label) setBtnLabel(selectedItem.label);
    else if (selectedItem?.name && !customLabel) setBtnLabel(selectedItem.name);
  }, [customLabel, selectedItem]);

  return (
    <Listbox value={selectedItem} onChange={(value) => onSelectChange(value)} as="div" className="relative">
      <Listbox.Label className="sr-only">{srLabel}</Listbox.Label>
      <Listbox.Button
        className={`flex items-center space-x-2 rounded-full bg-slate-400/10 px-3 py-1 text-slate-500 transition-colors hover:bg-slate-400/20 dark:text-slate-400 ${buttonClass}`}
      >
        {btnLabel}
      </Listbox.Button>
      <PanelTransition>
        <Listbox.Options
          className={`absolute top-1 z-50 rounded-md bg-white py-1 text-sm font-semibold tracking-wide text-slate-700 shadow-lg ring-1 ring-slate-900/5 focus:outline-none dark:bg-slate-800 dark:text-slate-300 dark:ring-0 ${optionsClass}`}
        >
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} disabled={option.unavailable} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`flex cursor-pointer items-center space-x-2 px-3 py-1 
                    ${selected ? 'text-cyan-500' : ''} ${active ? 'bg-slate-400/20' : ''} ${optionClass}
                  `}
                >
                  {option.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </PanelTransition>
    </Listbox>
  );
};

export default Select;
