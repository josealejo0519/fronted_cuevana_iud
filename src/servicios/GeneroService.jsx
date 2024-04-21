import { axiosConfig } from "../configuraciones/axiosConfig"

const obtenerGeneros  = () =>{
    return axiosConfig.get('gener?estsdo=true',{
        Headers : {
            'Content-type' : 'aplication/json'
        }
    })
  }

export{
    obtenerGeneros
}