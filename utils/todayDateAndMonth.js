

export const todayDateAndMonth = () =>{
    const today = new Date(); // Get today's date
    const firstDayOfMonth = new Date(Date.UTC(today.getFullYear(), today.getMonth(), 1)); // Get the first day of the current month

// Set hours, minutes, seconds, and milliseconds to 0 for comparison
    firstDayOfMonth.setUTCHours(0, 0, 0, 0);
    today.setUTCHours(0, 0, 0, 0);

    console.log("First day of the month:", firstDayOfMonth.toISOString());
    console.log("Today's date:", today.toISOString());

    return {today,firstDayOfMonth}
}