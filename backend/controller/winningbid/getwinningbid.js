const Bid =require('../../models/winningBidModel')

const getBid=async(req,res)=>{
    try{
        const allBids=await Bid.find().sort({createdAt:-1}).populate('productID').populate('buyerID')

        res.json({
            message:"All Bids",
            error:false,
            success:true,
            data:allBids
        })
        
    }catch(err){
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=getBid