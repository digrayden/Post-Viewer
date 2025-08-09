import { useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import Modal from '../../shared/ui/Modal/Modal'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="header">
      <div className="header_content">
        <h1 className="header_title">Post Viewer</h1>
        <div className="header_buttons">
          <Button onClick={() => setIsModalOpen(true)}>About</Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-title">About Project</h2>
        <p>Aliqua adipisicing quis laboris excepteur voluptate magna aliquip officia est occaecat anim nulla. Fugiat consequat in sint non ipsum nulla laboris deserunt fugiat. Ex amet enim ipsum aliqua. Aliqua nisi aute aliqua sint do adipisicing nisi reprehenderit eu commodo aliquip aliqua. Ut velit cillum mollit voluptate velit enim exercitation ea laboris in.</p>
      </Modal>
    </header>
  )
}

export default Header