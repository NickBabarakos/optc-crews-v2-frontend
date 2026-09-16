import { HamburgerIcon } from "@/components/ui/icons";
import { useRouter } from "next/navigation";


export default function Navbar({onMenuClick}:{onMenuClick:()=>void}) {
    const router = useRouter();
    const handleLogoClick = () =>router.push('/');

    return(
        <header className="h-17 base-border-bottom-ui flex items-center px-6 sticky top-0 bg-navbar/80 backdrop-blur-md z-navbar">
            <button
                onClick={onMenuClick}
                className="p-2  mr-3 text-icon-muted hover:text-white transition-colors md:hidden" 
                aria-label="Open Menu"
            >
                <HamburgerIcon className="w-6 h-6"/>
            </button>

            <h1 
                className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
            >OPTC <span className="text-brand-blue">crews</span></h1>
        </header>
    )
}