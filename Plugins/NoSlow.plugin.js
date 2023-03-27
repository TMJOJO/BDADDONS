/**
 * @name NoSlow
 * @author Jotaro
 * @version 0.0.1
 * @description just hate the annoying message that pops up when you spam in a SPAM channel? this plugin is for you! though your messages might get ratelimited
 * @source https://github.com/TMJOJO/BDADDONS/
 * @updateUrl https://raw.githubusercontent.com/TMJOJO/BDADDONS/main/Plugins/NoSlow.plugin.js
 */

class NoSlow {
  constructor() {
  }

  start() {
  location.reload(true);
  const elements = document.getElementsByClassName("backdrop-2ByYRN withLayer-2VVmpp");

  while (elements.length > 0) elements[0].remove();

  const elem= document.getElementsByClassName('focusLock-bHVOlV')
  
   for (let i = elem.length; 0 < i ; )
     elem[--i].remove();
  }

  stop() {
     location.reload(true);
  }

  onLoad() {
    location.reload
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = NoSlow;
