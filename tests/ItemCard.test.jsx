import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemCard from "../src/components/ItemCard";
import { expect } from "vitest";
// import { describe, it, expect } from "vitest";

const mockItem = { id: 1, title: "Test Product", price: 10, image: "" };

test("increments quantity and calls onAddToCart with correct data", async () => {
  const mockAdd = vi.fn();
  const user = userEvent.setup();

  render(<ItemCard itemInfo={mockItem} onAddToCart={mockAdd} />);

  const plusBtn = screen.getByRole("button", { name: "+" });
  await user.click(plusBtn);

  const addBtn = screen.getByRole("button", { name: /add to cart/i });
  await user.click(addBtn);

  expect(mockAdd).toHaveBeenCalledWith(mockItem, 1);
});
