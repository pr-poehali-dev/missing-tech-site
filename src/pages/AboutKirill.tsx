
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Briefcase, Code, Mail, Github, Linkedin } from "lucide-react";

const AboutKirill = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1">
        {/* Секция героя */}
        <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-tech-primary/10 to-transparent">
          <div className="container max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Кремков Кирилл" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-tech-dark dark:text-white">
                  Кремков Кирилл
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Разработчик | Исследователь | Преподаватель
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="default">
                    <Mail className="mr-2 h-4 w-4" /> Связаться
                  </Button>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Обо мне */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Меня зовут Кремков Кирилл, я опытный разработчик с более чем 5-летним стажем работы в IT-индустрии. 
                Я специализируюсь на разработке веб-приложений с использованием современных технологий и фреймворков. 
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Помимо программирования, я увлекаюсь исследованиями в области искусственного интеллекта и машинного обучения, 
                а также преподаю технические дисциплины в одном из ведущих университетов. Моя цель — создавать 
                инновационные решения, которые делают жизнь людей проще и интереснее.
              </p>
            </div>
          </div>
        </section>
        
        {/* Образование и опыт */}
        <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Образование */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-tech-primary" />
                  <h2 className="text-2xl font-bold">Образование</h2>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg">Магистр компьютерных наук</h3>
                      <p className="text-gray-500 dark:text-gray-400">2015-2017</p>
                      <p className="mt-2">Московский государственный университет</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg">Бакалавр прикладной математики</h3>
                      <p className="text-gray-500 dark:text-gray-400">2011-2015</p>
                      <p className="mt-2">Санкт-Петербургский политехнический университет</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Опыт работы */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="h-6 w-6 text-tech-primary" />
                  <h2 className="text-2xl font-bold">Опыт работы</h2>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg">Ведущий разработчик</h3>
                      <p className="text-gray-500 dark:text-gray-400">2020-настоящее время</p>
                      <p className="mt-2">ТехноИнновации</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg">Разработчик</h3>
                      <p className="text-gray-500 dark:text-gray-400">2017-2020</p>
                      <p className="mt-2">ДиджиталСолюшнс</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Навыки */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-6 w-6 text-tech-primary" />
              <h2 className="text-2xl font-bold">Профессиональные навыки</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Языки программирования</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      JavaScript/TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      Java
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Фреймворки</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      React/NextJS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      SpringBoot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      FastAPI
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Инструменты</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      Git
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      Docker
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                      CI/CD
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Проекты */}
        <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800/50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="/placeholder.svg" 
                    alt="Проект 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Умная аналитическая платформа</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Разработка AI-платформы для анализа больших данных и прогнозирования трендов в различных отраслях
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">TensorFlow</span>
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">Python</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="/placeholder.svg" 
                    alt="Проект 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Образовательная платформа "ТехноУчёба"</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Создание интерактивной образовательной платформы для обучения программированию с элементами геймификации
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">NextJS</span>
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded text-xs">MongoDB</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Контакты */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Свяжитесь со мной</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Если у вас есть интересный проект или предложение о сотрудничестве, не стесняйтесь связаться со мной.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="default" size="lg">
                <Mail className="mr-2 h-5 w-5" /> kirill.kremkov@mail.ru
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2023 Кремков Кирилл — Персональный сайт</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutKirill;
