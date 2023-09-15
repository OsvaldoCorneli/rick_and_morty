const axios  = require("axios");



async function getCharById(req, res) {
    
const { id } = req.params;

  
    try {
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      
      if (data.name) {
        return res.status(200).json(data);
      } else {
        return res.status(404).send("Not Found");
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

module.exports = getCharById;