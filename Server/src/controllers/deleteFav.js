const {Favorite} = require('../DB_connection')


async function deleteFav(req,res){
    try {
        const {id} = req.params
        
        await Favorite.destroy({where:{id}})

        const allfavorite = await Favorite.findAll()
        
        return res.status(200).json(allfavorite)
    
    
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
    
    
    }
    
    module.exports = deleteFav;