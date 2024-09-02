import { useEffect, useState } from "react";
import "./Test.css";

type Transaction = {
  service: string;
  amount: number;
  totalAmount: number;
  status: "Completed" | "Pending" | "Failed"; // or other statuses
  paymentMethod: string;
  transactionNo: string;
};

type Filter = {
  status?: "Completed" | "Pending" | "Failed";
  dateRange?: { startDate: string; endDate: string };
  searchTerm?: string; // For any other unique feature filtering
};
const Test = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [filter, setFilter] = useState<Filter>({});

  // Mock data fetching
  useEffect(() => {
    // In a real scenario, fetch transactions from an API
    const mockTransactions: Transaction[] = [
      {
        service: "Electricity Bill",
        amount: 50,
        totalAmount: 100,
        status: "Completed",
        paymentMethod: "Credit Card",
        transactionNo: "TXN12345",
      },
      {
        service: "Electricity Bill",
        amount: 50,
        totalAmount: 100,
        status: "Pending",
        paymentMethod: "Online Payment",
        transactionNo: "TXN12345",
      },
      // More mock data...
    ];
    setTransactions(mockTransactions);
    setFilteredTransactions(mockTransactions);
  }, []);

  // Filter logic
  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
    const filtered = transactions.filter((transaction) => {
      // Apply status filter
      if (newFilter.status && transaction.status !== newFilter.status)
        return false;

      // Apply date range filter (assuming date is available and parsed properly)
      // Add date logic here if required

      // Apply search term or other filters
      // Add search logic here if required

      return true;
    });
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h2>Transaction History</h2>
      <div className="filter-container">
        <select
          onChange={(e) =>
            handleFilterChange({
              ...filter,
              status: e.target.value as Filter["status"],
            })
          }
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        {/* Additional filters can be added here */}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Amount</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Transaction No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.service}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.totalAmount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.transactionNo}</td>
                <td>
                  <button>View</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
