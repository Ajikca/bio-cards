import { Component } from "react";
import Card from "./Card";
import { faker } from "@faker-js/faker";
export default class Cards extends Component {
  render() {
    return (
      <div className="ui link cards">
        <Card
          image={faker.image.avatar()}
          name={faker.name.firstName('female')}
          meta={faker.lorem.words(3)}
          description={faker.lorem.sentence(5)}
        />
        <Card
          image={faker.image.avatar()}
          name={faker.name.firstName('male')}
          meta={faker.lorem.words(3)}
          description={faker.lorem.sentence(5)}
        />
        <Card
        image={faker.image.avatar()}
        name={faker.name.lastName()}
        meta={faker.lorem.words(2)}
        description={faker.lorem.sentence(5)}
        />
    
      </div>
    );
  }
}
