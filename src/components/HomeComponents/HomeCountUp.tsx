import { useCountUp } from "react-countup";
import CounterItem from "./CounterItems";

const HomeCounter = () => {
  useCountUp({ ref: "weeklyUser", end: 6000, duration: 4, delay: 1 });
  useCountUp({ ref: "Different Sports", end: 23, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 96, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 77, duration: 2 });

  return (
    <div  
	
	className=" px-20 w-[60vw] mx-auto border mt-10  text-white  shadow-sm">
      <div className=" container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Weekly user"
          counter={<span id="weeklyUser" />}
          measurement=""
        />

        <CounterItem
          title="Different Sports"
          counter={<span id="Different Sports" />}
          measurement=""
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="3 feet tip user."
          counter={<span id="projectsCounter" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default HomeCounter;
