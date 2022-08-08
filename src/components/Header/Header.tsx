import { TranslateIcon } from '@heroicons/react/outline';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Select, SelectOption } from '@/components/Select';
import { getLanguageOptions, getThemeOptions } from './getOptions';

const Header = () => {
  const router = useRouter();
  const [t] = useTranslation();
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [locales] = useState(getLanguageOptions(router.locales || ['en']));

  const onThemeChange = (value?: SelectOption) => {
    if (value) setTheme(value.id.toString());
  };

  const onLanguageChange = (value?: SelectOption) => {
    if (value && value.id.toString() !== router.locale) {
      router.push(router.pathname, router.asPath, { locale: value.id.toString() });
      localStorage.setItem('locale', value.id.toString());
    }
  };

  return (
    <header className="sticky top-0 left-0 border-b border-slate-900/10 p-4 dark:border-slate-300/10 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center">
        <Logo />
        <div className="ml-auto flex space-x-2">
          <Select
            options={locales}
            selectedItem={locales.find((option) => router.locale === option.id)!}
            onSelectChange={onLanguageChange}
            customLabel={<TranslateIcon className="w-6" />}
            buttonClass="!p-2"
            optionClass="text-lg font-medium py-1 px-3 uppercase"
            srLabel={t('srLanguage')}
          />
          <Select
            options={getThemeOptions(resolvedTheme)}
            selectedItem={getThemeOptions(resolvedTheme).find((option) => option.id === theme)!}
            onSelectChange={onThemeChange}
            buttonClass="!p-2"
            optionsClass="right-0 min-w-[8rem]"
            srLabel={t('srTheme')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
