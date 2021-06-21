
export enum ActionType {
  SEND_META = "SEND_META"
}

export interface ParametersType {
  name: string, 
  age: string, 
  timestamp: string
}
export interface SendMetaType {
  type: ActionType.SEND_META, 
  payload: ParametersType
}


export const SendMetaAC = (payload: ParametersType): SendMetaType => ({type: ActionType.SEND_META, payload})
