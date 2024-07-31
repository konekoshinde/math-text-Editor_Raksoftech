import mongoose from "mongoose";

const equationSchema = new mongoose.Schema({
    
    Equation:{
        type:String,
        required:true,
    }

})

const Equation = mongoose.models.equations || mongoose.model("equations", equationSchema);

export default Equation;