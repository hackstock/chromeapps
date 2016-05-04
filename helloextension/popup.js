window.onload = function(){
	document.querySelector("#btn").addEventListener("click",function(){
		// var count = document.querySelector("#nameField").value
		chrome.browserAction.setBadgeText({text: "40"});
	});
};