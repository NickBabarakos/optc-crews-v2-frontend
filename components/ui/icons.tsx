export const StarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" />
    </svg>
);

export const RainbowGemIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            {/* Διαγώνιο gradient για πιο "φυσικό" rainbow εφέ */}
            <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="25%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="75%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            
            {/* Filter για διακριτικό glow γύρω από τις γραμμές */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <g filter="url(#glow)">
            <path 
                d="M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z" 
                stroke="url(#rainbowGradient)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export const XCloseButton = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 16 16" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3l10 10m0-10L3 13" />
  </svg>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowDownIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowUpIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SolidArrowUpIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 16 16" 
        fill="currentColor" 
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
        className={`overflow-visible ${className ?? ''}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6 8L2 8L2 6L8 0L14 6L14 8L10 8L10 16L6 16L6 8Z" />
    </svg>
);

export const MissingIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 64 64" 
        fill="currentColor" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path d="M56,64c2.211,0,4-1.789,4-4v-8.586L47.414,64H56z" />
            <path d="M4,60c0,2.211,1.789,4,4,4h8.586L4,51.414V60z" />
            <path d="M21,30h22c0.553,0,1-0.447,1-1s-0.447-1-1-1H21c-0.553,0-1,0.447-1,1S20.447,30,21,30z" />
            <path d="M60,0H4C1.789,0,0,1.789,0,4v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z" />
            <path d="M4,48.587L19.414,64h25.172L60,48.587V18H4V48.587z M21,26h22c1.657,0,3,1.344,3,3s-1.343,3-3,3H21 c-1.657,0-3-1.344-3-3S19.343,26,21,26z" />
        </g>
    </svg>
);


export const HamburgerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const InfoIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M290.671,135.434c37.324-3.263,64.949-36.175,61.663-73.498c-3.241-37.324-36.152-64.938-73.476-61.675 c-37.324,3.264-64.949,36.164-61.686,73.488C220.437,111.096,253.348,138.698,290.671,135.434z"></path>
        <path d="M311.31,406.354c-16.134,5.906-43.322,22.546-43.322,22.546s20.615-95.297,21.466-99.446 c8.71-41.829,33.463-100.86-0.069-136.747c-23.35-24.936-53.366-18.225-79.819,7.079c-17.467,16.696-26.729,27.372-42.908,45.322 c-6.55,7.273-9.032,14.065-5.93,24.717c3.332,11.515,16.8,17.226,28.705,12.871c16.134-5.895,43.3-22.534,43.3-22.534 s-12.595,57.997-18.869,87c-0.874,4.137-36.06,113.292-2.505,149.18c23.35,24.949,53.343,18.226,79.819-7.066 c17.467-16.698,26.729-27.373,42.908-45.334c6.55-7.263,9.009-14.054,5.93-24.706C336.66,407.733,323.215,402.01,311.31,406.354z"></path>
    </svg>
);

export const StepsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 122.353 122.354" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M36.913,86.333c6.3-0.399,11.4-6.8,14.2-16.1c0.6-2-1-3.9-3.1-3.8l-24.7,1.6c-2.1,0.1-3.4,2.3-2.6,4.2 C24.613,81.133,30.613,86.733,36.913,86.333z"></path>
        <path d="M49.513,55.333c3.1-0.2,5.6-2.8,5.6-6c0-4.9,0.5-10.4,1.3-16.4c1.9-13.7-1.5-32-18.6-32.9c-20.9-1.1-24.5,25.3-23.5,40.7 c0.3,4.2,0.9,8.2,1.8,11.9c0.7,2.8,3.3,4.7,6.2,4.5L49.513,55.333z"></path>
        <path d="M99.114,104.033l-24.7-1.6c-2.101-0.101-3.7,1.8-3.101,3.8c2.7,9.3,7.9,15.7,14.2,16.1c6.3,0.4,12.2-5.2,16.2-14.1 C102.513,106.333,101.213,104.233,99.114,104.033z"></path>
        <path d="M84.614,36.033c-17.101,0.9-20.5,19.2-18.601,32.9c0.8,6.1,1.2,11.5,1.3,16.399c0,3.2,2.5,5.8,5.601,6l27.1,1.8 c2.9,0.2,5.5-1.699,6.2-4.5c0.9-3.699,1.6-7.699,1.8-11.899C109.114,61.333,105.513,34.933,84.614,36.033z"></path>
    </svg>
);

export const ChancesIcon = ({ className }: { className?: string }) => (
    <svg viewBox="-64 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 25 25 65.52 25 90.51 0zm256 165.49c-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 24.99 24.99 65.52 24.99 90.51 0 25-24.99 25-65.51 0-90.51zm-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25z"></path>
    </svg>
);

export const PosterIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 42 42" 
        fill="currentColor" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            fillRule="evenodd" 
            d="M22.5,1.5h-14c-2.55,0-3,0.561-3,3v32c0,2.49,0.55,3,3,3h24c2.5,0,3-0.47,3-3v-22h-13V1.5z M35.5,11.5 l-10-10v10H35.5z" 
        />
    </svg>
);

export const ChevronIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18 8L12.2278 14.7343C12.108 14.8739 11.892 14.8739 11.7722 14.7343L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);