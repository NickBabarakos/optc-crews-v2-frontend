
import { CollectionState, OwnedCharacter } from '@/components/interactive-character/types';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useCollectionStore = create<CollectionState>()(
    persist(
        (set) => ({
            collection: {}, 

            toggleCharacter: (char:OwnedCharacter) => {
                set((state)=> {
                    const newCollection = {...state.collection};

                    if(newCollection[char.id]){
                        delete newCollection[char.id];
                    }else{
                        newCollection[char.id] = char;
                    }

                    return {collection: newCollection};
                });
            },
            toggleRainbow: (id: number) => {
                set((state) => {
                    const char = state.collection[id];
                    if (!char) return state;

                    return {
                        collection: {
                            ...state.collection,
                            [id]: {
                                ...char,
                                rainbowed: !char.rainbowed,
                            },
                        },
                    };
                });
            },
            toggleLimitBreakPlus: (id: number) => {
                set((state) => {
                    const char = state.collection[id];
                    if (!char) return state;

                    return {
                        collection: {
                            ...state.collection,
                            [id]: {
                                ...char,
                                limitBreakPlus: !char.limitBreakPlus,
                            },
                        },
                    };
                });
            },
            toggleRumbleLimitBreakPlus: (id: number) => {
                set((state) => {
                    const char = state.collection[id];

                    if (!char) return state;

                    return {
                        collection: {
                            ...state.collection,
                            [id]: {
                                ...char,
                                rumbleLimitBreakPlus: !char.rumbleLimitBreakPlus,
                            },
                        },
                    };
                });
            },

            addCopies: (id: number) => {
                set((state) => {
                    const char = state.collection[id];
                    if (!char || char.copies >= 10) return state;

                    return {
                        collection: {
                            ...state.collection,
                            [id]: {
                                ...char,
                                copies: char.copies + 1,
                            },
                        },
                    };
                });
            },

            removeCopies: (id: number) => {
                set((state) => {
                    const char = state.collection[id];
                    if (!char) return state;

                    const newCollection = { ...state.collection };

                    if (char.copies > 1) {
                        newCollection[id] = {
                            ...char,
                            copies: char.copies - 1,
                            rainbowed: false,
                        };
                    } else {
                        delete newCollection[id];
                    }

                    return { collection: newCollection };
                });
            },
        }),
            

        {
            name: 'optc-collection',
            version: 2,
            migrate: (persistedState: any, version: number) => {
 try {
                    // If no state or it's not an object, return fallback
                    if (!persistedState || typeof persistedState !== 'object') {
                        return { collection: {} } as CollectionState;
                    }

                    if (version < 2 && persistedState.collection && typeof persistedState.collection === 'object') {
                        const collection = persistedState.collection;
                        for (const id in collection) {
                            const item = collection[id];
                            // checking if state exists and it's an object
                            if (item && typeof item === 'object') {
                                if (item.limitBreakPlus === undefined) item.limitBreakPlus = false;
                                if (item.rumbleLimitBreakPlus === undefined) item.rumbleLimitBreakPlus = false;
                            }
                        }
                    }

                    return persistedState as CollectionState;
                } catch (error) {
                    //If parsing/migration error, we log the error and reutnr a default state
                    console.error('Failed to migrate collection store, resetting to initial state:', error);
                    return { collection: {} } as CollectionState;
                }
            },
        }
    )
);


    


