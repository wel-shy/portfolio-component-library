Example:

```jsx
import {CircleImage} from "../../Atoms/CircleImage/CircleImage";
import {Button} from "../../Atoms/Button/Button";

const image = (<CircleImage src={"/example_image.jpeg"} width={250} alt="title image"/>);

<TitleCard image={image} titleText="Lorem Ipsum" subtitleText="Lorem Ipsum">
  <Button>Click me!</Button>
  <Button disabled>Disabled</Button>
</TitleCard>
```