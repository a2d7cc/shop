import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  const toggleSelected = (brand) => {
    Object.keys(device.selectedBrand).length? device.setSelectedBrand({}) : device.setSelectedBrand(brand)
  }

  return (
      <Row className="d-flex">

          {device.brands.map((brand) => (
            <Card
              style={{ cursor: "pointer", width: 'auto'}}
              border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
              key={brand.id}
              className="p-3"
              onClick={() => toggleSelected(brand)}
            >
              {brand.name}
            </Card>
          ))}

      </Row>
  );
});

export default BrandBar;
