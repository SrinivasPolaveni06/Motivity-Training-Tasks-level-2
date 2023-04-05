let headerData = document.getElementById("headersData");
let tableContainer1 = document.getElementById("tableContainer");
let searchingElement = document.getElementById("searchingElements");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const tableData = res.products;
    const headersData = Object.keys(res.products[0]);
    //console.log(Object.keys(res.products[0]));
    //console.log(headersData);
    renderingHeaderData(headersData);
    renderRowsData(tableData);
  })
  .catch((err) => console.log(err));

//console.log(headersData);

function renderingHeaderData(data) {
  let htmlData = "";

  data.forEach((eachItem) => {
    if (eachItem === "title") {
      const tableheader = `<th>${eachItem}
            <button class="sortedBtn">
            <span class="material-icons-outlined">
            south
            </span>
            </button>
            <button class="sortedBtn1">
            <span class="material-icons-outlined">
                north
                </span>
            </button>
            </th>`;
      htmlData = htmlData + tableheader;
    } else {
      const tableheader = `<th>${eachItem}</th>`;
      htmlData = htmlData + tableheader;
    }

    return;
  });
  htmlData = htmlData + `<th>Delete Icon</th>`;
  headerData.innerHTML = htmlData;
}

function renderSearchingData(rowsDataNew) {
  let htmlData1 = "";

  rowsDataNew.forEach((eachItem) => {
    const tablerow = `<tr>
        ${renderingColumnsData(eachItem)}
      </tr>`;
    htmlData1 = htmlData1 + tablerow;
    return;
  });
  tableContainer1.innerHTML = htmlData1;
}

function renderRowsData(rowsData) {
  let rowsDataNew = rowsData;
  searchingElement.addEventListener("keyup", function (event) {
    const newUpdatedData = rowsDataNew.filter((eachData) => {
      const condition1 = eachData.title
        .toLowerCase()
        .indexOf(event.target.value.toLowerCase());
      const condition2 = eachData.brand
        .toLowerCase()
        .indexOf(event.target.value.toLowerCase());
      if (condition1 !== -1 || condition2 !== -1) {
        return eachData;
      }
    });

    renderSearchingData(newUpdatedData);
    console.log(event.target.value);
  });

  renderSearchingData(rowsDataNew);

  let deleteButtons = tableContainer1.querySelectorAll(".btnDelete");
  deleteButtons.forEach(function (eachButton) {
    eachButton.addEventListener("click", function (event) {
      //console.log("hello")
      const SelectedButtonId = event.target.closest(".btnDelete");
      const ClickedDeleteButtonId = SelectedButtonId.getAttribute("data-id");

      console.log(ClickedDeleteButtonId);
      const updatedDataList = rowsDataNew.filter((eachItem) => {
        //console.log(eachItem.id)
        return eachItem.id != ClickedDeleteButtonId;
      });
      // console.log(updatedDataList)
      renderRowsData(updatedDataList);
    });
    return;
  });

  let sortedButton = document.querySelector(".sortedBtn");

  sortedButton.addEventListener("click", function (event) {
    // const sortedList=rowsDataNew.sort((item1,item2)=>
    //      item1.title-item2.title
    // )
    const sortedList = rowsDataNew.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    console.log(sortedList);
    renderRowsData(sortedList);
  });

  let sortedButton1 = document.querySelector(".sortedBtn1");

  sortedButton1.addEventListener("click", function (event) {
    // const sortedList=rowsDataNew.sort((item1,item2)=>
    //      item1.title-item2.title
    // )
    const sortedDescList = rowsDataNew.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    );
    console.log(sortedDescList);
    renderRowsData(sortedDescList);
  });
}

function renderingColumnsData(eachData) {
  const dataKeys = Object.keys(eachData);
  //console.log(rowsDataNew)

  let data = "";
  for (let key of dataKeys) {
    if (key === "thumbnail") {
      const tableRowsData = `<td><image src=${eachData[key]} alt="image"/></td>`;
      data = data + tableRowsData;
    } else if (key === "images") {
      const ImageUrl = eachData[key][0];
      const tableRowsData = `<td><image src=${ImageUrl} alt="image"/></td>`;
      data = data + tableRowsData;
    } else {
      const tableRowsData = `<td>${eachData[key]}</td>`;
      data = data + tableRowsData;
    }
  }
  data =
    data +
    `<td>
    <button data-id=${eachData.id} class="btnDelete">
            <span class="material-icons-outlined">
            delete
            </span>
    </button>
    </td>`;
  return data;
}
