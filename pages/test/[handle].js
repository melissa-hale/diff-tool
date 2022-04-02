import { nacelleV1Client, nacelleV2CCClient } from 'services'
import dynamic from 'next/dynamic'
const DynamicReactCompare = dynamic(() => import('react-json-view-compare'), {
  ssr: false,
})

function test(props) {
  const { v1Content, v2Content } = props

  return <DynamicReactCompare oldData={v1Content} newData={v2Content} />
}

export default test

export async function getServerSideProps(context) {
  const handle = context.params.handle

  let v1Content
  try {
    v1Content = await nacelleV1Client.data.content({
      handle: handle,
      type: 'page',
    })
  } catch (e) {
    console.log(e)
    v1Content = 'error or not found in V1'
  }

  let v2Content
  try {
    v2Content = await nacelleV2CCClient.data.content({
      handle: handle,
      type: 'page',
    })
  } catch (e) {
    v2Content = 'error or not found in V2'
  }

  return {
    props: {
      v1Content,
      v2Content,
    },
  }
}
