import SidebarLink from "../common/SidebarLink"

const links = [
    {text: 'Characters', image: '/buttons-bg/characters-bg.png'},
    {text: 'My Crews', image: '/buttons-bg/kizuna-clash-bg.png'},
    {text: 'Banners', image: '/buttons-bg/banners-bg.png'},
    {text: 'Crews', image: '/buttons-bg/treasure-map-bg.png'},
    {text: 'Rumble', image: '/buttons-bg/pka-bg.png'},
    {text: 'Shops', image: '/buttons-bg/garps-challenge-bg.png'},
    {text: 'Guides', image: '/buttons-bg/forest-of-training-bg.png'},
    {text: 'Archive', image: '/buttons-bg/clash-bg.png'},
]
export default function HomeSidebarContent(){
    return(
        <div className="flex flex-col gap-4 p-4">
            {links.map((link) => (
                <SidebarLink key={link.text} text={link.text} image={link.image} />
            ))}
        </div>
    )
}