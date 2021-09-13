import Modal from 'react-modal';
import { Container } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>new transaction</h2>
    </Modal>
  )
}