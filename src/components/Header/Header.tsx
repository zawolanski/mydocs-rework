import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, DesktopComputerIcon } from '@heroicons/react/outline';

import { Logo } from '@/components/Logo';
import { Select, SelectOption } from '@/components/Select';

const Header = () => {
  const { resolvedTheme, setTheme, theme } = useTheme();

  const themeOptions: SelectOption[] = [
    {
      id: 'light',
      name: (
        <>
          <SunIcon className="w-6" />
          <span>Light</span>
        </>
      ),
      label: <SunIcon className="w-6 text-cyan-500" />,
    },
    {
      id: 'dark',
      name: (
        <>
          <MoonIcon className="w-6" />
          <span>Dark</span>
        </>
      ),
      label: <MoonIcon className="w-6 text-cyan-500" />,
    },
    {
      id: 'system',
      name: (
        <>
          <DesktopComputerIcon className="w-6" />
          <span>System</span>
        </>
      ),
      label: resolvedTheme === 'dark' ? <MoonIcon className="w-6" /> : <SunIcon className="w-6" />,
    },
  ];

  const onSelectChange = (value?: SelectOption) => {
    if (value) setTheme(value.id.toString());
  };

  return (
    <header className="sticky top-0 left-0 p-4 lg:px-8 border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="max-w-7xl mx-auto flex items-center">
        <Logo />
        <div className="ml-auto flex">
          <Select
            options={themeOptions}
            selectedItem={themeOptions.find((option) => option.id === theme)!}
            onSelectChange={onSelectChange}
            buttonClass="!p-2"
            optionsClass="right-0 top-1 min-w-[8rem]"
            srLabel="Theme"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
