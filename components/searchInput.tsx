import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./ui/input-group"

export function InputGroupKbd() {
  return (
    <InputGroup className="max-w-sm bg-gray-100">
      <InputGroupInput placeholder="Search..." className=""/>
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      {/* <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon> */}
    </InputGroup>
  )
}
