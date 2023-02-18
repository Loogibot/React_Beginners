var details = {
    'email': 'info@rapptrlabs.com',
    'password': 'Test123!'
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch('http://dev.rapptrlabs.com/Tests/scripts/login.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
})

///

const nums = [1, 2 , 3, 4, 5]
const map = nums.map(x => x * x)
const names = ['alice', 'bob', 'charlie', 'danielle']
const uppercase = names.map((name) => {
    return (
        name[0].toUpperCase() + name.slice(1)
    )
})

const p = document.createElement("h1")

p.textContent = `Hey Mom! nums squared is ${map}. The names were ${uppercase}. `
p.className = "header"

document.getElementById("root").append(p)

///

