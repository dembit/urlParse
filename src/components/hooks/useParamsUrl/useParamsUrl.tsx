
import React from 'react';



export default function useParamsUrl () {
  
    let search = window.location.search.substr(1)
    let current = {} as any
    let s  = search.split('&')
    search.split('&').forEach((item) => {
        let array = item.split("=")
        if(array.length === 1) {
            return
        }
        current = {...current, [array[0]]: array[1]}
    })

    return current
  }


