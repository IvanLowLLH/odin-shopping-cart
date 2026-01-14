import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import * as reactRouter from "react-router"; // Import as a namespace to mock hooks
import Cart from "../src/components/Cart";

// 1. Mock the specific module used in Cart.jsx
vi.mock("react-router", () => ({
  useOutletContext: vi.fn(),
}));

describe("Cart Integration-Lite", () => {
  /**
   * This wrapper mimics the behavior of App.jsx by managing the cart state
   * and providing the logic to the Cart component.
   */
  const TestStatefulWrapper = () => {
    const [cart, setCart] = useState([
      { id: 1, title: "Delete Me Product", price: 10, qty: 1 },
    ]);

    // Mimic the delete logic from App.jsx
    const deleteCartItem = (product) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    };

    const modifyCartQty = vi.fn(); // Mocked as it's not the focus here

    // Dynamically update the mock return value whenever this wrapper re-renders
    vi.mocked(reactRouter.useOutletContext).mockReturnValue({
      cart,
      deleteCartItem,
      modifyCartQty,
    });

    return <Cart />;
  };

  it("should remove the product from the document when the delete button is clicked", async () => {
    const user = userEvent.setup();
    render(<TestStatefulWrapper />);

    // Verify initial state: Product is visible
    expect(screen.getByText("Delete Me Product")).toBeInTheDocument();
    expect(screen.queryByText(/your cart is empty/i)).not.toBeInTheDocument();

    // Act: Click the delete button in CartItem
    const deleteBtn = screen.getByRole("button", { name: /del/i });
    await user.click(deleteBtn);

    // Assert: Product is removed and the empty message appears
    expect(screen.queryByText("Delete Me Product")).not.not.toBeInTheDocument();
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
