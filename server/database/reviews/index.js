import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref: "Foods"},
    restaurant: {type: mongoose.Types.ObjectId, ref: "Restaurant"},
    user: {type: Number, required: true},
    reviewText: {type: String, required: true},
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }]
},
{
    timestamps: true
}
);

export const ReviewModel = mongoose.model("Reviews", ReviewsSchema);