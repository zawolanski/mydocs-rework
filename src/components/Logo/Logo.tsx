import { DocumentTextIcon } from '@heroicons/react/solid';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

interface Props {
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ size = 'medium' }: Props) => {
  let iconSize = 'w-9';
  let textSize = 'text-2xl';

  if (size === 'small') {
    iconSize = 'w-7';
    textSize = 'text-xl';
  }

  if (size === 'large') {
    iconSize = 'w-11';
    textSize = 'text-3xl';
  }

  const [t] = useTranslation('common');

  return (
    <Link href="/">
      <a className="flex gap-0.5 items-center">
        <span className="sr-only">{t('logoInformationText')}</span>
        <DocumentTextIcon className={`${iconSize} text-cyan-500`} />
        <span className={`${textSize} font-semibold tracking-wide`}>DOCS</span>
      </a>
    </Link>
  );
};

export default Logo;
