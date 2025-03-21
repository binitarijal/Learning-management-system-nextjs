import mongoose, { Schema} from "mongoose";

enum Status{
    Complete="complete",
    Pending="pending",
    Failed="failed"
}

interface Ipayment extends Document{
    student: mongoose.Types.ObjectId,
    course:mongoose.Types.ObjectId,
    amount: number,
    status:Status
}
const paymentSchema=new Schema<Ipayment>({
student:{
    type: Schema.Types.ObjectId,
    ref:"User"
},
course:{
    type: Schema.Types.ObjectId,
    ref:"Course"
},
amount:{
    type: Number,
    required:true
},
status:{
    type: String,
    enum:[Status.Complete,Status.Pending,Status.Failed],
    default: Status.Pending
}
})
const Payment= mongoose.models.Payment || mongoose.model("Payment", paymentSchema)