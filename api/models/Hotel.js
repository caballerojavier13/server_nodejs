/**
 * Hotel
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	id_hotel:{
  		type:'integer',
    	required: true
  	},
  	nombre:'string',
  	descripcion:'text',
  	latitud:'float',
  	longitud:'float',
  	imagen:'string',
  	logo:'string',
  	estrella:'integer'
    
  }

};
