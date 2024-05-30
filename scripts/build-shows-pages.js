var shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Francisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA"
  }
];

function table(arr) {
  let tableContainer = document.querySelector(".shows__container");

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("shows__title-container");
  tableContainer.appendChild(titleContainer);

  let title = document.createElement("h1");
  title.classList.add("shows__title");
  titleContainer.appendChild(title);
  title.innerText = "Shows";

  let showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container-all");
  tableContainer.appendChild(showsContainer);

  let headerContainer = document.createElement("div");
  headerContainer.classList.add("shows__header-container");
  showsContainer.appendChild(headerContainer);

  let dateHeader = document.createElement("h3");
  dateHeader.classList.add("shows__header-container--date");
  headerContainer.appendChild(dateHeader);
  dateHeader.innerText = "DATES";

  let venueHeader = document.createElement("h3");
  venueHeader.classList.add("shows__header-container--venue");
  headerContainer.appendChild(venueHeader);
  venueHeader.innerText = "VENUE";

  let locationHeader = document.createElement("h3");
  locationHeader.classList.add("shows__header-container--location");
  headerContainer.appendChild(locationHeader);
  locationHeader.innerText = "LOCATION";

  let buttonHeader = document.createElement("button");
  buttonHeader.classList.add("shows__header-container--button-header");
  headerContainer.appendChild(buttonHeader);

  buttonHeader.innerText = "BUY TICKETS";

  for (let i = 0; i < shows.length; i++) {
    let oneContainer = document.createElement("div");
    oneContainer.classList.add("shows__one-container");
    showsContainer.appendChild(oneContainer);

    let dateLabel = document.createElement("h3");
    dateLabel.classList.add("shows__one-container--date-label");
    oneContainer.appendChild(dateLabel);
    dateLabel.innerText = "DATE";

    let date = document.createElement("h4");
    date.classList.add("shows__one-container--date");
    oneContainer.appendChild(date);

    date.innerText = arr[i]["date"];

    let venueLabel = document.createElement("h3");
    venueLabel.classList.add("shows__one-container--venue-label");
    oneContainer.appendChild(venueLabel);
    venueLabel.innerText = "VENUE";

    let venue = document.createElement("h4");
    venue.classList.add("shows__one-container--venue");
    oneContainer.appendChild(venue);

    venue.innerText = arr[i]["venue"];
    let locationLabel = document.createElement("h3");
    locationLabel.classList.add("shows__one-container--location-label");
    oneContainer.appendChild(locationLabel);
    locationLabel.innerText = "LOCATION";

    let location = document.createElement("h4");
    location.classList.add("shows__one-container--location");
    oneContainer.appendChild(location);

    location.innerText = arr[i]["location"];
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows__one-container--button-container");
    oneContainer.appendChild(buttonContainer);

    let button = document.createElement("button");
    button.classList.add("shows__one-container--button");
    buttonContainer.appendChild(button);

    button.innerText = "BUY TICKETS";
  }
}
table(shows);
