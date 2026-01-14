import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { routes } from "../src/routes";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  image: "",
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([mockProduct]),
  }),
);

describe("Shopping Cart Happy Path", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Adds an item to cart and display on cart page", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={router} />);

    const productTitle = await screen.findByText(/Test Product/i);
    expect(productTitle).toBeInTheDocument();

    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(plusButton);

    const addToCartButton = screen.getByRole("button", {
      name: /Add To Cart/i,
    });
    await user.click(addToCartButton);

    const cartLink = screen.getByRole("link", { name: /Cart/i });
    await user.click(cartLink);

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();

    const qtyInput = screen.getByDisplayValue("1");
    expect(qtyInput).toBeInTheDocument();
  });
});
