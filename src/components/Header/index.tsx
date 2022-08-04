import { useTheme } from 'next-themes';

const Header = () => {
  const { resolvedTheme, themes, setTheme } = useTheme();

  const newTheme = themes.filter((theme) => theme !== 'system' && theme !== resolvedTheme);

  return (
    <header className="sticky top-0 left-0 w-full h-14 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between border-b dark:border-slate-300/10">
        <span>My docs</span>
        <button onClick={() => setTheme(newTheme[0])} type="button">
          {newTheme[0]}
        </button>
      </div>
    </header>
  );
};

export default Header;
