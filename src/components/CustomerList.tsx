import React, { useState, useEffect, useRef } from "react";
import { CustomerSingle } from "./Customer";
import { Customer } from "../types/customer.type";

interface InfiniteScrollComponentProps {
  allCustomers: Customer[];
  selectCustomer: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

export const CustomerList: React.FC<InfiniteScrollComponentProps> = ({
  allCustomers,
  selectCustomer,
  selectedCustomer,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const customersPerPage = 20;

  const loadMoreCustomers = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    
    setTimeout(() => {
      const start = (page - 1) * customersPerPage;
      const end = start + customersPerPage;
      const newCustomers = allCustomers.slice(start, end);

      setCustomers((prev) => [...prev, ...newCustomers]);

      if (newCustomers.length < customersPerPage) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }

      setLoading(false);
    }, 1500); 
  };

  useEffect(() => {
    loadMoreCustomers();
  }, []);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreCustomers();
    }
  };

  return (
    <div
      id="scrollable-container"
      className="overflow-auto h-full"
      onScroll={handleScroll}
    >
      <ul className="flex flex-col gap-3">
        {customers.map((customer) => (
          <CustomerSingle
            customer={customer}
            key={customer.id}
            selectCustomer={selectCustomer}
            selectedCustomer={selectedCustomer}
          />
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: "1px" }} />
      {loading && <p>Loading more customers...</p>}
      {!hasMore && <p>No more customers to load.</p>}
    </div>
  );
};
