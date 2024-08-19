import VisitorModel from "../model/visitorModel.js";
import {todayDateAndMonth} from "../utils/todayDateAndMonth.js";

export const getVisitorListByTodayWithPagination = async () => {
    // Get today's date
    const today = new Date();
    // Set hours, minutes, seconds, and milliseconds to 0 for comparison
    today.setHours(0, 0, 0, 0);
    // Get the start and end of today
    const startOfDay = new Date(today);
    const endOfDay = new Date(today);
    endOfDay.setDate(endOfDay.getDate() + 1); // Next day

    const monthName = "January"

    // Total Data Count for today
    const totalDataCount = await VisitorModel.countDocuments({
        createdAt: { $gte: startOfDay, $lt: endOfDay }
    });

    // Execute Query For List of Data for today
    const data = await VisitorModel.find({
        createdAt: { $gte: startOfDay, $lt: endOfDay }
    }).sort('-createdAt');

    return {
        monthName,
        totalDataCount,
        data
    };
};
