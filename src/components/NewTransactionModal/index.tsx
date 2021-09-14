import { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';

import { Container, Card, TypeButton } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title, amount, category, type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>

        <input
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={e => setAmount(+e.target.value)}
        />

        <Card>
          <TypeButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </TypeButton>

          <TypeButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Expense" />
            <span>Expense</span>
          </TypeButton>
        </Card>

        <input
          placeholder='Category'
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </Container>
    </Modal>
  )
}