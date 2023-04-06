/**
 * @name removepopup
 * @author Jotaro
 * @version 0.1.0
 * @description remove every pop up
 * @source https://github.com/TMJOJO/BDADDONS
 * @updateURL https://raw.githubusercontent/TMJOJO/BDADDONS/removepopup.plugin.js
 */

class removepopup { 

start() {
const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
				 var element = document.getElementsByClassName("backdrop-2ByYRN withLayer-2VVmpp");
        var stuff = document.getElementsByClassName("focusLock-bHVOlV");
        while (stuff.length > 0) stuff[0].remove();
        while (element.length > 0) element[0].remove();
			}
		);
	});
});

observer.observe(document.querySelector("#app-mount"), { subtree: true, childList: true });
}
  stop() {
    // no need for anything here as discord would recreate
   // im trying to figure out what to put here
  }

  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = removepopup;
