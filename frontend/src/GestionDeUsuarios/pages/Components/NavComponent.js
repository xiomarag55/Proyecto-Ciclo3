import Nav from 'react-bootstrap/Nav'

function NavComponent() {
    return (
        <Nav className="justify-content-center"
            activeKey="/users"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Usuarios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Ventas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Vendedores</Nav.Link>
            </Nav.Item>

        </Nav>
    );
}
export default NavComponent;
