import mongoose,{Schema} from "mongoose";
interface Ienrollment extends Document{
    course: mongoose.Types.ObjectId,
    student: mongoose.Types.ObjectId,
    enrolledAt: Date
}

const enrollmentSchema=new Schema<Ienrollment>({
student:{
    type: Schema.Types.ObjectId,
    ref:"User"
},
course:{
    type: Schema.Types.ObjectId,
    ref:"Course"

},
enrolledAt:{
    type: Date,
    default: Date.now()
}
})
const Enrollment=mongoose.models.Enrollment|| mongoose.model("Enrollment", enrollmentSchema)
export default Enrollment