/**
 * @name NoSlow
 * @author Jotaro
 * @version 0.0.1
 * @description just hate the annoying message that pops up when you spam in a SPAM channel? this plugin is for you! though your messages might get ratelimited
 * @source https://github.com/TMJOJO/BDADDONS
 * @updateURL raw.githubusercontent/TMJOJO/BDADDONS/NoSlow.plugin.js
 */

class NoSlow {

start() {
  function del() {
  const elements = document.getElementsByClassName("focusLock-bHVOlV");

  while (elements.length > 0) elements[0].remove();

  const element = document.getElementsByClassName("backdrop-2ByYRN withLayer-2VVmpp");

  while (element.length > 0) element[0].remove();
  }
  setInterval(del, 50); // repeat function every 0.05 secs so that pesky slow thing gets no chance to come back
}
  stop() {
    location.reload(true);
  }

  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = NoSlow;
