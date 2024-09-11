
import { useParams } from "react-router-dom";
import PageMeta from "../../components/PageMeta";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <PageMeta title={"User"} description={"User"} />

      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold">User - {userId}</span>
      </div>
    </>
  )
}
    
export default User;
      