const URL = "https://api.mbm.ac.in/items/articles";
let array;
const getData = async () => {
  // console.log("getting data...");
  let response = await fetch(URL);
  console.log(response);
  let obj = await response.json();
  console.log(obj.data);
  const data = obj.data;
  array = data;
  for (let index = 0; index < 100; index++) {
    const date = new Date(data[index].date_created);
    const newDiv = document.createElement("div");
    const htmlData = `<div class="list-items">
             <div class="top-section">
            <div onclick="showContent()" class="title">${
              data[index].Title
            }</div>
            <div class="date">${date.toDateString()}</div>
          </div>
          <div class="desc">${data[index].ShortDesc}</div>
          <div class="bottom-section">
            <div class="read-more">read more</div>
          </div>
        </div> `;
    newDiv.innerHTML = htmlData;
    document.querySelector(".list").appendChild(newDiv);
  }
};
getData();
const title = document.getElementsByClassName("title");
const listitems = document.getElementsByClassName("list-items");
const showContent = () => {
  // console.log(array);
  listitems.innerHTML = array.map();
};
