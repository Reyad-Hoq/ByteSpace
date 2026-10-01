import { Button, SearchField} from "@heroui/react";

export function SearchOpt() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:w-auto w-full mx-auto">
    <SearchField name="search" className="w-full md:w-xl font-satoshi">
      <SearchField.Group className="m-5 rounded-full bg-white border border-gray-300 flex items-center px-2 py-6">
        <SearchField.SearchIcon />
        <SearchField.Input className="w-full text-lg" placeholder="Course, topic, creator" />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    <Button
          className="gap-3 bg-secondary hover:bg-secondary/90 text-black hover:text-backdrop font-semibold px-7 py-6 rounded-full  shrink-0"
          type="submit"
        >
          Search
        </Button>
    </div>
  );
}