import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleFacilityQuery } from "../redux/features/facility/facilityApi";
import { Button } from "antd";
import { useAppSelector } from "../redux/hooks";
import toast from "react-hot-toast";


const FacilityDetails = () => {
  const params = useParams();

  const { data, isLoading } = useGetSingleFacilityQuery(params.id);
 const user=useAppSelector(state=>state.auth.user)
const navigate =useNavigate()


  if (isLoading) {
    return <div className="text-3xl text-center py-40">Loading</div>;
  }
  const card = data?.data;

  return (
    <div className="md:w-3/4    flex flex-col md:flex-row mx-auto min-h-[450px] my-20">
      <div className="w-full md:w-[50%]  h-full">
        <img
          className="w-full min-h-[450px] object-cover  h-full"
          src={card.image}
          alt=""
        />
      </div>
      <div className="w-full p-10 md:w-[50%]  min-h-[450px]">
        <p className="text-xl font-semibold">{card.location}</p>
        <p className="text-3xl font-bold">{card.name}</p>
        <p className="mt-10">{card.description}</p>
        <p className="font-bold bg-black text-white w-fit  px-3 mt-3 rounded-3xl">
          ${card.pricePerHour}
        </p>
        <div  onClick={()=>{
       if(user?.role === 'admin'){return toast.error('admin can not book facility' )}else{
        navigate(`/book-facility/${card._id}`)
       }
        }}>
        <Button size="large" className="bg-black mt-10  text-white w-full ">
          Book Now
        </Button>
        </div>
       
       
      </div>
    </div>
  );
};

export default FacilityDetails;
