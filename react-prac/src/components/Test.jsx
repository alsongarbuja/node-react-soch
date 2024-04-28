import { useParams } from "react-router-dom"

const Test = () => {
  const { id } = useParams();

  return (
    <div>This is dynamic route - {id}</div>
  )
}

export default Test