const endDate = '14 Aug 2022 1:00 AM';
document.getElementById('date').innerHTML = endDate;
const inputsTag = document.querySelectorAll('input');
console.log(inputsTag);
const CountDown = () => {
	const end = new Date(endDate);
	const now = new Date();

	const differ = (end - now) / 1000;
	if (differ < 0) return;
	// console.log(differ);
	differ;
	//days
	// console.log(inputsTag[0]);
	// console.log(Math.floor(differ / 3600 / 24));
	inputsTag[0].value = Math.floor(differ / 3600 / 24);
	//hours
	inputsTag[1].value = Math.floor(differ / 3600) % 24;
	//minutes
	inputsTag[2].value = Math.floor(differ / 60) % 60;
	//seconds
	inputsTag[3].value = Math.floor(differ) % 60;
};
CountDown();
setInterval(() => {
	CountDown();
}, 1000);
