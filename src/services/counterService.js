import {convertDate} from '../helpers/ConvertDate'
import Axios from 'axios'

export async function counterService(){
      try {
        const response = await Axios.get('https://swapi.dev/api/people/2')
        if (!response) {
          return null
        }
       return setState(response.data)
      } catch (error) {
        return null
      }
  }

function setState(data) {
  console.log(data);
    return {
        globalCountAPI : data.birth_year.length,
        page1Count : data.films.length,
        page2Count: convertDate(data.created) 
    }
  }

export default counterService

