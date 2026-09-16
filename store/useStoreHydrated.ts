'use client';

import { useEffect, useState } from 'react';
import { useCollectionStore } from '@/store/useCollectionStore';

export function useStoreHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // 1. If local-storage is already read
    if (useCollectionStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }

    // 2.If it stills reading and awaiting finish event
    const unsub = useCollectionStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    return () => unsub();
  }, []);

  return hydrated;
}