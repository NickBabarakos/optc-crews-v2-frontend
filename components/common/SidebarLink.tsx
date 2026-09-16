import Image from 'next/image'
import Link from 'next/link'

interface SidebarLinkProps{
    image?: string;
    text: string;
    bgColor?: string;
    patternImg?: string;
    folder?: string;
    isActive?: boolean;
}

export default function SidebarLink({image, text, bgColor, patternImg, folder, isActive} : SidebarLinkProps){
    //Fixes the href (eg. My Crews -> /my-crews) 
    const slug = text.toLowerCase().replace(/\s+/g,'-');
    const safeHref = folder ? `/${folder}/${slug}` : `/${slug}`;

    const bgStyle = !image ?{
        backgroundColor: bgColor || '#27272a',
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4))`
    } : {};

    return(
        <Link
            href={safeHref}
            className={`
                        group relative flex items-center justify-center w-full aspect-600/150 overflow-hidden rounded-xl 
                        border-2 border-solid transition-all duration-500
                ${isActive 
                    ? ` border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)]` 
                    : `border-white/50 hover:border-white hover:shadow-[0_15px_30px-10px_rgba(0,0,0,0.6)]`} 
                `}
            >
            {image ? (
                <>
                    <Image
                        src={image}
                        alt={text}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
                    />
                    <div className={`absolute inset-0 transition-opacity duration-500 
                        ${isActive ? 'opacity-30 bg-black' : 'opacity-60 bg-slate-950 group-hover:opacity-40'}`} 
                    />
                </>

            ):(
                <>
                <div 
                    className="absolute inset-0 transition-all duration-500"
                    style={bgStyle}
                />

                {patternImg && (
                    <div className={`absolute inset-0 pointer-events-none grayscale-100 mix-blend-overlay transition-opacity group-hover:opacity-100
                            ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                        style={{
                            backgroundImage: `url(${patternImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                )}
                </>
            )}

                {/*Content*/}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className={`relative text-m font-black uppercase tracking-[0.25em] transition-all duration-500 drop-shadow-md
                    ${isActive 
                        ? 'text-white' 
                        : 'text-white/70 group-hover:text-white'}`}>
                    {text}
                </span>
            </div>
                
                {isActive && !image && (
                <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-white/30 blur-[1px]" />
                )}
            </Link>
    )
}

