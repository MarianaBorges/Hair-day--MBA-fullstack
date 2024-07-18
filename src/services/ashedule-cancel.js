import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }){
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
      method: "DELETE"
    })
  } catch (error) {
    console.error(error)
    alert("Não foi possível cancelar o agendamento")
  }
}