'use client'
import SearchBar from '@/components/ui/SearchBar';
import ResultPanel, { PanelItem } from '@/components/ui/ResultPanel';
import BaseToolbar from '@/components/layout/BaseToolbar';
import { useCharacterToolbarState } from '@/app/characters/_hooks/useCharacterToolbarState';
import ToggleButton from '@/components/ui/ToggleButton';

export default function CharactersToolbar({stats}: {stats:PanelItem[]}) {
    const {activeMode, showLLB, initialSearch, isPending, cycleMode, toggleLLB, handleSearch} = useCharacterToolbarState();

    const searchBarSection = (
        <div className="w-full sm:max-w-md md:max-w-lg">
            <SearchBar
                key={initialSearch}
                handleSearch={handleSearch}
                buttonClassName="bg-[#E13D39] hover:bg-red-700 text-white text-[10px] font-extrabold uppercase tracking-widest"
                inputClassName="text-white placeholder:text-slate-500 font-medium"
                buttonName={isPending ? "..." : "Search"}
                placeholder="Search character name or ID..."
                initialValue={initialSearch}
            />
        </div>
    );

    const countersSection = (
        <>
        <div className="flex items-center gap-2">
            <ToggleButton 
                onClick={cycleMode}
                isActive={activeMode.context !== 'normal'}
            >
                {activeMode.label}
            </ToggleButton>

            <ToggleButton
                onClick={toggleLLB}
                isActive={showLLB}
            >
                Lvl
            </ToggleButton>

            <ResultPanel items={stats} />
        </div>
        </>
    );

    return(
        <BaseToolbar
            variant="characters"
            left={searchBarSection}
            right={countersSection}
        />
    );
}