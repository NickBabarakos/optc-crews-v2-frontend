'use client';

import {useState, useEffect, useMemo} from "react";

export default function useBannerTimer(startTime: string, endTime: string){
    const [now, setNow] = useState(() => new Date());

    useEffect(()=> {
        const timer = setInterval(()=> setNow(new Date()), 60000);
        return ()=> clearInterval(timer);
    }, []);

    const {start, end, totalDuration} = useMemo(()=> {
        const s = new Date(startTime);
        const e = new Date(endTime);
        return{
            start: s,
            end: e,
            totalDuration: e.getTime() - s.getTime(),
        };
    }, [startTime, endTime]);

    const isActive =  now >= start && now < end;
    const targetDate = isActive ? end : start;
    const label = isActive ? "Ends In" : "Starts In";
    const elapsed = now.getTime() - start.getTime();

    const percentage = (isActive && totalDuration >0)
        ? Math.min(100, Math.max(0, (elapsed/totalDuration)*100))
        :0;

    return {now, isActive, targetDate, label, percentage};
}