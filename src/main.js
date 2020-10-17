const axios = require('axios')



const getPlist = async () => {

	let config = {
  headers: {'Authorization': 'Bearer BQAZtPaZ1gnR-wb_i97xh2o2anB6kkdBs5Fqdbh7Ry1EvAVFt048rI8nd1givKPF4e5VYiptrH-cPJWOYKY'}
  // params: {fields: items(track(name,href))}
	}

  try {
    return await axios.get(
			'https://api.spotify.com/v1/playlists/37i9dQZF1DX2Nc3B70tvx0?market=ES', config)
  } catch (error) {
    console.error(error)
  }
}

const showPlist = async () => {
  const pList = await getPlist()

	console.log(pList.data.tracks.items[0])
		// console.log(pList.data.tracks.items[1].track.id)
}

showPlist()
