import logo from "../../assets/images/RRLogo.png";
import { Container } from "./styles";
import { Button } from "../Button";
import { useState } from "react";
import { NewStickyModal } from "../NewStickyModal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <img src={logo} alt="React Reminder Logo" />
      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <Button title="Adicionar Lembrete" click={() => handleOpenModal()} />
    </Container>
  );
}
