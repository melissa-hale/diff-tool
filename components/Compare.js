import { useState } from 'react'
import dynamic from 'next/dynamic'
import Form from './Form'
import Details from './Details'
import Query from './Query'

const DynamicReactCompare = dynamic(() => import('react-json-view-compare'), {
  ssr: false,
})

export default function Compare() {
  const [showForm, setShowForm] = useState(true)
  const [spaceDetails, setSpaceDetails] = useState()
  const [nacelleData, setNacelleData] = useState()

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const updateSpaceDetails = (spaceDetails) => {
    setSpaceDetails(spaceDetails)
  }

  const updateNacelleData = (nacelleData) => {
    // expected data is an array of objects eventually
    setNacelleData(nacelleData)
  }

  return (
    <>
      {showForm && (
        <Form showForm={toggleShowForm} setSpaceDetails={updateSpaceDetails} />
      )}
      {!showForm && (
        <Details showForm={toggleShowForm} spaceDetails={spaceDetails} />
      )}
      <br />
      {!showForm && (
        <Query setNacelleData={updateNacelleData} spaceDetails={spaceDetails} />
      )}
      {nacelleData && (
        <DynamicReactCompare
          oldData={nacelleData.v1data}
          newData={nacelleData.v2data}
        />
      )}
    </>
  )
}
