import vehicleModel from "../model/vehicleModel.js"
import visitorModel from "../model/visitorModel.js"
import {todayDateAndMonth} from "../utils/todayDateAndMonth.js";

export const getIndexPageCount = async () =>{
    const vehicleTotal = await vehicleModel.countDocuments()
    const visitorTotal = await visitorModel.countDocuments()

    const {today,firstDayOfMonth} = todayDateAndMonth()

    // Get entries for today
    const visitorTodayTotal = await visitorModel.countDocuments({createdAt:{$gte:today}})
    const vehicleTodayTotal = await vehicleModel.countDocuments({createdAt:{$gte:today}})

    // Get entries for this month
    const visitorTotalCurrentMonth = await visitorModel.countDocuments({
        createdAt: {
            $gte: firstDayOfMonth, // Entries after or on the first day of this month
            $lte: today // Entries before or on the current date
        }
    });

    // Get Vehicle Current Month
    const vehicleTotalCurrentMonth = await vehicleModel.countDocuments({
         createdAt: {
            $gte: firstDayOfMonth, // Entries after or on the first day of this month
            $lte: today // Entries before or on the current date
        }
    })

    // Current Month and Year
    const currentMonth = today.toLocaleDateString('en-US',{month:'long'})
    const currentYear = today.getFullYear()

    return {
        vehicleTotal,
        visitorTotal,
        visitorTodayTotal,
        vehicleTodayTotal,
        visitorTotalCurrentMonth,
        vehicleTotalCurrentMonth,
        currentMonth,
        currentYear
    }
}