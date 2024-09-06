import { useCountUp } from "react-countup";
import CounterItem from "./CounterItems";

const HomeCounter = () => {
  useCountUp({ ref: "weeklyUser", end: 6000, duration: 4, delay: 1 });
  useCountUp({ ref: "Different Sports", end: 23, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 96, duration: 2 });
  useCountUp({ ref: "Repeat customer", end: 77, duration: 2 });

  return (
    <div className=" px-20 w-[60vw] z-[9999] relative mx-auto border mt-10 bg-zinc-900 rounded-3xl text-white   shadow-sm">
      <div className=" container mx-auto py-20  flex flex-col  lg:flex-row sm:justify-between items-center">
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
          title="Repeat customer"
          counter={<span id="Repeat customer" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default HomeCounter;
