export const getTimeLeft = (target:Date, current: Date) => {
        const diff = target.getTime() - current.getTime();
        if (diff <= 0) return "0D 00H 00M";

        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff / (1000*60*60))%24);
        const minutes = Math.floor((diff/(1000*60))%60);

        return `${days}D ${hours.toString().padStart(2,'0')}H ${minutes.toString().padStart(2, '0')}M`;
    }

const localDateFormatter = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
});
export const formatLocalTime = (date: Date) =>{ return localDateFormatter.format(date).replace(',', '');}
