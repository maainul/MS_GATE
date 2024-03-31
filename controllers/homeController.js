import { getIndexPageCount } from "../services/getIndexPageCount.js";

export const getHomePageDataController = async (req, res) => {
    try {
        const data = await getIndexPageCount({ req });
        return res.status(200).json({
            success: true,
            message: 'mainul',
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error In Get All Vehicle List',
            error: error.message || error,
        });
    }
};