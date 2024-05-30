const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

function postComments(arr) {
  let commentContainer = document.querySelector(".comment__default-comment");
  commentContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let m = new Date(arr[i]["timestamp"]);
    let dateString =
      m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();

    let defaultContainer = document.createElement("div");
    defaultContainer.classList.add("comment__default");
    commentContainer.appendChild(defaultContainer);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("comment__image-container-one");
    defaultContainer.appendChild(imageContainer);

    let headerContainer = document.createElement("div");
    headerContainer.classList.add("comment__header");
    defaultContainer.appendChild(headerContainer);

    let image = document.createElement("div");
    image.classList.add("comment__header--image-one");
    imageContainer.appendChild(image);

    let name = document.createElement("h2");
    name.classList.add("comment__header--name");
    name.innerText = arr[i]["name"];
    headerContainer.appendChild(name);

    let date = document.createElement("h3");
    date.classList.add("comment__header--date");
    date.innerText = dateString;
    headerContainer.appendChild(date);

    let textContainer = document.createElement("div");
    textContainer.classList.add("comment__text-container-default");
    defaultContainer.appendChild(textContainer);

    let comment = document.createElement("p");
    comment.classList.add("comment__text-container-default--comment");
    comment.innerText = arr[i]["comment"];
    textContainer.appendChild(comment);

    let deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add("comment__delete-button-container");
    defaultContainer.appendChild(deleteButtonContainer);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("comment__delete-button");
    deleteButton.addEventListener("click", event => {
      let varId = event.target.id;
      deleteComment(varId);
    });
    deleteButton.id = arr[i]["id"];
    deleteButton.innerText = "Remove";
    deleteButtonContainer.appendChild(deleteButton);
  }
}

const form = document.querySelector(".comment__input-container");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  let newAdd = axios.post(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4",
    {
      name: submitEvent.target.name.value,
      comment: submitEvent.target.comment.value
    }
  );

  newAdd.then(() => {
    getComments();
  });
  let clearInput = document.querySelector(".comment__input-container");
  clearInput.reset();
});

function getComments() {
  axios
    .get(
      "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
    )
    .then(response => {
      postComments(
        response.data.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      );
    });
}

getComments();

function deleteComment(id) {
  axios
    .delete(
      `https://unit-2-project-api-25c1595833b2.herokuapp.com/comments/${id}?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
    )
    .then(response => {
      getComments();
    });
}

function getShows(arr) {
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
  
    for (let i = 0; i < arr.length; i++) {
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
  
      venue.innerText = arr[i]["place"];
  
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
  
  let showsData = axios.get(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=meghvusi"
  );
  showsData.then(response => {
    getShows(response.data);
    console.log(response.data);
  });
  showsData.catch(error => {
    console.log("you did something wrong");
  });
