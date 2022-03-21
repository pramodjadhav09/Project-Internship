const internModel= require("../models/internModel")



const createIntern= async function (req, res){

    data=req.body;
    //collegeIdData= data.collegeName;

    const createdIntern= await internModel.create(data);

    res.status(200).send({status: true, data:createdIntern})
}

 

module.exports.createIntern=createIntern