const collegeModel = require("../models/collegeModel");




//validation functions declaration

//function 1-
const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true
}

//function 2-
const isValidRequestBody = function (requestbody) {
    return Object.keys(requestbody).length > 0
}

//CREATECOLLEGE-

const createCollege = async function (req, res) {
    let requestbody = req.body;

    if (!isValidRequestBody(requestbody)) {
        res.status(400).send({ status: false, message: "Invalid request parameters. Please provide college details" })
    }

    //extract params
    const { name, fullName, logoLink } = requestbody; //object destructuring

    //validation starts----

    if (!isValid(name)) {
        res.status(400).send({ status: false, message: "Name is required" })
        return
    }

    if (!isValid(fullName)) {
        res.status(400).send({ status: false, message: "Full name is required" })
        return
    }

    if (!isValid(logoLink)) {
        res.status(400).send({ status: false, message: "Link/Url is required" })
        return
    }
    //validation ends------------


    const collegeData = { name, fullName, logoLink }
    let newCollegeData = await collegeModel.create(collegeData);

    res.status(201).send({ status: true, message: "college successfully created", data: newCollegeData })
}


module.exports.createCollege = createCollege