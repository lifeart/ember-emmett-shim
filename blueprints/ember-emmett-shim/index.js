/*jshint node:true*/
module.exports = {
  description: 'Emmett package',
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'emmett', target: '^3.1.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
};
