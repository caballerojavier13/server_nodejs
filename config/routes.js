module.exports.routes = {
  '/': {
    view: 'home/index'
  },

  'get /hotel/star': {
      controller    : 'HotelController',
      action        : 'star'
  }
};

 
