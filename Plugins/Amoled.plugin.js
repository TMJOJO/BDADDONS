/**
 * @name AmoledMode
 * @author Jotaro
 * @version 0.0.1
 * @description Makes discord visually easier on the eyes
 * @source https://github.com/TMJOJO/BDADDONS/main/Plugins/Amoled.plugin.js
 * @updateUrl https://raw.githubusercontent.com/TMJOJO/BDADDONS/main/Plugins/Amoled.plugin.js
 */

class AmoledMode {
  constructor() {
  }
/
  start() {
    document.body.classList.add("theme-amoled");
  }

  stop() {
    document.body.classList.remove("theme-amoled");
    // Perform necessary cleanup or tear down of resources when the plugin is stopped
  }

  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = AmoledMode;
