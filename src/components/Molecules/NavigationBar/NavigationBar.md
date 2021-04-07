Example navigation bar:

```jsx
import {NavItem} from "../../Atoms/NavItem/NavItem";

const brand = <NavItem href="/">Porfolio</NavItem>;
const links = [
  <NavItem href="/" key="1">Section 1</NavItem>,
  <NavItem href="/" key="2" active>Section 2</NavItem>,
  <NavItem href="/" key="3">Section 3</NavItem>,
  <NavItem href="/" key="4">Section 4</NavItem>,
  <NavItem href="/" key="5">Section 5</NavItem>
];

<NavigationBar 
  brand={brand} 
  rightGroup={links} 
  closeIcon={<span>❌</span>} 
  menuIcon={<span>🍔</span>}
/>
```