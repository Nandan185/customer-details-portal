import { type Customer } from "../types/customer.type";

export function CustomerSingle({
  customer,
  selectedCustomer,
  selectCustomer,
}: {
  customer: Customer;
  selectCustomer: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}) {
  return (
    <div
      className="flex flex-col gap-y-2 border-2 p-2 rounded cursor-pointer"
      style={{
        backgroundColor:
          selectedCustomer && selectedCustomer.id === customer.id
            ? "#f0f0f0"
            : "",
      }}
      onClick={() => selectCustomer(customer)}
    >
      <div className="flex flex-col card">
        <div>{customer.name}</div>
        <div className="line-clamp-2">{customer.title}</div>
      </div>
    </div>
  );
}
