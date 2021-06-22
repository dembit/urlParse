import { Alert, Col, Row } from 'antd'
import React, { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react'
import { ParametersType, SendMetaAC } from '../../Types/Tipes'
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions'
import useParamsUrl from '../hooks/useParamsUrl/useParamsUrl'
import { Button } from 'antd';


type Props = {

}


const Content: FC<Props> = ({ children }) => {

  let result = useAppSelector((state) => state.counterSlice.result)
  let dispatch = useAppDispatch()
  const [error, setError] = useState<null | string>(null)
  let { timestamp, name, age } = useParamsUrl<ParametersType>()

  return <div style={{ margin: "40px" }}>
    <div>Name:{name ? name : "undefined"}</div>
    <div>Age:{age ? age : "undefined"}</div>
    <div>Timestamp:{timestamp ? timestamp : "undefined"}</div>

    {(!name || !age || !timestamp) && <div>Params is required ?name=example&age=29&timestamp=1624298113</div>}

    {name && age && timestamp && <Button style={{ marginTop: "10px"}}onClick={() => {
      if (timestamp && name && age) {
        if (isNaN(+age)) {
          setError("age required a number")
          return
        }
        if (isNaN(+timestamp)) {
          setError("timestamp required a number")
          return
        }

        setError(null)
        dispatch(SendMetaAC({ timestamp, name, age }))
      }
    }} type="primary">Send Meta</Button>}

    {result === "success" && <Alert style={{ width: "300px", marginTop: "20px" }} message="Request seccess" type="success" />}
    {error && <Alert style={{ width: "300px", marginTop: "20px" }} message={error} type="error" />}
  </div>
}

export default Content