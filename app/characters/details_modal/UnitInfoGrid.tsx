import { CharacterSummary } from "@/app/characters/_types/characters";
import { UnitForm, UnitInfoGirdProps } from "@/app/characters/_types/details-modal";
import { useUnitFormData } from "@/app/characters/_hooks/useUnitFormData";
import { UnitIdentityRow } from "@/app/characters/details_modal/info-cards/UnitIdentityRow";
import { PotentialCard } from "@/app/characters/details_modal/info-cards/PotentialCard";
import { StatGrid } from "@/app/characters/details_modal/info-cards/StatGrid";
import { ShopReferenceGrid } from "@/app/characters/details_modal/ShopReferenceGrid";
import LLBCounter from "@/app/characters/details_modal/info-cards/LLBCounter";
import { CategoryCard } from "@/app/characters/details_modal/info-cards/CategoryCard";
import { TagsCard } from "@/app/characters/details_modal/info-cards/TagsCard";



export function UnitInfoGrid({char, form, filterByTag}: UnitInfoGirdProps){
    const {types, classes, potentials, tags, stats} = useUnitFormData(char, form);

    return(
        <div className="flex flex-col gap-3">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">

                <div className="flex flex-col gap-2">
                    <UnitIdentityRow 
                        types={types}
                        classes={classes}
                        stars={char.stars}
                        cost={char.cost}
                    />
                    <PotentialCard potentials={potentials}/>

                    <StatGrid items={stats}/>

                    {char.unitItems && char.unitItems.length > 0 && (
                        <ShopReferenceGrid header="Copies" items={char.unitItems} />
                    )} 
                </div>

                <div className="flex flex-col gap-2">
                    <LLBCounter id={char.id} />
                    <CategoryCard category={char.category} stars={char.stars}/>
                    <TagsCard tags={tags} onTagClick={filterByTag}/>
                    {char.skullItems && char.skullItems.length > 0 && (
                        <ShopReferenceGrid header="Skulls" items={char.skullItems} />
                    )}

                </div>
            </div>
        </div>
        
    );
}

