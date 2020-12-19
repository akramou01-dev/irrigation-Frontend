import React from 'react';
import { Container ,Card ,Image} from 'semantic-ui-react';
import Image2 from "../../assets/farm.jfif";
import "./Service.css";

const Offers = () => {
 return (
<div>
<Container className="d-flex">
 <Card className="card_offer">
    <Image className="photo" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center ">Offer one</Card.Header>
      <Card.Description className="extra-text _desc">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>

  <Card className="card_offer">
    <Image className="photo" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center">Offer two</Card.Header>
      <Card.Description className="extra-text _desc">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>

  <Card className="card_offer">
    <Image className="photo" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center">Offer three</Card.Header>
      <Card.Description className="extra-text _desc">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>
</Container>

<Container className="d-flex">
 <Card className="card_offer">
    <Image className="photo" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center">Offer four</Card.Header>
      <Card.Description className="extra-text _desc">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>

  <Card className="card_offer">
    <Image className="photo" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center">Offer five</Card.Header>
      <Card.Description className="extra-text _desc">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>

  <Card className="card_offer">
    <Image className="photo" className="text-center w-full" src={Image2} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="text-green text-center">Offer six</Card.Header>
      <Card.Description className="extra-text _desc ">
        Here we put the description of the offer
      </Card.Description>
    </Card.Content>
  </Card>
</Container>
</div>
 );
}

export default Offers; 