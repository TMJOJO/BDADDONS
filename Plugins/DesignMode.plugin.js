/**
 * @name DesignMode
 * @author Jotaro
 * @version 0.0.1
 * @description Quickly Edit Ui elements to troll. 
 */

class DesignMode {
  constructor() {
  }

  start() {
    document.designMode = 'on'
  }

  stop() {
    document.designMode = 'off'
    // Perform necessary cleanup or tear down of resources when the plugin is stopped
  }

  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = DesignMode;
