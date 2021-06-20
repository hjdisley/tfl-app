import React from "react"
import { render, screen } from "@testing-library/react"
import ServiceTable from "../ServiceTable"
import "@testing-library/jest-dom"

test("renders table", () => {
  render(<ServiceTable />)
  const tableElement = screen.getByTestId("services")
  expect(tableElement).toBeInTheDocument()
  expect(tableElement).toHaveTextContent("Line")
  expect(tableElement).toHaveTextContent("Status")
})

test("renders last updated time", () => {
  render(<ServiceTable />)
  const updatedAt = screen.getAllByTestId("lastUpdated")
  expect(updatedAt).toBeInTheDocument
})
