import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, Card, TypeButton } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const [type, setType] = useState('deposit');

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
      <Container>
        <h2>New Transaction</h2>

        <input
          placeholder='Title'
        />

        <input
          type="number"
          placeholder='Amount'
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
          placeholder='Type'
        />

        <button type="submit">
          Submit
        </button>

      </Container>
    </Modal>
  )
}