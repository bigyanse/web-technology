function handleError(func) {
	try {
		func();
	} catch(err) {
		console.log(err);
	}
}

handleError(() => {
	const circle = document.querySelector("cirlce");
	circle.style.backgroundColor = "green";
});

handleError(() => {
	document.getElementById("acceptCookies").addEventListener("click", () => {
		document.cookie = "name=bigyan";
		document.cookie = "address=koteshwor";
	});
});

handleError(() => {
	document.getElementById("showCookies").addEventListener("click", () => {
		const cookies = document.cookie.split("; ");
		const name = cookies[0].split("=")[1];
		const address = cookies[1].split("=")[1];
		alert(`Name: ${name}`);
		alert(`Address: ${address}`);
	});
});
