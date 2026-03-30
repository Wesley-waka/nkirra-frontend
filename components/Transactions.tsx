import { Card, CardHeader, CardContent } from "@/components/ui/card";

type TransactionStatus = "completed" | "pending" | "failed";
type TransactionType = "debit" | "credit";

interface Transaction {
  id: string;
  merchant: string;
  description: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  category: string;
  initials: string;
  avatarColor: { bg: string; text: string };
  avatar?: string;
}

interface DateGroup {
  date: string;
  transactions: Transaction[];
}

const statusStyles: Record<TransactionStatus, string> = {
  completed: "bg-green-50 text-green-700",
  pending:   "bg-amber-50  text-amber-700",
  failed:    "bg-red-50    text-red-700",
};

const statusLabel: Record<TransactionStatus, string> = {
  completed: "Completed",
  pending:   "Pending",
  failed:    "Failed",
};

const activityGroups: DateGroup[] = [
  {
    date: "1 Aug, 2023",
    transactions: [
      {
        id: "txn-1",
        merchant: "Netflix Charge",
        description: "Subscription renewal · Card ••4821",
        amount: 15.99,
        type: "debit",
        status: "completed",
        category: "Entertainment",
        initials: "NC",
        avatarColor: { bg: "bg-blue-50", text: "text-blue-700" },
      },
      {
        id: "txn-2",
        merchant: "Salary received",
        description: "Direct deposit · Acme Corp",
        amount: 3200.0,
        type: "credit",
        status: "completed",
        category: "Income",
        initials: "SR",
        avatarColor: { bg: "bg-green-50", text: "text-green-700" },
      },
      {
        id: "txn-3",
        merchant: "Amazon",
        description: "Online purchase · Card ••4821",
        amount: 84.5,
        type: "debit",
        status: "pending",
        category: "Shopping",
        initials: "AM",
        avatarColor: { bg: "bg-amber-50", text: "text-amber-700" },
      },
      
    ],
  },
  
];

function Avatar({
  initials,
  avatarColor,
  avatar,
  alt,
}: {
  initials: string;
  avatarColor: { bg: string; text: string };
  avatar?: string;
  alt?: string;
}) {
  return avatar ? (
    <img
      className="w-9 h-9 rounded-full object-cover shrink-0 border border-gray-100"
      src={avatar}
      alt={alt}
    />
  ) : (
    <span
      className={`flex items-center justify-center w-9 h-9 rounded-full shrink-0 text-xs font-medium border border-transparent ${avatarColor.bg} ${avatarColor.text}`}
    >
      {initials}
    </span>
  );
}

function TransactionItem({
  txn,
  isLast,
}: {
  txn: Transaction;
  isLast: boolean;
}) {
  const isCredit = txn.type === "credit";
  const amountStr = `${isCredit ? "+" : "-"}$${txn.amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  })}`;

  return (
    <div className="flex items-start gap-3 py-2.5 relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[17px] top-[44px] bottom-[-6px] w-px bg-gray-100" />
      )}

      <Avatar
        initials={txn.initials}
        avatarColor={txn.avatarColor}
        avatar={txn.avatar}
        alt={txn.merchant}
      />

      <div className="flex-1 min-w-0">
        {/* Merchant + amount row */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-gray-900 truncate">{txn.merchant}</p>
          <p
            className={`text-sm font-medium shrink-0 tabular-nums ${
              txn.status === "failed"
                ? "text-gray-400 line-through"
                : isCredit
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >
            {amountStr}
          </p>
        </div>

        {/* Description */}
        <p className="mt-0.5 text-xs text-gray-400">{txn.description}</p>

        {/* Pills */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <span
            className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyles[txn.status]}`}
          >
            {statusLabel[txn.status]}
          </span>
          <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
            {txn.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Transactions() {
  const allTxns = activityGroups.flatMap((g) => g.transactions);
  const total = allTxns.length;
  let globalIndex = 0;

  return (
    <Card className="flex flex-col flex-1 min-h-0">
      <CardHeader className="pb-3 shrink-0 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-medium text-gray-900">Recent activity</p>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-100">
            Last 2 days
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 min-h-0 overflow-y-auto px-5 pb-4">
        {activityGroups.map((group) => (
          <div key={group.date}>
            {/* Date label */}
            <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 pt-4 pb-1">
              {group.date}
            </p>

            {group.transactions.map((txn) => {
              const isLast = globalIndex === total - 1;
              globalIndex++;
              return (
                <TransactionItem key={txn.id} txn={txn} isLast={isLast} />
              );
            })}
          </div>
        ))}

        {/* End of timeline */}
        <div className="flex items-center gap-3 pt-4">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-dashed border-gray-200 shrink-0">
            <svg
              className="w-4 h-4 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 12 12 14 14" />
            </svg>
          </span>
          <p className="text-xs text-gray-300">Start of activity window</p>
        </div>
      </CardContent>
    </Card>
  );
}