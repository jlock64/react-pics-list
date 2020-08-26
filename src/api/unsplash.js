import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com/search/photos',
	headers: {
		Authorization: 'Client-ID qJn5p_l5-9_3v5AaStgOkEnLTu-ZI7Y5qOA_f4kbH_w'
	}
})
