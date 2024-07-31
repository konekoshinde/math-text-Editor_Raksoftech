
import { connect } from "@/dbConfig/dbConfig";
import Equation from "@/model/equations";


export const POST=async(req)=>{
    const request=await req.json();

    console.log(request);

    try{
        await connect();
        
        const found= await Equation.exists({"Equation": request.Equation});
        if(!found){
            await Equation.create({
                "Equation":request.Equation
            })
        }
        return Response.json("Successfully stored equation");
    }
    catch(e){
        console.log(e)
        return Response.json(e)
    }
    return Response.json('ok')
}