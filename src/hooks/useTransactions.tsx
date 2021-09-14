import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

const TransactionsContext = createContext<ITransactionContext>({} as ITransactionContext);

interface ITransactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

type ITransactionInput = Omit<ITransactions, 'id' | 'createdAt'>

interface ITransactionContext {
  transactions: ITransactions[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}
export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions))
  }, []);

  async function createTransaction(transactionInput: ITransactionInput) {

    const response = await api.post('/transactions', {
      ...transactionInput, createdAt: new Date()
    })
    const { transaction } = response.data;

    setTransactions(prev => [...prev, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
};

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

