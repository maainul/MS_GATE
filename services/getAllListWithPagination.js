

export const getAllListWithPagination = async ({req,model,queryKeys}) =>{

    //Query Parameter for Search
    const { search, sort } = req.query

    // conditions for searching filters
    let queryObject = {}

    // Check search for query
    if(search) {
       queryObject.name = { $regex: search, $options: "i" }
    }

    // Build Mongoose Query based on Search
    let queryResult = model.find(queryObject)

    // Sorting
    if(sort === 'latest') queryResult = queryResult.sort('-createdAt')
    if(sort === 'oldest') queryResult = queryResult.sort('createdAt')
    if(sort === 'a-z') queryResult = queryResult.sort(queryKeys[0])
    if(sort === 'z-z') queryResult = queryResult.sort(`${queryKeys[0]}`)

    // Pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit

    // Skip
    queryResult = queryResult.skip(skip).limit(limit)

    // Per Page Data Count - Total Data Count Based on Query Search
    const pageDataCount = await model.countDocuments(queryResult)

    // Total Data Count
    const totalDataCount = await model.countDocuments(queryObject)

    // Number Of Page
    const numberOfPage = Math.ceil(totalDataCount / limit)

    // Execute Query For List of Data
    const data = await queryResult

    return {
        pageDataCount,
        totalDataCount,
        numberOfPage,
        data
    }
}