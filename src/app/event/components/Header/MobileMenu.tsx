interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu">
        <button onClick={onClose}>Fechar</button>

        <ul>
          <li>Todos os eventos</li>
          <li>Todas as cidades</li>
          <li>Minha Conta</li>
          <li>Favoritos</li>
        </ul>
      </div>
    </div>
  );
}
