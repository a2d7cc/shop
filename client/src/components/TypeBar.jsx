import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  const toggleSelected = (type) => {
    Object.keys(device.selectedType).length? device.setSelectedType({}) : device.setSelectedType(type)
  }

  return (
    <ListGroup>
        {device.types.map(type => 
                 <ListGroup.Item style={{cursor: 'pointer'}} key={type.id}  active={type.id === device.selectedType.id} onClick={() => toggleSelected(type)}>{type.name} </ListGroup.Item>
        )}
      </ListGroup>
  );
});

export default TypeBar;
