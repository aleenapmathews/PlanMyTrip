function onDestinationLoad() {
  const destination = localStorage.getItem("destination");
  console.log(destination);

  let image = document.getElementById("image");
 if (destination == "chennai") {
    image.src =
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if(destination=="bangalore")
  {
image.src="https://plus.unsplash.com/premium_photo-1678655852256-5fc5670b83eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
}

function ondestinationChange(event) {
  destination = event.target.value;
  //   console.log(destination)
  localStorage.setItem("destination", destination);
}
