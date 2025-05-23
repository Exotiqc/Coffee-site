
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const [order, setOrder] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const menu = {
    coffee: ["Espresso", "Latte", "Cappuccino"],
    food: ["Croissant", "Bagel", "Muffin"],
  };

  const addToOrder = (item: string) => setOrder([...order, item]);
  const total = order.length * 5;

  return (
    <div className="min-h-screen bg-[#f8f4f0] p-6 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Brew & Bean Café</h1>
        <p className="text-lg text-gray-600">Your daily dose of joy ☕</p>
      </header>

      <section className="mb-6 max-w-md mx-auto">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <Input
              type="text"
              placeholder="Your Name"
              className="mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="w-full">Continue</Button>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="flex justify-center mb-6">
            <TabsTrigger value="coffee">Coffee</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>

          <TabsContent value="coffee">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {menu.coffee.map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-2">{item}</h3>
                    <Button onClick={() => addToOrder(item)}>Add to Order</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {menu.food.map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-2">{item}</h3>
                    <Button onClick={() => addToOrder(item)}>Add to Order</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-8 max-w-md mx-auto">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-2 list-disc pl-6">
              {order.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-right font-semibold">Total: ${total}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
