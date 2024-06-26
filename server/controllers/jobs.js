const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Ticket = require('../models/Ticket')
//const { accessSync } = require('fs')
//const puppeteer=require('puppeteer ')
//const path=require('path');
// const getAllJobs = async (req, res) => {
//   const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
//   res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
// }
// const getJob = async (req, res) => {
//   const {
//     user: { userId },
//     params: { id: jobId },
//   } = req

//   const job = await Job.findOne({
//     _id: jobId,
//     createdBy: userId,
//   })
//   if (!job) {
//     throw new NotFoundError(`No job with id ${jobId}`)
//   }
//   res.status(StatusCodes.OK).json({ job })
// }

const createTicket = async (req, res) => {
  req.body.userId = req.user.userId
 
  const ticket = await Ticket.create(req.body)
  res.status(StatusCodes.CREATED).json({ ticket })
  
}
const getTicket = async (req, res) => {

  const {id} = req.params
  const ticket = await Ticket.find({_id:id})
  res.status(StatusCodes.CREATED).json({ ticket })
}

const getAllTicket = async (req, res) => {

    // req.body.createdBy = req.user.userId
    const tickets = await Ticket.find({userId:req.user.userId})
    res.status(StatusCodes.OK).json({ tickets })
  }

// const updateJob = async (req, res) => {
//   const {
//     body: { company, position },
//     user: { userId },
//     params: { id: jobId },
//   } = req

//   if (company === '' || position === '') {
//     throw new BadRequestError('Company or Position fields cannot be empty')
//   }
//   const job = await Job.findByIdAndUpdate(
//     { _id: jobId, createdBy: userId },
//     req.body,
//     { new: true, runValidators: true }
//   )
//   if (!job) {
//     throw new NotFoundError(`No job with id ${jobId}`)
//   }
//   res.status(StatusCodes.OK).json({ job })
// }

// const deleteJob = async (req, res) => {
//   const {
//     user: { userId },
//     params: { id: jobId },
//   } = req

//   const job = await Job.findByIdAndRemove({
//     _id: jobId,
//     createdBy: userId,
//   })
//   if (!job) {
//     throw new NotFoundError(`No job with id ${jobId}`)
//   }
//   res.status(StatusCodes.OK).send()
// }

// const generateReport=async(req,res)=>{

//   try{
//     const browser= await puppeteer.launch ();
//     const page= await browser.newPage();
//    await page.goto('http://localhost:3000/bookingsystem',{
//     waitUntil:"networkidle2"
//    }) ;    //change later
    
//    page.setViewport({ width:1680 ,height:1050});

//    const pdfn= await page.pdf({
//     path:`${path.join(__dirname,'../src/pages/downloads'+".pdf")}`,
//     format: A4
//    });
// await browser.close();

// const pdfURL=path.join(__dirname,'../src/pages/downloads'+".pdf")
// res.set({
//   "Content-Type":"application/pdf",
//   "Content-Length":pdfn.length
// });
// res.sendfile(pdfURL);


//   }catch(error){
//     console.log(error.message)
//   }

  
//};
module.exports = {
  createTicket,
getAllTicket,
getTicket ,

//   updateJob,
//   getJob,
}
