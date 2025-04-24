import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import DeviceCard, { DeviceProps } from "@/components/DeviceCard";

// Моковые данные устройств
const mockDevices: DeviceProps[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max (Синий)",
    type: "Смартфон",
    location: "Москва, ул. Ленина",
    date: "21.08.2023",
    image: "/placeholder.svg",
    reward: "5 000 ₽"
  },
  {
    id: "2",
    title: "MacBook Pro 16 (2021)",
    type: "Ноутбук",
    location: "Санкт-Петербург, Невский пр-т",
    date: "15.08.2023",
    image: "/placeholder.svg",
    reward: "10 000 ₽"
  },
  {
    id: "3",
    title: "Samsung Galaxy S22 Ultra",
    type: "Смартфон",
    location: "Екатеринбург, ТЦ Гринвич",
    date: "17.08.2023",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    title: "AirPods Pro",
    type: "Наушники",
    location: "Москва, метро Арбатская",
    date: "22.08.2023",
    image: "/placeholder.svg",
    reward: "2 000 ₽"
  },
  {
    id: "5",
    title: "iPad Pro 12.9 (2022)",
    type: "Планшет",
    location: "Казань, ул. Баумана",
    date: "19.08.2023",
    image: "/placeholder.svg",
    reward: "8 000 ₽"
  },
  {
    id: "6",
    title: "Asus ROG Gaming Laptop",
    type: "Ноутбук",
    location: "Новосибирск, ТЦ Аура",
    date: "16.08.2023",
    image: "/placeholder.svg",
    reward: "15 000 ₽"
  }
];

const Index = () => {
  const [devices, setDevices] = useState(mockDevices);
  const [filteredDevices, setFilteredDevices] = useState(mockDevices);

  const handleSearch = (query: string, type: string) => {
    let filtered = [...devices];
    
    if (query) {
      filtered = filtered.filter(device => 
        device.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    if (type && type !== "all") {
      filtered = filtered.filter(device => 
        device.type.toLowerCase().includes(type.toLowerCase())
      );
    }
    
    setFilteredDevices(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1">
        {/* Заголовок и поиск */}
        <section className="pt-12 pb-16 px-4 bg-gradient-to-b from-tech-primary/10 to-transparent">
          <div className="container max-w-6xl mx-auto space-y-6">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-tech-dark dark:text-white">
                Найдите свою пропавшую технику
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Наш сервис помогает владельцам найти потерянные или украденные устройства, а также тем, кто их нашел
              </p>
            </div>
            
            <SearchForm onSearch={handleSearch} />
          </div>
        </section>
        
        {/* Список устройств */}
        <section className="py-12 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Недавно добавленные устройства</h2>
            
            {filteredDevices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  По вашему запросу ничего не найдено
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDevices.map((device) => (
                  <DeviceCard key={device.id} {...device} />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Информационный блок */}
        <section className="py-12 px-4 bg-white dark:bg-gray-800">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Как это работает?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Сервис "ТехноПоиск" объединяет людей, чтобы помочь найти пропавшую технику
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-tech-primary text-4xl font-bold mb-2">1</div>
                  <h3 className="font-bold text-lg">Сообщите о пропаже</h3>
                  <p className="text-gray-600 dark:text-gray-400">Создайте объявление о пропавшем устройстве с подробным описанием</p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-tech-primary text-4xl font-bold mb-2">2</div>
                  <h3 className="font-bold text-lg">Система поиска</h3>
                  <p className="text-gray-600 dark:text-gray-400">Наша система поможет сопоставить найденные устройства с заявками</p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-tech-primary text-4xl font-bold mb-2">3</div>
                  <h3 className="font-bold text-lg">Получите устройство</h3>
                  <p className="text-gray-600 dark:text-gray-400">Свяжитесь с нашедшим и верните свое устройство</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2023 ТехноПоиск — Сервис поиска пропавшей техники</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
