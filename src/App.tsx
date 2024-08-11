import { useState } from "react";
import "./App.css";
import { customerList as allList } from "./data/customer";
import { CustomerList } from "./components/CustomerList";
import { Customer } from "./types/customer.type";
import { CustomerDetails } from "./components/CustomerDetails";

function App() {
  const [customerList] = useState<Customer[]>(allList);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  return (
    <div className="flex gap-4 p-3 w-screen h-screen">
      <div className="border p-2 rounded max-w-[300px] ">
        <div className="h-full">
          <CustomerList
            allCustomers={customerList}
            selectCustomer={setSelectedCustomer}
            selectedCustomer={selectedCustomer}
          />
        </div>
      </div>

      <div className="flex-1 border rounded overflow-auto ">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        {!selectedCustomer && (
          <h1 className="text-center text-xl">Select a customer</h1>
        )}
      </div>
    </div>
  );
}

export default App;
