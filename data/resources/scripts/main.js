function Module(Manager) {
  const self = this;
  self.Manager = Manager;
  return self;
}

Module.prototype.main = function () {
  const self = this;
  const Manager = self.Manager;
  const { electron, remote } = Manager.libraries;

  return new Promise(function(resolve, reject) {
    console.log(`Inside ${Manager.options.app.name} remote main.js!`);
    return resolve();
  });
};

module.exports = Module;
