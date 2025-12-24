function openForm() {
  document.getElementById("orderForm").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("orderForm").classList.add("hidden");
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  const message = 
    "New COD Order:%0A" +
    "Product: Sunflower Tote Bag%0A" +
    "Price: PKR 2,500%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Address: " + address;

  window.open("https://wa.me/923438961481?text=" + message);
}
