import { SearchField} from "@heroui/react";

export function SearchOpt() {
  return (
    <SearchField name="search" className="w-full md:w-xl mx-auto font-satoshi">
      <SearchField.Group className="rounded-full bg-white border border-gray-300 flex items-center px-2 py-5">
        <SearchField.SearchIcon />
        <SearchField.Input className="w-full text-lg" placeholder="Course, topic, creator" />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}