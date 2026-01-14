import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../src/components/Cart";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Define the mock context data
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  image: "",
  qty: 1,
};
const mockContextData = {
  // Add all properties your component expects from the context
  cart: [mockProduct],
  modifyCartQty: vi.fn(),
  deleteCartItem: vi.fn(),
};

// Mock the react-router-dom module
vi.mock("react-router", () => ({
  useOutletContext: () => mockContextData,
}));

describe("Test cart", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("cart item rendered in Cart", async () => {
    render(<Cart />);
    const cartTitle = screen.getByText(/Test Product/i);
    expect(cartTitle).toBeInTheDocument();
  });

  it("calls modify function when increment button is clicked", async () => {
    const user = userEvent.setup();
    render(<Cart />);
    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(plusButton);
    expect(mockContextData.modifyCartQty).toHaveBeenCalledWith(mockProduct, 1);
  });

  it("calls delete function when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(<Cart />);
    const delButton = screen.getByRole("button", { name: /del/i });
    await user.click(delButton);
    expect(mockContextData.deleteCartItem).toHaveBeenCalledWith(mockProduct);
  });
});
