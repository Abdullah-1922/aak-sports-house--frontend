import { ReactNode } from "react";

type TCountProps ={
	title:string;
	counter:ReactNode;
	measurement:string
}


const CounterItem = ({ title, counter, measurement }:TCountProps) => {
	return (
		<div className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center  mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center ">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;
