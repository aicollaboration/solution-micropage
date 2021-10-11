import Solution from './Solution'
import Solutions from './Solutions'

export default function Account({ session }) {

  return (

    <>
      <Solution session={session} />
      <Solutions session={session} />
    </>
  )
}