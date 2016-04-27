window.onload = function(){
	var ref = new Firebase("https://hood-cop.firebaseio.com/");

	document.querySelector("#save").addEventListener('click',function(){
		var title = document.querySelector("#title").value;
		var body = document.querySelector("#body").value;

		var todo = {title:title,body:body};

		ref.push(todo);
	});

	ref.on('value',function(snapshot){
		snapshot.forEach(function(data){
			var ul = document.createTextNode(data.val().title + "=>" + data.val().body );
			document.querySelector("#result").appendChild(ul).appendChild(document.createElement("br"));
		});
	});

};