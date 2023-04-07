/**
 * @name Removepopups
 * @author Jotaro
 * @version 0.1.0
 * @description remove every popup
 * @source https://github.com/TMJOJO/BDADDONS
 * @updateURL https://raw.githubusercontent/TMJOJO/BDADDONS/Removepopup.plugin.js
 */

class rpopup {

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
    // since discord will recreate the elements we dont need anythin here
 BdApi.showNotice(
    "You need to restart discord inorder to disable Removepopups",
    {
        type: "error",
        buttons: [
            {
                label: "Restart",
                onClick: () => location.reload(true)
            },
        ]
    }
);
  }


  onLoad() {
    this.start();
  }

  onUnload() {
    this.stop();
  }
}

module.exports = rpopup;
