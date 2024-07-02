let iconsData = [];

async function loadIcons() {
	try {
		const response = await fetch('../icons.json');

		if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`)}

		const data = await response.json();

		iconsData = data.reduce((acc, icon) => {
			acc[icon.asset_id.toUpperCase()] = icon.url;
			return acc;
		}, {});
	} catch (error) {
		console.error('Fetch Error:', error);
	}
}


function shortenAddress(address, charsToShow = 4) {
	const start = address.slice(0, charsToShow + 2); // +2 для учета '0x'
	const end = address.slice(-charsToShow);
	return `${start}......${end}`;
}

function getPlayerMarkup(player, winner, move, avatarIndex) {
	return `
        <div class="blockchain-row__player">
            <a href="https://etherscan.io/address/${player}" class="blockchain-row__name">${shortenAddress(player)}</a>
            <div class="blockchain-row__wrapp ${winner === player ? 'active' : ''}">
                <span class="blockchain-row__logo">
                    <img width="49" height="49" src="img/avatars/icon${avatarIndex}.svg" alt="image">
                </span>
                <span class="blockchain-row__choice">
                    <img width="34" height="39" src="img/moveImage/move${move}.png" alt="image">
                </span>
            </div>
        </div>
    `;
}

const currentMarkup = (item, iconsData) => {
	const {bet, playerA, playerB, coinSymbol, lastMovePlayerA, lastMovePlayerB, winner} = item[1];
	const iconUrl = iconsData[coinSymbol.toUpperCase()] || '../img/sprite/img/binance.svg';

	if (lastMovePlayerA !== 0 && lastMovePlayerB !== 0) {
		const playerAMarkup = getPlayerMarkup(playerA, winner, lastMovePlayerA, Math.floor(Math.random() * 10) + 1);
		const playerBMarkup = getPlayerMarkup(playerB, winner, lastMovePlayerB, Math.floor(Math.random() * 10) + 1);

		return `
            <li class="blockchain-table__item">
                <div class="blockchain-row">
                    ${playerAMarkup}
                    <a href="#" class="blockchain-row__bet">
                        <b class="blockchain-row__value">${bet * 2}</b>
                        <b class="blockchain-row__currency">${coinSymbol}</b>
                        <i class="blockchain-row__icon">
                            <img width="12" height="12" src="${iconUrl}" alt="${coinSymbol}_icon">
                        </i>
                    </a>
                    ${playerBMarkup}
                </div>
            </li>
        `;
	}
}

async function fetchDataAndIcons() {
	try {
		await loadIcons();
		const response = await fetch('../data.json');
		const data = await response.json();

		const container = document.querySelector('.blockchain-table__list');
		let htmlContent = '';

		Object.entries(data).forEach(item => {
			htmlContent += currentMarkup(item, iconsData);
		});

		if (container) {
			container.innerHTML = htmlContent;
		}

	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
	}
}

fetchDataAndIcons();




