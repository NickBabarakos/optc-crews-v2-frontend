'use client'
import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PersistQueryClientProvider, Persister, PersistedClient } from '@tanstack/react-query-persist-client'
import { get, set, del } from 'idb-keyval'

const ONE_DAY = 1000*60*60*24;

function createIDBPersister(idbKey: string = 'OPTC_QUERY_CACHE_IDB'): Persister {
    return {
        persistClient: async (client: PersistedClient) => {
            await set(idbKey, client);
        },
        restoreClient: async () => {
            return await get<PersistedClient>(idbKey);
        },
        removeClient: async () => {
            await del(idbKey);
        },
    };
}


export default function QueryProvider({ children} : {children: React.ReactNode}){

    const [queryClient] = useState(()=> new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: ONE_DAY,
                gcTime: ONE_DAY*2,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                refetchOnMount: false
            },
        },
    }))

    const [persister] = useState(() => {
        if (typeof window !== 'undefined') {
            return createIDBPersister();
        }
        return undefined;
    });



    if (!persister){
        return (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        )
    }

    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister,
                maxAge: ONE_DAY,
                buster: 'v2',
            }}
            onSuccess={() => {
                console.log("IndexedDB Cache loaded successfully");
            }}
        >
            {children}
        </PersistQueryClientProvider>
    );
}