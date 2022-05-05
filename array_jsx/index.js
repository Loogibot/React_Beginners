const nums = [1, 2 , 3, 4, 5]
const map = nums.map(x => x * x)

const h1 = document.createElement("h1")

h1.textContent = `Hey Mom! nums squared is ${map}`
h1.className = "header"

document.getElementById("root").append(h1)