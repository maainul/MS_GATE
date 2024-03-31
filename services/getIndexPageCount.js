import vehicleModel from "../model/vehicleModel.js"
import visitorModel from "../model/visitorModel.js"

export const getIndexPageCount = async () =>{
    const vehicleTotal = await vehicleModel.countDocuments()
    const visitorTotal = await visitorModel.countDocuments()

    // Get Today's Date
    const today = new Date()
    // Set hours, minutes, seconds, and milliseconds to 0 for comparison
    today.setHours(0,0,0,0) 

    // Get entries for today
    const visitorTodayTotal = await visitorModel.countDocuments({createdAt:{$gte:today}})
    const vehicleTodayTotal = await vehicleModel.countDocuments({createdAt:{$gte:today}})

    // Get the first day of the current Month
    const firstDayOfMonth = new Date(today.getFullYear(),today.getMonth(),1)

    // Current Month
    const currentMonth = today.toLocaleDateString('en-US',{month:'long'})
    const currentYear = today.getFullYear()

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