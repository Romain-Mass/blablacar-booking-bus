const Departure = document.getElementsByName("departure");
const Arrival = document.getElementsByName("arrival");
const $BtnSub = document.querySelector(".search-btn-submit");

const sect = document.querySelector(".trips");
const res = document.querySelector("#trips-list");

async function Trips() {
	try {
		const response = await fetch(
			"http://10.69.4.8:3000/v1/trips?departure=Lyon",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${123}`,
				},
			},
		);

		if (!response.ok) {
			console.log("HTTP Error:", response.status);
			return;
		}

		const data = await response.json();

		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

function createTrip(img, departure, arrival, duration, price) {
	res.innerHTML = "";

	const $tripCard = document.createElement("div");
	const $tripImg = document.createElement("img");
	const $tripCardContent = document.createElement("div");
	const $tripCardRoute = document.createElement("div");
	const $tripCardRouting = document.createElement("div");
	const $tripCardRoutingSVG = document.createElement("svg");
	const $tripCardCities = document.createElement("div");
	const $tripCardDuration = document.createElement("div");
	const $tripCardAppend = document.createElement("div");
	const $tripCardPrice = document.createElement("div");

	const $p = document.createElement("p");
	const $p2 = document.createElement("p");
	const $p3 = document.createElement("p");
	const $p4 = document.createElement("p");

	const $hr = document.createElement("hr");

	const $h6 = document.createElement("h6");
	const $spanPrice = document.createElement("span");
	const $price = document.createElement("h3");
	const $pric = document.createElement("h3");

	const $button = document.createElement("button");
	const $SVG2 = document.createElement("svg");

	// $tripImg.src = Trips.cover;
	// $tripImg.alt = Trips.name;

	$tripCardRouting.innerHTML = `<svg
										width="17"
										height="60"
										viewBox="0 0 17 60"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.3635 8.18182C16.3635 11.7545 14.0999 14.7818 10.909 15.9L10.909 44.1C14.0999 45.2182 16.3635 48.2455 16.3635 51.8182C16.3635 53.9881 15.5015 56.0692 13.9671 57.6036C12.4327 59.138 10.3517 60 8.18171 60C6.01175 60 3.93068 59.138 2.39629 57.6036C0.861898 56.0692 -0.000110626 53.9881 -0.000110626 51.8182C-0.000110626 48.2455 2.26353 45.2182 5.45443 44.1L5.45443 15.9C2.26353 14.7818 -0.000110626 11.7545 -0.000110626 8.18182C-0.000110626 6.01186 0.861898 3.93079 2.39629 2.3964C3.93068 0.862011 6.01175 0 8.18171 0C10.3517 0 12.4327 0.862011 13.9671 2.3964C15.5015 3.93079 16.3635 6.01186 16.3635 8.18182Z"
											fill="#001536"
										/>
									</svg>`;

	$p.textContent = "TEST 1";
	$p2.textContent = "TEST 2";
	$p3.textContent = "TEST 3";

	$tripCard.classList.add("trips-card");

	sect.appendChild(res);
	res.appendChild($tripCard);
	$tripCard.appendChild($p);
	$tripCard.appendChild($p2);
	$tripCard.appendChild($p3);
	$tripCard.appendChild($tripCardRouting);

	return res;
}

$BtnSub.addEventListener("click", (e) => {
	e.preventDefault();

	createTrip();
});
