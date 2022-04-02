import React from 'react'
import { v1client, v2CCclient } from '../services/clients'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const DynamicReactCompare = dynamic(() => import('react-json-view-compare'), {
  ssr: false,
})

function Diff(props) {
  const [handle, setHandle] = useState()
  const [v1data, setv1data] = useState()
  const [v2data, setv2data] = useState()

  useEffect(() => {
    setHandle(props.handle)
  }, [props.handle])

  useEffect(() => {
    const fetchData = async () => {
      const v1data = await v1client(props.clientDetails).data.content({
        handle: handle,
        type: 'page',
      })

      const v2data = await v2CCclient(props.clientDetails).data.content({
        handle: handle,
        type: 'page',
      })
      return [v1data, v2data]
    }

    if (handle) {
      fetchData().then((data) => {
        setv1data(data[0])
        setv2data(data[1])
      })
    }
  }, [handle])

  //   useEffect(() => {
  //     const relatedProducts = await $nacelle.products({
  //       handles: upsellHandles,
  //     })

  // }, [handle])

  return <DynamicReactCompare oldData={v1data} newData={v2data} />
}

export default Diff
