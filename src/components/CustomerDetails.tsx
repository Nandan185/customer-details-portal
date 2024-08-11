import { Customer } from "../types/customer.type";
import Grid from "./PhotoGrid";

export const CustomerDetails = ({ customer }: { customer: Customer }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col items-center p-3">
        <h1>{customer.name}</h1>
        <div>{customer.address}</div>
        <small className="mt-2 text-center">{customer.title}</small>

        <Grid />
      </div>
    </div>
  );
};
