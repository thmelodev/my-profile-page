import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (
                isOpenMenu &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpenMenu(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpenMenu(false);
            }
        };

        const handleScroll = () => {
            if (isOpenMenu) {
                setIsOpenMenu(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpenMenu]);

    return (
        <nav className="bg-background border-b-2 border-b-main-purple rounded-b-lg w-full h-16 flex items-center justify-between px-4 fixed top-0 z-20">
            <div className="text-xl text-white">
                <Typewriter
                    words={["Hello World!"]}
                    loop={true}
                    cursor={false} 
                    typeSpeed={150} 
                    deleteSpeed={150}
                    delaySpeed={1000} 
                    
                />
            </div>

            <Menu
                ref={buttonRef}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="cursor-pointer md:hidden text-white"
            />

            {isOpenMenu && (
                <div
                    ref={menuRef}
                    className="absolute top-20 right-4 bg-background border-2 border-main-purple rounded-lg p-4 z-50"
                >
                    <ul className="flex flex-col gap-4 text-lg">
                        <li>Sobre mim</li>
                        <li>Competências</li>
                        <li>Experiência Profissional</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};
