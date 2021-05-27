import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import logo from "./logo.svg";
import { getData } from "./utils/index";
import mockAxios from "axios";

describe("renders App component", () => {
  it("renders learn react link", () => {
    renderComponent();
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the image in the app component", () => {
    renderComponent();
    const imageElem = screen.getByRole("img");
    expect(imageElem.src).toContain(logo);
  });

  // it("Increase value by one upon Click", () => {
  //   renderComponent();
  //   const headingElem = screen.getByRole("heading");
  //   expect(headingElem).toHaveTextContent("0");
  //   const buttonElem = screen.getByRole("button", { name: "counter" });
  //   userEvent.click(buttonElem);
  //   expect(headingElem).toHaveTextContent("1");
  // });
  it.only("returns data from an api", async () => {
    let fakeData = [
      {
        address: {
          city: "Gwenborough",
          geo: { lat: "-37.3159", lng: "81.1496" },
          street: "Kulas Light",
          suite: "Apt. 556",
          zipcode: "92998-3874",
        },

        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org",
      },
    ];
    renderComponent();
    getData.mockResolvedValueOnce(fakeData);

    let elem = screen.getByRole("heading", { name: "Leanne Graham" });
    await (() => {
      expect(elem).toBeInTheDocument();
    })();
  });
});

function renderComponent() {
  render(<App />);
}
