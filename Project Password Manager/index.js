// display model
const modelWrapper = document.querySelector(".models-wraper");
let count = 0;
if (modelWrapper) {
  function displayModel(id) {
    const model = document.getElementById(id);
    if (count == 0) {
        modelWrapper.style.display = "flex";
        model.style.display = "block";
    }
    count++;
    const closeModel = document.getElementById("close-btn");
    //   close model
    closeModel.addEventListener("click", () => {
      modelWrapper.style.display = "none";
      model.style.display = "none";
      count--;
    });
  }
}

// copy clipboard

const copies = document.getElementById("copy")

const copy = (id)=>{
    if (id == "url") {

        var copyElement = document.getElementById("url")
    } else {
        var copyElement = document.getElementById("urlPass")
        
    }
    copyElement.select();
    navigator.clipboard.writeText(copyElement.value)
}



