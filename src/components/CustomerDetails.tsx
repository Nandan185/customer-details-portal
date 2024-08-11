import { Customer } from "../types/customer.type";
import Grid from "./PhotoGrid";

export const CustomerDetails = ({ customer }: { customer: Customer }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-[#f0f0f0]">
      <div className="flex flex-col items-center p-3">
        <h1 className="text-xl font-bold">{customer.name}</h1>
        <div>{customer.title}</div>
        <div>{customer.address}</div>
        <small className="mt-2 text-center">{customer.description}</small>

        <Grid />
      </div>
    </div>
  );
};
