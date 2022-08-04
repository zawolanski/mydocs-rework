import { useTheme } from 'next-themes';

import Logo from '@/components/Logo';

const Header = () => {
  const { resolvedTheme, themes, setTheme } = useTheme();

  const newTheme = themes.filter((theme) => theme !== 'system' && theme !== resolvedTheme);

  return (
    <header className="sticky top-0 left-0 p-4 lg:px-8 border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="max-w-7xl mx-auto flex items-center">
        <Logo />
        <div className="ml-auto">
          <button onClick={() => setTheme(newTheme[0])} type="button">
            {newTheme[0]}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
