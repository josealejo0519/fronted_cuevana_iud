import { axiosConfig } from "../configuraciones/axiosConfig"

const obtenerGeneros  = (estado = true) =>{
    return axiosConfig.get('gener?estsdo= '+estado,{
        Headers : {
            'Content-type' : 'aplication/json'
        }
    })
  }
  
export{
    obtenerGeneros
}