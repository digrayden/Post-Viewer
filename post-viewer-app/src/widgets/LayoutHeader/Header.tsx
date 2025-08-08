import Button from '../../shared/ui/Button/Button'

const Header = () => {

  return (
    <header className="header">
      <div className="header_content">
        <h1 className="header_title">Post Viewer</h1>
        <div className="header_buttons">
          <Button>About</Button>
        </div>
      </div>
    </header>
  )
}

export default Header