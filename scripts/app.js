/**
 * All The Buttons
 */
const selectPlayersButtons = document.getElementsByClassName('select-player');
const playerCostCalculateBtn = document.getElementById('player-cost-calculate');
const totalCostCalculationBtn = document.getElementById('all-cost-calculate');
/**
 * All The Input field
 */
const costPerPlayerField = document.getElementById('per-player-cost');
const costForManagerField = document.getElementById('cost-for-manager');
const costForCoachField = document.getElementById('cost-for-coach');
/**
 * All the Results Field
 */
const totalPlayerCostField = document.getElementById('total-player-cost');
const totalCostField = document.getElementById('total-expenses');

/**
 * @description This function will calculate the selected players.
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @returns {*}
 */
function calculateSelectedPlayers() {
	const allSelectedPlayers = document.querySelectorAll('li');
	return allSelectedPlayers.length;
}

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
	const selectedPlayers = calculateSelectedPlayers();
	const li = document.createElement('li');
	console.log(selectedPlayers);
	if (selectedPlayers < 5) {
		li.innerHTML = `${selectedPlayers + 1}. ${playerName}`;
		allPlayerList.appendChild(li);

		selectPlayerButton.setAttribute('disabled', true);
	} else {
		alert('You can not select more than five players.');
	}
}

/**
 * @description This function will take the input field ID as parameter and return the value by converting that to an float value.
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @param {*} inputFieldID
 */
function getNumberValueFormInputField(inputFieldID) {
	const inputField = document.getElementById(inputFieldID);
	const inputFieldValueString = inputField.value;
	const inputFieldValueNumber = parseFloat(inputFieldValueString);
	return inputFieldValueNumber;
}

/**
 * @description
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @param {Number} totalPlayer
 * @param {Number} costPerPlayer
 * @returns {Number}
 */
function calculatePlayerCost(totalPlayer, costPerPlayer) {
	const playerCost = (totalPlayer * costPerPlayer).toFixed(2);
	return parseFloat(playerCost);
}

/**
 * Select Button functionality of Players Card
 */
for (const selectPlayerButton of selectPlayersButtons) {
	selectPlayerButton.addEventListener('click', function (event) {
		addPlayerToTheList(event);
	});
}

/**
 * Player Cost Calculation
 */
playerCostCalculateBtn.addEventListener('click', function (event) {
	const costPerPlayer = getNumberValueFormInputField('per-player-cost');

	const totalPlayer = calculateSelectedPlayers();
	let totalPlayerCost = 0;

	if (totalPlayer === 0) {
		alert('You have to select at least one player to calculate cost.');
	} else if (isNaN(costPerPlayer) || costPerPlayer <= 0) {
		alert('Please Provide valid cost.');
		costPerPlayerField.value = '';
	} else {
		totalPlayerCost = calculatePlayerCost(totalPlayer, costPerPlayer);
		totalPlayerCostField.innerText = totalPlayerCost;
	}
});
