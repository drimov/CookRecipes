import { Form, FormControl, FormField, FormItem } from "../ui/form"

import { Input } from "../ui/input"
import { Search } from "lucide-react"
import { useForm } from "react-hook-form"

type SearchFormProps = {
  handleSearch: React.Dispatch<React.SetStateAction<string>>
}

type SearchFormValues = {
  research: string
}
const SearchForm = ({ handleSearch }: SearchFormProps) => {
  const defaultValues = {
    research: "",
  }
  const form = useForm<SearchFormValues>({
    defaultValues,
    mode: "onChange",
  })
  let searchTimeoutId: NodeJS.Timeout
  const onChange = (data: SearchFormValues) => {
    if (searchTimeoutId) {
      clearTimeout(searchTimeoutId)
    }
    searchTimeoutId = setTimeout(() => {
      handleSearch(data.research)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-row justify-center lg:my-4"
        onChange={() => onChange(form.getValues())}
      >
        <FormField
          control={form.control}
          name="research"
          render={({ field }) => (
            <FormItem className="w-full max-w-sm">
              <FormControl>
                <Input
                  placeholder="Search here..."
                  {...field}
                  className="text-muted-foreground"
                  autoComplete="off"
                  icon={<Search className="h-4 w-4" />}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchForm
