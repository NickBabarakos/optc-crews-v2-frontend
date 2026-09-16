'use client'
import FilterAccordion from "@/components/filter-accordion/FilterAccordion";
import {SORT_OPTIONS, FILTER_SECTIONS } from "@/app/characters/_constants/filters";
import SortSelect from "@/components/filter-accordion/SortSelect";
import MultiSelect from "@/components/filter-accordion/MultiSelect";
import { useCharacterFilters } from "@/app/characters/_hooks/useCharacterFilters";



export default function CharacterSidebarContent(){
    const {filters, updateFilter, updateSort, clearAllFilters} = useCharacterFilters();

    
    return(
        <div className="flex flex-col flex-1 w-full bg-[#101729] border-r border-[#5c5c66] text-slate-100">
            {/*---Sidebar Header Panel --- */}
            <div className="w-full bg-[#1F293A] border-b border-slate-500 px-6 py-5 mb-6 flex items-center justify-between shadow-2xl">
                <span className="text-slate-200 font-extrabold text-[15px] uppercase tracking-[0.15em] border-l-4 border-[#2563EB] pl-3">Filters</span>
                <button 
                    onClick={clearAllFilters}
                    className="bg-[#2563EB] hover:bg-[#102A78] text-slate-200 px-3.5 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest  transition-all duration-200 active:scale-95 cursor-pointer"
                >Clear All</button>
            </div>

            <div className="px-3 flex flex-col gap-1">
                <FilterAccordion
                    name="Sort By"
                    isActive={filters.sorting.length >0}
                >
                    <SortSelect
                        options={SORT_OPTIONS}
                        selectedValue={filters.sorting}
                        onChange={updateSort}
                    />
                </FilterAccordion>

                {/*Dynamic Filter Sections */}
                {FILTER_SECTIONS.map((section) => {
                    const activeValues = filters[section.id] as string[];

                    return(
                        <FilterAccordion
                            key={section.id}
                            name={section.name}
                            isActive={activeValues.length > 0}
                        >
                            <MultiSelect
                                variant={section.variant}
                                options={section.options}
                                selectedValues={activeValues}
                                onChange={(newValues) => updateFilter(section.id, newValues)}
                            />
                        </FilterAccordion>
                    );
                })}
            </div>
        </div>
    )
}
