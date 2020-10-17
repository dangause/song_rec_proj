const axios = require('axios')



const getPlist = async (pListId) => {

  let getUrl = 'https://api.spotify.com/v1/playlists/' + pListId + '?market=ES&fields=tracks.items(track(name%2Cid%2Cartists(name)))'

  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQDufK0HuKQFqalRNZiThSQHmg-XxRaEYLLPUDyPdYkX33hXnaK7c1XgF2746VXefsgj5_xuupTxmcjGiMA'
    }
  }

  try {
    return await axios.get(getUrl, config)
  } catch (error) {
    console.error(error)
  }
}




const showPlist = async (pListId) => {
  const pList = await getPlist(pListId)

  console.log(pList.data.tracks.items)
}

showPlist('37i9dQZF1DX2Nc3B70tvx0')
