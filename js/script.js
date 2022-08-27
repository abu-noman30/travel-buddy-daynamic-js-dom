function searchVehicleList(vehicleDataObjArray){

  // console.log(vehicleDataObjArray[0]['vehicle']);

  let targetVehicleSearchBar= document.querySelector('#search-bar');
  let vehicleSearchBarValue = targetVehicleSearchBar.value;
  targetVehicleSearchBar.value = '';
  document.querySelector('#card-container').innerHTML = '';
  for (let i = 0; i < vehicleDataObjArray.length; i++) {
    const vehicle = vehicleDataObjArray[i];
    
   if (vehicle['vehicle'].toLowerCase() === vehicleSearchBarValue.toLowerCase()) {
    console.log(vehicle);
    getvehicleObjData(vehicle);

    } else {
      alert('No vehicle found');
    }

    
  }

     
}




function calculateCost(vehicleCostData){
  console.log(vehicleCostData);

  let targetDistanceInputField = document.querySelector('#input-distance');
  let distanceInputValue =  targetDistanceInputField.value;
  targetDistanceInputField.value = '';
  console.log(distanceInputValue);

  let targetVehicleQuantityInputField = document.querySelector('#input-vehicle-quantity');
  let vehicleQuantityInputValue = Math.round(targetVehicleQuantityInputField.value);
  targetVehicleQuantityInputField.value = '';
  console.log(vehicleQuantityInputValue);

  let vehicleFareCost = distanceInputValue  *  vehicleQuantityInputValue;
  console.log(vehicleFareCost);

  let targetVehicleFare = document.querySelector('#vehicle-fare');
  targetVehicleFare.innerHTML = vehicleFareCost;

  let totalCostWithoutTax = vehicleCostData.farePerKilo * distanceInputValue * vehicleQuantityInputValue;
  console.log(totalCostWithoutTax);

  let targetTax = document.querySelector('#tax');
  let taxValue = vehicleCostData.tax;
  let taxCost = (taxValue / 100) * totalCostWithoutTax;
  console.log(taxCost);

  let totalCost = (totalCostWithoutTax + taxCost).toFixed(2);
  console.log(totalCost);
  let targetTotalCost = document.querySelector('#total-cost');
  targetTotalCost.innerHTML = totalCost;
  console.log(targetTotalCost);

  // let totalTax = totalCost * 0.1;

  /* let distance = document.querySelector('#modal-body input').value;
  let noOfVehicle = document.querySelector('#modal-body input').value;
  let totalCost = (distance * vehicleCostData.farePerKilo) + (noOfVehicle * vehicleCostData.tax);
  console.log(totalCost); */
}



function getVehicleModalStringData(vehicleStrData){
  console.log(vehicleStrData);

  let vehicleCostStr = JSON.stringify(vehicleStrData);
  
  let targetModal = document.querySelector('#modal-body');
  console.log(targetModal);
  targetModal.innerHTML = `<div class="card" style="width: 29rem">
  <img
  src="${vehicleStrData.imageUrl}"
  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${vehicleStrData.vehicle} </h5>
    <p class="card-text d-inline me-5 mb-3">
      <small class="text-muted">Fare per kilo: $${vehicleStrData.farePerKilo}</small>
    </p>
    <p class="card-text d-inline mb-3">
      <small class="text-muted">Capacity: ${vehicleStrData.capacity} Person</small>
    </p>
    <p class="card-text">Vehicle Fare: <span id="vehicle-fare">00</span>$</p>
    <p class="card-text">Tax: <span id="tax">${vehicleStrData.tax}</span>%</p>
    <p class="card-text">Total-Cost: <span id="total-cost">00</span>$</p>
    <div
      class="search-bar d-flex flex-column"
    >
      <input
        id="input-distance"
        class="form-control w-100"
        type="number"
        placeholder="Distance to Travel"
        aria-label="Search"
      />
      <input
        id="input-vehicle-quantity"
        class="form-control w-100 mb-2"
        type="number"
        placeholder="How many vehicle you want"
        aria-label="Search"
      />
      <button class="btn btn-outline-success w-25" type="submit" onclick='calculateCost(${vehicleCostStr})' >
        Submit
      </button>
    </div>
  </div>
</div>`;

}


function getvehicleObjData(vehicleData) {
  console.log(vehicleData);
  let vehicleStringData = JSON.stringify(vehicleData);

    let cardContainer = document.querySelector('#card-container');
    let cardDiv = document.createElement('div');
      cardDiv.innerHTML =  `<div class="card mb-3" style="max-width: 540px ">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${vehicleData.imageUrl}"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Transport Mood: ${vehicleData.vehicle}</h5>
            <p class="card-text">
            ${vehicleData.description}
            </p>
            <p class="card-text d-inline me-5">
              <small class="text-muted">Fare per kilo: $${vehicleData.farePerKilo}</small>
            </p>
            <p class="card-text d-inline">
              <small class="text-muted">Capacity: ${vehicleData.capacity} Person</small>
            </p>
            <!-- -----Button trigger modal ----   -->
            <button
              type="button"
              class="btn btn-primary d-block mt-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onclick= 'getVehicleModalStringData(${vehicleStringData})'
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div> `

    cardContainer.appendChild(cardDiv);

}

/* getvehicleObjData(carObject);
getvehicleObjData(boatObject);
getvehicleObjData(bikeObject);
getvehicleObjData(busObject); */

function callingFunction(vehicleArray){
  for (let i = 0; i < vehicleArray.length; i++) {
    let vehicleData = vehicleArray[i];

    getvehicleObjData(vehicleData);
  }
}
callingFunction(vehicleDataObjArray);