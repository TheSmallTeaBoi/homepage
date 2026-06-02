window.script = {
    unixDateFormat(d = new Date()) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        const utc3 = new Date(d.getTime() - 3 * 60 * 60 * 1000);

        const day = days[utc3.getUTCDay()];
        const mon = months[utc3.getUTCMonth()];
        const date = String(utc3.getUTCDate()).padStart(2, " ");
        const hh = String(utc3.getUTCHours()).padStart(2, "0");
        const mm = String(utc3.getUTCMinutes()).padStart(2, "0");
        const ss = String(utc3.getUTCSeconds()).padStart(2, "0");
        const year = utc3.getUTCFullYear();

        return `${day} ${mon} ${date} ${hh}:${mm}:${ss} -03 ${year}`;
    },
};
