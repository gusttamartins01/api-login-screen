import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { User, Bell, Star, ListTodo } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <Card title="Users">
          <div className="flex items-center gap-3">
            <User size={25} />
            <p>23 users registered.</p>
          </div>
        </Card>

        <Card title="Notifications">
          <div className="flex items-center gap-3">
            <Bell size={25} />
            <p>5 new notifications</p>
          </div>
        </Card>

        <Card title="Reports">
          <div className="flex items-center gap-3">
            <Star size={25} />
            <p>3 reports available</p>
          </div>
        </Card>

        <Card title="Tasks">
          <div className="flex items-center gap-3">
            <ListTodo size={25} />
            <p>8 pending tasks</p>
          </div>
        </Card>
        
      </div>
    </div>
  );
}
