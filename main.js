var gameData = {
  jews: 0,
  jewsPerClick: 1,
  jewsPerClickCost: 10
}

function gasJew() {
  gameData.jews += gameData.jewsPerClick
  document.getElementById("jewsGassed").innerHTML = gameData.jews + " Dead Jews"
}

function buyJewsPerClick() {
  if (gameData.jews >= gameData.jewsPerClickCost) {
    gameData.jews -= gameData.jewsPerClickCost
    gameData.jewsPerClick += 1
    gameData.jewsPerClickCost *= 2
    document.getElementById("jewsGassed").innerHTML = gameData.jews + " Dead Jews"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Gassing Method (Currently Level " + gameData.jewsPerClick + ") Cost: " + gameData.jewsPerClickCost + " Jews"
  }
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('jewGasserSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("jewGasserSave"))
if (savegame !== null) {
  gameData = savegame
}
