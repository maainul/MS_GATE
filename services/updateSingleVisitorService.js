import VisitorModel from "../model/visitorModel.js";

export const updateSingleVisitorService = async ({ id, updatedData }) => {
    try {
        // Find the visitor by ID and update it
        const updateVisitor = await VisitorModel.findByIdAndUpdate(id, updatedData, { new: true })

        if (!updateVisitor) {
            return { success: false, message: 'Visitor not found' };
        }

        return { success: true, message: "Visitor Updated Successfully", data: updateVisitor }
    } catch (error) {
        console.error('Error updating visitor:', error);
        return { success: false, message: 'Error updating visitor', error };
    }
}
