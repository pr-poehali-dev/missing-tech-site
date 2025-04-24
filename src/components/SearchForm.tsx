import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const deviceTypes = [
  { value: "all", label: "Все типы" },
  { value: "smartphone", label: "Смартфоны" },
  { value: "laptop", label: "Ноутбуки" },
  { value: "tablet", label: "Планшеты" },
  { value: "headphones", label: "Наушники" },
  { value: "other", label: "Другое" }
];

interface SearchFormProps {
  onSearch: (query: string, type: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, type);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Поиск по модели, серийному номеру и т.д."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-white dark:bg-gray-900"
        />
        
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Тип устройства" />
          </SelectTrigger>
          <SelectContent>
            {deviceTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button type="submit" className="bg-tech-primary hover:bg-tech-primary/90">
          Поиск
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
