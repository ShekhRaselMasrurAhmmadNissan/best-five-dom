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

function resetAllField() {
	costPerPlayerField.value = '';
	costForManagerField.value = '';
	costForCoachField.value = '';
	totalPlayerCostField.innerText = 0;
	totalCostField.innerText = 0;
}

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

		resetAllField();
		selectPlayerButton.setAttribute('disabled', true);
	} else {
		alert('You can not select more than five players.');
	}
}

/**
 * @description This function will take the input field ID as parameter and return the value by converting that to an float value.
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @param {String} inputFieldID
 * @returns {Number}
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
 * @param {String} elementFieldID
 * @returns {Number}
 */
function getNumberValueFromElementField(elementFieldID) {
	const elementField = document.getElementById(elementFieldID);
	const elementFieldValueString = elementField.innerText;
	const elementFieldValueNumber = parseFloat(elementFieldValueString);
	return elementFieldValueNumber;
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
 * @description
 * @author Shekh Rasel Masrur Ahmmad
 * @date 22/08/2022
 * @param {Number} playerCost
 * @param {Number} costForManager
 * @param {Number} costForCoach
 * @returns {Number}
 */
function calculateTotalCost(playerCost, costForManager, costForCoach) {
	const totalCost = (playerCost + costForManager + costForCoach).toFixed(2);
	return parseFloat(totalCost);
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

/**
 * Total Cost Calculation
 */
totalCostCalculationBtn.addEventListener('click', function (event) {
	const costForManager = getNumberValueFormInputField('cost-for-manager');
	const costForCoach = getNumberValueFormInputField('cost-for-coach');
	const playerCost = getNumberValueFromElementField('total-player-cost');
	let totalCost = 0;

	if (playerCost === 0) {
		alert('Calculate Player Cost First');
	} else if (
		isNaN(costForManager) ||
		isNaN(costForCoach) ||
		costForManager <= 0 ||
		costForCoach <= 0
	) {
		alert('Please Provide valid cost.');
		costForManagerField.value = '';
		costForCoachField.value = '';
	} else {
		totalCost = calculateTotalCost(
			playerCost,
			costForManager,
			costForCoach
		);
	}
	console.log(totalCost);
	totalCostField.innerText = totalCost;
});
