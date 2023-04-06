/**
 * @name NoSlow
 * @author Jotaro
 * @version 0.1.0
 * @description just hate the annoying message that pops up when you spam in a SPAM channel? this plugin is for you! though your messages might get ratelimited
 * @source https://github.com/TMJOJO/BDADDONS
 * @updateURL raw.githubusercontent/TMJOJO/BDADDONS/NoSlow.plugin.js
 */

class NoSlow {

start() {
const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
				 var element = document.getElementsByClassName("backdrop-2ByYRN withLayer-2VVmpp");
        var stuff = document.getElementsByClassName("focusLock-bHVOlV");
        while (stuff.length > 0) targetnode[0].remove();
        while (element.length > 0) element[0].remove();
			}
		);
	});
});

observer.observe(document.querySelector("#app-mount"), { subtree: true, childList: false });
}
  stop() {
    observer.disconnect
    // no need for anything here as discord would recreate
  }

  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = NoSlow;
