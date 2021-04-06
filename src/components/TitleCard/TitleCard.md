Example:

```jsx
import {CircleImage} from "../CircleImage/CircleImage";
import {Button} from "../Button/Button";

const image = (<CircleImage src={"/example_image.jpeg"} width={250} alt="title image"/>);

<TitleCard image={image} titleText="Lorem Ipsum" subtitleText="Lorem Ipsum">
  <Button>Click me!</Button>
  <Button disabled>Disabled</Button>
</TitleCard>
```