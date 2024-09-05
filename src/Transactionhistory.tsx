import { useEffect, useState } from "react";
import "./Test.css";
import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
import succesful from "../src/assets/images/successful.svg";
import initiated from "../src/assets/images/initiated.svg";
import failed from "../src/assets/images/failed.svg";
import LogoutBtn from "./LogoutBtn";

type Transaction = {
  service: string;
  amount: number;
  totalAmount: number;
  status: "Successful" | "Initiated" | "Failed"; // or other statuses
  paymentMethod: string;
  transactionNo: string;
  phoneNo: string;
  date: string;
};

type Filter = {
  status?: "Successful" | "Initiated" | "Failed";
  dateRange?: { startDate: string; endDate: string };
  searchTerm?: string; // For any other unique feature filtering
};

const Transactionhistory = () => {
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
        service: "Mtn Airtime VTU",
        amount: 100.0,
        totalAmount: 100.0,
        status: "Initiated",
        paymentMethod: "Transfer",
        transactionNo: "T17045621860850336938179613",
        phoneNo: "09123456789",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel DATA VTU",
        amount: 2000,
        totalAmount: 100,
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621860850336938179613",
        phoneNo: "08121567865",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Startime",
        amount: 4000,
        totalAmount: 100,
        status: "Failed",
        paymentMethod: "Card Payment",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "DSTV",
        amount: 100,
        totalAmount: 100,
        status: "Initiated",
        paymentMethod: "Transfer",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 2000.0,
        totalAmount: 100,
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 4000.0,
        totalAmount: 100,
        status: "Failed",
        paymentMethod: "Card Payment",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 100.0,
        totalAmount: 100,
        status: "Initiated",
        paymentMethod: "Card Payment",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 2000.0,
        totalAmount: 100,
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 4000.0,
        totalAmount: 100,
        status: "Failed",
        paymentMethod: "Card Payment",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 100.0,
        totalAmount: 100,
        status: "Initiated",
        paymentMethod: "Transfer",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 100.0,
        totalAmount: 100,
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
      },
      {
        service: "Airtel Airtime VTU",
        amount: 4000.0,
        totalAmount: 100,
        status: "Failed",
        paymentMethod: "Card Payment",
        transactionNo: "17045621860850336938179613",
        phoneNo: "07043456678",
        date: "6th January, 2024, 06:29PM",
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
  // transaction status color
  const styles = {
    greenBackground: {
      backgroundColor: "rgba(116, 219, 119, 0.211)",
    },
    redBackground: {
      backgroundColor: "rgba(235, 109, 98, 0.221)",
    },
    orangeBackground: {
      backgroundColor: "rgba(252, 194, 108, 0.145)",
    },
    heights: {
      height: "fit-content",
    },
  };
  return (
    <div className="transaction-history">
      <div className="transaction-left-side">
        <SideBar />
        <LogoutBtn />
      </div>
      <div className="transaction-right-side">
        <UserNavbar />
        <h2 className="Transa-page">Transaction History</h2>
        <div className="filter-container">
          <div className="filter-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.59995 12H17.4M4.19995 7.19995H19.8M10.2 16.8H13.8"
                stroke="#78A8D9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <select
            onChange={(e) =>
              handleFilterChange({
                ...filter,
                status: e.target.value as Filter["status"],
              })
            }
          >
            <option value="">Filter</option>
            <option value="Successful">Successful</option>
            <option value="Initiated">Initiated</option>
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
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      className="status-svg-container"
                      style={
                        transaction.status == "Initiated"
                          ? styles.orangeBackground
                          : transaction.status == "Successful"
                          ? styles.greenBackground
                          : styles.redBackground
                      }
                    >
                      <img
                        src={
                          transaction.status == "Successful"
                            ? succesful
                            : transaction.status == "Initiated"
                            ? initiated
                            : failed
                        }
                        alt=""
                      />
                    </div>
                    <div className="services-details">
                      <p className="transaction-service">
                        {transaction.service}
                      </p>
                      <p className="transaction-phoneNo">
                        {transaction.phoneNo}
                      </p>
                    </div>
                  </td>
                  <td>₦{transaction.amount}.00</td>
                  <td>₦{transaction.totalAmount}.00</td>
                  <td className="trac transaction-status">
                    {transaction.status}
                  </td>
                  <td className="trac transaction-method">
                    {transaction.paymentMethod}
                  </td>
                  <td className="trac transaction-no">
                    <p className="transaction-service">
                      {transaction.transactionNo}
                    </p>

                    <p className="transaction-phoneNo">{transaction.date}</p>
                  </td>
                  <td className="trac transaction-open-btn">
                    <button>Open</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactionhistory;
