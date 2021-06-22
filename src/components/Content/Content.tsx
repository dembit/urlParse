import { Alert, Col, Row } from 'antd'
import React, { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react'
import { ParametersType, SendMetaAC } from '../../Types/Tipes'
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions'
import useParamsUrl from '../hooks/useParamsUrl/useParamsUrl'
import { Button } from 'antd';


type Props = {

}


let paramsRequired = "Params is required ?name=example&age=29&timestamp=1624298113" 
let ageError = "age required a number"
let timestampError = "timestamp required a number"
let success = "Request seccess"
const Content: FC<Props> = ({ children }) => {

  let result = useAppSelector((state) => state.counterSlice.result)
  let dispatch = useAppDispatch()
  const [error, setError] = useState<null | string>(null)
  let { timestamp, name, age } = useParamsUrl<ParametersType>()

  let styleErrors = { width: "400px", marginTop: "20px" }

  return <div style={{ margin: "40px" }}>
    <div>Name:{name ? name : "undefined"}</div>
    <div>Age:{age ? age : "undefined"}</div>
    <div>Timestamp:{timestamp ? timestamp : "undefined"}</div>

    {(!name || !age || !timestamp) && <Alert message={paramsRequired} style={styleErrors} type="error"></Alert>}

    {name && age && timestamp && <Button style={{ marginTop: "10px"}} onClick={() => {
      if (timestamp && name && age) {
        if (isNaN(+age)) {
          setError(ageError)
          return
        }
        if (isNaN(+timestamp)) {
          setError(timestampError)
          return
        }

        setError(null)
        dispatch(SendMetaAC({ timestamp, name, age }))
      }
    }} type="primary">Send Meta</Button>}

    {result === "success" && <Alert style={styleErrors} message={success} type="success" />}
    {error && <Alert style={styleErrors} message={error} type="error" />}
  </div>
}

export default Content