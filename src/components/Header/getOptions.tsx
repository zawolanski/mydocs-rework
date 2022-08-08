import { SelectOption } from '@/components/Select';
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';

export const getThemeOptions = (resolvedTheme: string | undefined): SelectOption[] => [
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

export const getLanguageOptions = (locales: string[]): SelectOption[] =>
  locales.map((locale) => ({
    id: locale,
    name: locale,
  }));
