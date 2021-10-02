
import Card from 'react-bootstrap/Card'
// import NavComponent from './Components/NavComponent';
import ModalComponent from './Components/ModalComponent';
import DataTableComponent from './Components/DataTableComponent';

const GestionDeUsuarios = () => {
  return (
    <div>
      {/* <NavComponent /> */}
      <Card>
        <Card.Body  >
          <ModalComponent />
          <DataTableComponent />
        </Card.Body>
      </Card>

    </div>
  );
};

export default GestionDeUsuarios;