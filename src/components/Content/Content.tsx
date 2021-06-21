import { Alert, Col, Row } from 'antd'
import React, { FC, useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react'
import { SendMetaAC } from '../../Types/Tipes'
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions'
import useParamsUrl from '../hooks/useParamsUrl/useParamsUrl'
import { Button } from 'antd';


type Props = {

}


const Content: FC<Props> = ({ children }) => {

  let result = useAppSelector((state) => state.counterSlice.result )
  let dispatch = useAppDispatch()
  let { timestamp, name, age } = useParamsUrl()
   
  return <div style={{margin: "40px"}}>
    <div>Name:{name ? name : "undefined"}</div>
    <div>Age:{age ? age : "undefined"}</div>
    <div>Timestamp:{timestamp ? timestamp : "undefined"}</div>

    {(!name || !age || !timestamp) && <div>Вид строки URL должен быть вида http://localhost:3000/?name=example&age=29&timestamp=1624298113</div>}

    {name && age && timestamp && <Button onClick={() => {
      if (timestamp && name && age) {
        dispatch(SendMetaAC({ timestamp, name, age }))
      }
    }} type="primary">Send Meta</Button>}

    {result === "success" && <Alert style={{width: "300px", marginTop: "20px"}} message="Request seccess" type="success" />}
  </div>
}

export default Content