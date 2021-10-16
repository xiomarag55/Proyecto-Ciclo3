import Card from 'react-bootstrap/Card'
import DataTableComponent from './Components/DataTableComponent';
import Header from "../../Shared/Header";

const GestionDeUsuarios = () => {
  return (
    <>
    <Header />
    <div>
      {/* <NavComponent /> */}
      <Card>
        <Card.Body  >
          {/* <ModalComponent /> */}
          <DataTableComponent />
        </Card.Body>
      </Card>

    </div>
    </>
  );
};

export default GestionDeUsuarios;