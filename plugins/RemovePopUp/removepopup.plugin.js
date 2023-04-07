/**
 * @name Removepopups
 * @author Jotaro
 * @version 0.1.0
 * @description remove every popup
 * @source https://github.com/TMJOJO/BDADDONS
 * @updateURL https://raw.githubusercontent/TMJOJO/BDADDONS/Removepopups.plugin.js
 */

class rpopup {
  observe;

start() { 
	// ty to stern and bettlee for teaching me about mutation observers
 // and ty to yentis for some code
this.observer = new MutationObserver(function(mutations_list) {
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

this.observer.observe(document.querySelector("#app-mount"), { subtree: true, childList: true });
}
  stop() {
   // ty to yentis for this right here
 this.observer.disconnect();
    this.observer = undefined;
  }


  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = rpopup;
