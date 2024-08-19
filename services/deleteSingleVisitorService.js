import VisitorModel from "../model/visitorModel.js";

export const deleteSingleVisitorService = async ({ id}) => {
    try {
        // Find the visitor by ID and Delete it
        const deleteVisitor = await VisitorModel.findByIdAndDelete(id)

        if (!deleteVisitor) {
            return { success: false, message: 'Visitor not found' };
        }

        return { success: true, message: "Visitor Deleted Successfully", data: deleteVisitor }
    } catch (error) {
        console.error('Error Deleted visitor:', error);
        return { success: false, message: 'Error deleted visitor', error };
    }
}
