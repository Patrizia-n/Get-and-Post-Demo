const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

const sendData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "morpheus", job: "leader" }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
