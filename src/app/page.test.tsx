import {render} from "@testing-library/react";
import Page from "./page";

describe('Page', () => {
    it('should render a title', () => {
        const {getByText}= render(<Page />)
        expect(getByText('Get started!!!')).toBeInTheDocument()
    })
})