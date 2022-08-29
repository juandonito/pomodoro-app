import { render } from "@testing-library/react";
import Clock from "./Clock.component";

test("renders app", () => {
  render(<Clock time={10} />);
});
