const serviceService = require('../services/serviceService');

const addService = async (req,res) =>{
    try {
        const service = await serviceService.addService(req.body);
        res.status(201).json(service);
    } catch (error) {
       res.status(500).json({
        message:'Error adding Service'
       }); 
    }
};

const getAllServices = async(req,res)=>{
    try {
        const services = await serviceService.getAllServices();
        res.json(services);
    } catch (error) {
        res.status(500).json({
            message:'Error retrieving service'
        });
    }
}

// const updatedService = async(req,res)=>{
//     try {
//         const updatedService = await serviceService.updatedService(req.params.id);
//         if (!updatedService) {
//             return res.status(404).json({
//                 message:'Service Not Found'
//             });
//         }
//         res.json(updatedService)
//     } catch (error) {
//         res.status(500).json({
//             message:'Error Updating Data'
//         });
//     }
// };


const updatedService = async (req, res) => {
    try {
      console.log('Updating Service:', req.params.id, req.body);
  
      const updatedService = await serviceService.updatedService(req.params.id, req.body);
  
      if (!updatedService) {
        console.log('Service Not Found');
        return res.status(404).json({ message: 'Service Not Found' });
      }
  
      res.json(updatedService);
    } catch (error) {
      console.error('Error Updating Data:', error.message);
      res.status(500).json({ message: 'Error Updating Data' });
    }
  };
  

const deleteService = async(req,res)=>{
    try {
        const deleteService = await serviceService.deleteService(req.params.id);
        if (!deleteService) {
            return res.status(404).json({
                message:'Service Not Found'
            });
        }
        res.json({
            message:'Service Deleted Successfully'
        });
    } catch (error) {
        req.status(500).json({
            message:'Error in deleting Data'
        });
    }
};

module.exports ={
    addService,
    getAllServices,
    updatedService,
    deleteService
}