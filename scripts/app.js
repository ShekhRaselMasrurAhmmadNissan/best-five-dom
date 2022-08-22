const selectPlayersButtons = document.getElementsByClassName('select-player');

/**
 * @description This function will add a player to the list after clicking on the Select button.
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @param {Element} event
 */
function addPlayerToTheList(event) {
	const selectPlayerButton = event.target;
	const playerName = event.target.parentNode.parentNode.children[0].innerText;
	const allPlayerList = document.getElementById('players-list');
	const allSelectedPlayers = document.querySelectorAll('li');
	const li = document.createElement('li');
	console.log(allSelectedPlayers.length);
	if (allSelectedPlayers.length < 5) {
		li.innerHTML = `${allSelectedPlayers.length + 1}. ${playerName}`;
		allPlayerList.appendChild(li);

		selectPlayerButton.setAttribute('disabled', true);
	} else {
		alert('You can not select more than five players.');
	}
}

for (const selectPlayerButton of selectPlayersButtons) {
	selectPlayerButton.addEventListener('click', function (event) {
		addPlayerToTheList(event);
	});
}
