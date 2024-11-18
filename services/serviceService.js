const Service = require('../models/serviceModel');
const mongoose =require('mongoose')
const addService = async(serviceData) =>{
    const service = new Service(serviceData);
    return await service.save();
};

const getAllServices = async() =>{
    return await Service.find();
};

// const updatedService = async(id,serviceData)=>{
//     return await Service.findByIdAndUpdate(id,serviceData,{
//         new:true
//     });
// };

const updatedService = async (id, data) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
      }
  
      const service = await Service.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
  
      return service;
    } catch (error) {
      console.error('Error in Service Layer:', error.message);
      throw error;
    }
  };
  
  

const deleteService = async(id) =>{
    return await Service.findByIdAndDelete(id);
};

module.exports ={
    addService,
    getAllServices,
    updatedService,
    deleteService
};