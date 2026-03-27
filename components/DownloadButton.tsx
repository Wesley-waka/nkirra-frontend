import React from 'react';
import { useRouter } from 'next/navigation';

interface DownloadButtonProps {
  store: 'appstore' | 'playstore';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  store, 
  href = "#", 
  className = "",
  onClick
}) => {
  const router = useRouter();
  const appStoreIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const playStoreIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.22.99.14l12.47-7.18-2.8-2.8-10.66 9.84zM.54 1.7C.2 2.03 0 2.57 0 3.28v17.44c0 .71.2 1.25.54 1.58l.08.08 9.77-9.77v-.23L.62 1.62l-.08.08zM20.11 10.53l-2.69-1.55-3.09 3.09 3.09 3.09 2.71-1.56c.77-.44.77-1.62-.02-2.07zM3.18.24l12.47 7.18-2.8 2.8L2.19.38A1.17 1.17 0 013.18.24z"/>
    </svg>
  );

  const storeContent = {
    appstore: {
      icon: appStoreIcon,
      subtitle: "Download on the",
      title: "App Store"
    },
    playstore: {
      icon: playStoreIcon,
      subtitle: "Get it on",
      title: "Google Play"
    }
  };

  const content = storeContent[store];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href !== "#") {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors w-fit ${className}`}
    >
      {content.icon}
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] text-gray-300">{content.subtitle}</span>
        <span className="text-sm font-semibold">{content.title}</span>
      </div>
    </button>
  );
};

export default DownloadButton;
