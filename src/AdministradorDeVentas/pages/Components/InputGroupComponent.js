import React from "react";
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Search from '@material-ui/icons/Search';



class InputGroupComponent extends React.Component {

    render() {
        return (
            
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
           

        );
    }
}
export default InputGroupComponent;